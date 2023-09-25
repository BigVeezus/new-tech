import { Link } from "react-router-dom";
import styled from "styled-components";
export const LinkStyle = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
  border-radius: 10px;
  text-decoration: none;
`;
export const HomeWRap = styled.div`
  background-color: #0e0e18;
  height: 86vh;
  h1 {
    color: #ffe602;
    font-size: 3rem;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  Link {
  }
  .btn-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 30%;
    .btn-white {
      background-color: white;
      color: black;
      border: 1px solid white;
    }
    .btn-yellow {
      background-color: #ffe602;
      color: black;
      border: 1px solid #ffe602;
    }
  }
  text-align: center;
  padding: 20px;
`;
