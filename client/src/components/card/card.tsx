import { CardButtonWrap, CardWrap } from "./card-styles";

export const Card = () => {
  return (
    <CardWrap>
      <div className="detail">
        <p className="heading">Balance</p>
        <p className="stat">$1000</p>
      </div>
      <div className="detail right">
        <p className="heading">Status</p>
        <p className="stat">Active</p>
      </div>
      <div className="detail ">
        <p className="heading">Account Number</p>
        <p className="stat">100356630</p>
      </div>
      <div className="detail right">
        <p className="heading">Type</p>
        <p className="stat">Tier 1 savings account</p>
      </div>
      <CardButtonWrap>Fund Account</CardButtonWrap>
      <CardButtonWrap>Transaction History</CardButtonWrap>
    </CardWrap>
  );
};
