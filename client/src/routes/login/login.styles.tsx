import styled from "styled-components";

export const LoginWrap = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  gap: 15px;
  label {
    display: block;
  }
  input {
    width: 100%;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid white;
  }
  input:focus {
    color: white;
  }
  .email,
  .password {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
  .forgot {
    text-align: right;
    color: #ffe602;
  }
  .signUp {
    color: #ffe602;
  }
  .submit {
    background-color: #ffe602;
    width: 100%;
    border: none;
    margin-top: 20px;
    font-size: 2rem;
  }
`;
