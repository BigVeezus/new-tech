import { Card } from "../../components/card/card";
import { DashboardWrap } from "./user-dasboard-styles";
import airtime from "../../assets/airtime.svg";
import savings from "../../assets/savings.svg";
import transacts from "../../assets/transactions.svg";
import createAcc from "../../assets/createBank.svg";
import profile from "../../assets/profile.svg";
import notifs from "../../assets/notifs.svg";
import { SecurityCard } from "../../components/security-card/security-card";
import { Link } from "react-router-dom";
// import { Slider } from "../../components/slider/slider";

export const UserDashboard = () => {
  return (
    <DashboardWrap>
      <div className="top">
        <div className="hi">
          <img src={profile} />
          <h3>Hi, Eric</h3>
        </div>
        <img src={notifs} />
      </div>
      <div className="top">
        <p>Accounts</p>
        <p>View All Accounts</p>
      </div>
      <Card />
      <div className="top">
        <p>My Favorites</p>
        <p>Edit Favourites</p>
      </div>
      <div className="menu">
        <Link to={"/transactions"}>
          <div className="menu-item">
            <img src={transacts} />
            <p>Bank Transactions</p>
          </div>
        </Link>
        <div className="menu-item">
          <img src={savings} />
          <p>Save & Keep</p>
        </div>
        <div className="menu-item">
          <img src={airtime} />
          <p>Airtime & Data</p>
        </div>
        <div className="menu-item">
          <img src={createAcc} />
          <p>Create Account</p>
        </div>
      </div>
      <div className="top marg">
        <p>Pending Actions</p>
        <p className="green">90% Done</p>
      </div>
      <SecurityCard />
      {/* <Slider /> */}
    </DashboardWrap>
  );
};
