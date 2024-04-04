// import { FormEvent } from "react";
import { useContext, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../contexts/api-context";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  const { setApi, api } = useContext(ApiContext)

  console.log(api)
  

  const ButtonLink = () => {
    console.log(inputValue.trim())
    if (inputValue.trim() !== "") {
      setApi(inputValue);
      console.log(api)
      return (
        <Link className="link" to="/HomePage">
          <button className="btn" type="submit">
            Entrar
          </button>
        </Link>
      );
    } else {
      return <button className="btn">Entrar</button>;
    }
  };

  return (
    <main className="login_page">
      <div className="container">
        <img
          className="logo"
          src="https://github.com/Maua-Dev/devbank_playground_front/blob/dev/src/app/presentation/assets/logo_devbank.png?raw=true"
          alt="dev-bank logo"
        ></img>
        <form className="form">
          <input
            className="input"
            type="string"
            required
            placeholder="Coloque aqui o endpoint da sua API"
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <ButtonLink></ButtonLink>
        </form>
      </div>
    </main>
  );
}
