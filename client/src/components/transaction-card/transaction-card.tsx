import { TransactionCardWrap } from "./transaction-card.styles";
import fwdArrow from "../../assets/forward-arrow.svg";
interface CardsProps {
  img: string;
  head: string;
  text: string;
}
export const TransactionCard = (props: CardsProps) => {
  return (
    <TransactionCardWrap>
      <img src={props.img} />
      <div className="mid">
        <h2>{props.head}</h2>
        <p>{props.text}</p>
      </div>
      <img src={fwdArrow} />
    </TransactionCardWrap>
  );
};
