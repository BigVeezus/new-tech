import { SecurityCardWrap } from "./security-card-styles";
import padlock from "../../assets/padlock.svg";
export const SecurityCard = () => {
  return (
    <SecurityCardWrap>
      <div className="top-flex">
        <img className="padlock" src={padlock} />
        <div className="progress-wrap">
          <div className="progress" />
        </div>
      </div>
      <div className="sec-card-bottom">
        <h2 className="yellow">Secure your account</h2>
        <p>Hi, add more secret questions to secure your profile</p>
        <hr />
        <h2 className="yellow right">Add Security Question</h2>
      </div>
    </SecurityCardWrap>
  );
};
