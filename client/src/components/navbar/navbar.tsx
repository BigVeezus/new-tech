import { NavWrap } from "./navbar.styles";
import logo from "../../assets/nav-trap-logo.svg";
import { Outlet } from "react-router";
export const Navbar = () => {
  return (
    <div className="app">
      <NavWrap>
        <img src={logo} />
        <h1>Trap</h1>
      </NavWrap>
      <Outlet />
    </div>
  );
};
