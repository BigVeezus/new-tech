import { TransactionsWrap } from "./transactions.styles";
import backArrow from "../../assets/back-arrow.svg";
import bank from "../../assets/bank-icon.svg";
import save from "../../assets/save-icon.svg";
import bulk from "../../assets/bulk-icon.svg";
import globe from "../../assets/globe-icon.svg";
import person from "../../assets/person-icon.svg";
import qr from "../../assets/qr-icon.svg";
import { Link } from "react-router-dom";
import { TransCardsContainer } from "../../components/transaction-card/transaction-card.styles";
import { TransactionCard } from "../../components/transaction-card/transaction-card";
export const Transactions = () => {
  return (
    <TransactionsWrap>
      <div className="transac-top">
        <Link to={"../"}>
          <img src={backArrow} />
        </Link>
        <h2 className="center">Bank Transactions</h2>
      </div>
      <TransCardsContainer>
        <TransactionCard
          img={bank}
          head="To Bank Account"
          text="Local transfers to banks in United Kingdom"
        />
        <TransactionCard
          img={save}
          head="Save Money Today"
          text="5% bonus on every monthly savings"
        />
        <TransactionCard
          img={bulk}
          head="Bulk Transfer"
          text="Transfer to multiple beneficiaries"
        />
        <TransactionCard
          img={globe}
          head="International Transfer"
          text="Transfer money to other countries"
        />
        <TransactionCard
          img={person}
          head="Add New Beneficiary"
          text="Save beneficiary for later"
        />
        <TransactionCard
          img={qr}
          head="QR Payment"
          text="Scan QR code and pay instantly"
        />
      </TransCardsContainer>
    </TransactionsWrap>
  );
};
