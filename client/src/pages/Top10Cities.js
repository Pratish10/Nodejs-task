import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Top10Cities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/user/top10cities");
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>
        Show the data of top 10 cities which have the highest number of users
        and their average income
      </h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>S No.</th>
            <th>City</th>
            <th>No.of Cities</th>
            <th>Average Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.count}</td>
              <td>${item.avgIncome.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Top10Cities;

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
    padding: 20px 10px;
    /* border: 1px solid black; */
  }
`;
