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
      <div>
        <h2>Secure your account</h2>
        <p>Hi, add more secret questions to secure your profile</p>
        <hr />
        <h2>Add Security Question</h2>
      </div>
    </SecurityCardWrap>
  );
};
