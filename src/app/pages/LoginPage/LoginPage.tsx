// import { FormEvent } from "react";
import { useContext, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../contexts/api-context";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const { setApi } = useContext(ApiContext);

  // Alerta para caso a api seja inválida
  const handleClick = () => {
    alert("Endpoint Invalido");
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
      </div>
    </main>
  );
}
