import styled from "styled-components";

export const SecurityCardWrap = styled.div`
  background: #263238;
  height: 200px;
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 20px;
  .progress-wrap {
    background-color: #d9d9d9;
    width: 70%;
    height: 15px;
    border-radius: 5px;
  }
  .progress {
    background-color: #29c04a;
    width: 90%;
    height: inherit;
    border-radius: 5px;
  }
  .top-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .padlock {
    width: 40px;
  }
  .top {
    border: 2px solid pink;
  }
`;
