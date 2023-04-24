import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Incomecar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/user/income-car");
      //   console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>
        Users which have income lower than $5 USD and have a car of brand BMW or
        Mercedes
      </h1>
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

export default Incomecar;

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
