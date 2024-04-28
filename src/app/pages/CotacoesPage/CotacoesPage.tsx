import { ReactNode, useContext, useEffect, useState } from "react";
import { ApiContext } from "../../contexts/api-context";
import Header from "../../ui/components/Header";
import axios from "axios";
import "./CotacoesPage.css";
import {
  CotacaoApiContext,
  CotacaoType,
  CurrencyType,
} from "../../contexts/apiCotacao-context";
import CotacaoCard from "./components/CotacaoCard";
import { Link } from "react-router-dom";

export default function CotacoesPage() {
  const { name, account, agency } = useContext(ApiContext);

  const { cotacaoApi } = useContext(CotacaoApiContext);

  const [alertVisibility, setAlertVisibility] = useState<boolean>(false);

  const [cotacoesObject, setCotacoesObject] = useState<CotacaoType>({
    moedas: {},
  });

  const [inputValue, setInputValue] = useState("");


  const handleObject = (): ReactNode => {
    return Object.keys(cotacoesObject.moedas).map((key) => {
      console.log(cotacoesObject.moedas[key as keyof Object]);
      let currencyObject = cotacoesObject.moedas as CurrencyType;
      console.log(currencyObject[key as keyof CurrencyType]);
      return (
        <CotacaoCard
          currency={
            currencyObject[key as keyof CurrencyType] as unknown as CurrencyType
          }
        ></CotacaoCard>
      );
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestApi();
  };

  const requestApi = async () => {
    try {
      let response;
      if (inputValue !== "") {
        response = await axios.get(
          `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,BTC-BRL,${inputValue.toLocaleUpperCase()}-BRL`
        );
      } else {
        response = await axios.get(cotacaoApi);
      }
      console.log(cotacaoApi);
      setCotacoesObject({ ...cotacoesObject, moedas: response.data });
      console.log(response.data);
      console.log(cotacoesObject);
      handleObject();
    } catch (error) {
      setAlertVisibility(true);
      // console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    requestApi();
  }, []);

  useEffect(() => {
    setAlertVisibility(false);
  }, [inputValue]);

  return (
    <main className="cotacoes_page">
      <Header account={account} agency={agency} name={name} />
      <div className="cotacoes_top_box">
        <p>Saldo em diferentes cotações</p>
      </div>
      <div className="cotacoes_middle">{handleObject()}</div>
      <div className="cotacao_bottom">
        <div className="form_box">
          Deseja converter o saldo para outra cotação?
        </div>
        <form
          className="form_cotacao"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            className="input_cotacao"
            type="string"
            placeholder="Coloque aqui o código da moeda"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button className="btn_cotacao" type="submit">
            Enviar
          </button>
        </form>
        
      </div>
      <div>
        {alertVisibility && (
          <div className="cotacaoAlert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
            <p>Código de moeda não encontrado</p>
          </div>
        )}
      </div>
      <div>
        <Link to="/HomePage">
          <button className="back_button_cotacao">Voltar</button>
        </Link>
      </div>
    </main>
  );
}
