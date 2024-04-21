import { useContext, useState } from "react";
import "./DepositPage.css";
import { ApiContext } from "../../contexts/api-context";
import Header from "../../ui/components/Header";
import Cedula from "./components/Cedula";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DepositPage() {
  const { name, account, agency, credito, transacao, api, setCredito } =
    useContext(ApiContext);
  const [quantidadeDepositada, setQuantidadeDepositada] = useState(0);

  const handleClick = async () => {
    setQuantidadeDepositada(
      quantidadeDepositada +
      transacao[10] * 10 +
        transacao[20] * 20 +
        transacao[2] * 2 +
        transacao[5] * 5 +
        transacao[50] * 50 +
        transacao[100] * 100 +
        transacao[200] * 200
    );
    console.log(quantidadeDepositada);

    axios
      .post(`${api}/deposit`, transacao)

      .then((response) => {
        console.log(response.data);
        setCredito(response.data.current_balance);
      })
      .catch((error) => {
        console.error(error);
      });

      transacao[2] = 0;
      transacao[5] = 0;
      transacao[10] = 0;
      transacao[20] = 0;
      transacao[50] = 0;
      transacao[100] = 0;
      transacao[200] = 0;
  };

  return (
    <main className="deposit_page">
      <Header name={name} account={account} agency={agency} />
      <div className="deposit_top_box">
        <div className="left_box">
          <p className="left_box_text">Saldo atual: R$ {credito}</p>
        </div>
        <p className="deposit_right_text">
          Quantidade depositada: R$ {quantidadeDepositada}
        </p>
      </div>
      <div className="deposit_middle">
        <p className="left_text">
          Selecione as cédulas e as quantidades que você deseja.
        </p>
        <Cedula valor={2}></Cedula>
        <Cedula valor={5}></Cedula>
        <Cedula valor={10}></Cedula>
        <Cedula valor={20}></Cedula>
        <Cedula valor={50}></Cedula>
        <Cedula valor={100}></Cedula>
        <Cedula valor={200}></Cedula>
      </div>
      <div className="deposit_bottom">
        <Link to="/HomePage" className="link_home">
          <button className="back_button">Voltar</button>
        </Link>
        <button className="back_button" onClick={handleClick}>
          Depositar
        </button>
      </div>
    </main>
  );
}


