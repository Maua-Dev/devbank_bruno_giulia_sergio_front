import "./Header.css"

interface Props {
    name : string;
    agency : string;
    account : string;
}

export default function Header({name, agency, account} : Props) {
    return (
        <div className="header">
        <img
          src="https://github.com/Maua-Dev/devbank_playground_front/blob/dev/src/app/presentation/assets/logo_devbank.png?raw=true"
          className="img"
        ></img>
        <div className="info">
          <p className="text_p">Nome: {name}</p>
          <p className="text_p">Agência: {agency}</p>
          <p className="text_p">Conta: {account}</p>
        </div>
      </div>
    )
}
