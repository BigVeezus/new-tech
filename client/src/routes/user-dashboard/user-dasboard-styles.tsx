import styled from "styled-components";

export const DashboardWrap = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
  color: white;
  background-color: #0e0e18;
  /* height: 100vh; */
  margin: 0;
  .menu {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    width: 50%;
    margin: 10px auto;
  }
  .hi {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }
  .top {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 33px;
    font-size: 1.5rem;
    color: #ffe602;
  }
  .menu-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  .green {
    color: green;
  }
  .marg {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
