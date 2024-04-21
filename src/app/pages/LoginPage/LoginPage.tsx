// import { FormEvent } from "react";
import { useContext, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../contexts/api-context";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const { setApi } = useContext(ApiContext);
  const [alertVisibility, setAlertVisibility] = useState<boolean>(false);

  // Alerta para caso a api seja inválida
  const handleClick = () => {
    setAlertVisibility(true);
  };

  const handleCloseAlert = () => {
    setAlertVisibility(!alertVisibility);
  };

  // Verifica se a api é um link (começa com http)
  const ButtonLink = () => {
    if (inputValue.slice(0, 4) == "http") {
      setApi(inputValue);
      return (
        <Link className="login_link" to="/HomePage">
          <button className="btn" type="submit">
            Entrar
          </button>
        </Link>
      );
    } else {
      return (
        <div>
          <button className="btn" onClick={handleClick}>
            Entrar
          </button>
        </div>
      );
    }
  };

  return (
    <main className="login_page">
      <div className="container">
        {/* Logo do DevBank */}
        <img
          className="logo"
          src="https://github.com/Maua-Dev/devbank_playground_front/blob/dev/src/app/presentation/assets/logo_devbank.png?raw=true"
          alt="dev-bank logo"
        ></img>
        <form className="form">
          {/* Local para input do usuário */}
          <input
            className="input"
            type="string"
            required
            placeholder="Coloque aqui o endpoint da sua API"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          {/* Botão para validar a api (redireciona para HomePage) */}
          <ButtonLink></ButtonLink>
        </form>
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
                <p>Endpoint Inválido</p>
              </div>
              <button className="closeAlert" onClick={handleCloseAlert}>
                Ok
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
