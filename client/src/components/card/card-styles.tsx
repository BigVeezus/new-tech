import styled from "styled-components";

export const CardWrap = styled.div`
  color: black;
  background: linear-gradient(#93e9be, #1fb57a);
  padding: 30px;
  margin: 50px auto;
  width: 50%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  .heading {
    font-weight: 800;
  }
  .detail {
  }
  .right {
    text-align: right;
    align-items: end;
  }
  .stat {
    font-size: 1.5rem;
  }
`;
export const CardButtonWrap = styled.button`
  background-color: #93e9ba;
  /* width: 100px; */
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #178157;
`;
