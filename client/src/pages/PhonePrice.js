import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PhonePrice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/user/phone-price");
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Male Users which have phone price greater than 10,000</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default PhonePrice;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding: 4rem 2rem;
    font-weight: bold;
    font-size: larger;
  }
  .table-auto {
    margin-top: 1rem;
  }
  .table-auto th,
  .table-auto td {
    text-align: center;
    padding: 15px 7px;
    /* border: 1px solid black; */
  }
`;
