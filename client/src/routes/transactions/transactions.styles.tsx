import styled from "styled-components";

export const TransactionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0e0e18;
  color: white;
  padding: 50px;
  .transac-top {
    display: flex;
    width: 50%;
    margin: 10px auto;
    justify-content: space-between;
    h2 {
      align-self: center;
      flex: 1;
    }
    .center {
      text-align: center;
    }
  }
`;
