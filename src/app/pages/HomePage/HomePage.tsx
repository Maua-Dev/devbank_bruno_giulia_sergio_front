import { useContext, useEffect } from "react";
import "./HomePage.css";
import Card from "./components/Card";
import axios from "axios";
import { ApiContext } from "../../contexts/api-context";
import { Link } from "react-router-dom";
import Header from "../../ui/components/Header";

export default function MainPage() {
  const {
    setName,
    setAccount,
    setAgency,
    setCredito,
    api,
    name,
    account,
    agency,
    credito,
  } = useContext(ApiContext);

  const requestApi = async () => {
    const response = await axios.get(api);
    setAgency(response.data.agency);
    setName(response.data.name);
    setAccount(response.data.account);
    setCredito(response.data.current_balance);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <main className="home_page">
      <Header name={name} account={account} agency={agency}/>
      <div className="top_box">
        <p className="text">O que você deseja fazer?</p>
        <div className="right_box">
          <p className="right_text">Saldo atual: R$ {credito}</p>
        </div>
      </div>
      <div className="middle">
        <Card Page="DepositPage" text="Depositar"></Card>
        <Card Page="WithdrawalPage" text="Sacar"></Card>
        <Card Page="Transacao" text="Transações"></Card>
        <Card Page="Cotacoes" text="Câmbio"></Card>
      </div>
      <div>
        <Link to={"/"} className="link_home">
          <button className="button">Home</button>
        </Link>
      </div>
    </main>
  );
}
