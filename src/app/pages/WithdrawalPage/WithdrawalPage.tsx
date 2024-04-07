import { useContext } from "react";
import "./WithdrawalPage.css";
import { ApiContext } from "../../contexts/api-context";
import Header from "../../ui/components/Header";

export default function DepositPage() {
  const {
    name,
    account,
    agency,
    credito
  } = useContext(ApiContext);



  return (
    <main className="deposit_page">
      <Header name={name} account={account} agency={agency}/>
      <div className="deposit_top_box">
        <div className="left_box">
          <p className="left_text">Saldo atual: R$ {credito}</p>
        </div>
        <p className="deposit_right_text">Quantidade sacada: R$ </p>
      </div>
    </main>
  );
}