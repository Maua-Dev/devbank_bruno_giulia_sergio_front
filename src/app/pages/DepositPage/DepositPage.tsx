import { useContext, useState } from "react";
import "./DepositPage.css";
import { ApiContext } from "../../contexts/api-context";
import Header from "../../ui/components/Header";
import Cedula from "./components/Cedula";
import { Link } from "react-router-dom";
import axios, { isAxiosError } from "axios";

export default function DepositPage() {
  const { name, account, agency, credito, transacao, api, setCredito } =
    useContext(ApiContext);
  const [quantidadeDepositada, setQuantidadeDepositada] = useState(0);

  const [alertVisibility, setAlertVisibility] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const handleCloseAlert = () => {
    setAlertVisibility(!alertVisibility);
    setQuantidadeDepositada(0);
  };

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
          if (isAxiosError(error))
            setError(error.response?.data.detail);
          setAlertVisibility(true);
        })
  
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
      <div>
          {alertVisibility && (
            <div className="error_box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16vh"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <div className="errorMessage">
                <h1>Erro</h1>
                <p>{error}</p>
              </div>
              <button className="closeAlert" onClick={handleCloseAlert}>
                Ok
              </button>
            </div>
          )}
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
