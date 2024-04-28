import { useContext, useEffect, useState } from "react";
import "./CotacaoCard.css";
import { ApiContext } from "../../../contexts/api-context";
import { CurrencyType } from "../../../contexts/apiCotacao-context";

interface Props {
  currency: CurrencyType;
}

export default function CotacaoCard({ currency }: Props) {
  const { credito } = useContext(ApiContext);
  const [flagSRC, setFlagSRC] = useState<string>("");

  useEffect(() => {
    handleFlag();
  }, [currency]);

  const handleSymbol = () => {
    switch (currency["code"]) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "BTC":
        return "₿";
      case "GBP":
        return "£";
      case "CNY":
        return "¥";
      default:
        return null;
    }
  };

  const handleFlag = () => {
    switch (currency["code"]) {
      case "USD":
        setFlagSRC(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 7410 3900'%3e%3cpath fill='%23b22234' d='M0 0h7410v3900H0z'/%3e%3cpath stroke='%23fff' stroke-width='300' d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'/%3e%3cpath fill='%233c3b6e' d='M0 0h2964v2100H0z'/%3e%3cg fill='%23fff'%3e%3cg id='d'%3e%3cg id='c'%3e%3cg id='e'%3e%3cg id='b'%3e%3cpath id='a' d='m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z'/%3e%3cuse xlink:href='%23a' y='420'/%3e%3cuse xlink:href='%23a' y='840'/%3e%3cuse xlink:href='%23a' y='1260'/%3e%3c/g%3e%3cuse xlink:href='%23a' y='1680'/%3e%3c/g%3e%3cuse xlink:href='%23b' x='247' y='210'/%3e%3c/g%3e%3cuse xlink:href='%23c' x='494'/%3e%3c/g%3e%3cuse xlink:href='%23d' x='988'/%3e%3cuse xlink:href='%23c' x='1976'/%3e%3cuse xlink:href='%23e' x='2470'/%3e%3c/g%3e%3c/svg%3e"
        );
        break;
      case "EUR":
        setFlagSRC(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 810 540'%3e%3cdefs%3e%3cg id='d'%3e%3cg id='b'%3e%3cpath id='a' d='M0 0v1h.5z' transform='rotate(18 3.157 -.5)'/%3e%3cuse xlink:href='%23a' transform='scale(-1 1)'/%3e%3c/g%3e%3cg id='c'%3e%3cuse xlink:href='%23b' transform='rotate(72)'/%3e%3cuse xlink:href='%23b' transform='rotate(144)'/%3e%3c/g%3e%3cuse xlink:href='%23c' transform='scale(-1 1)'/%3e%3c/g%3e%3c/defs%3e%3cpath fill='%23039' d='M0 0h810v540H0z'/%3e%3cg fill='%23fc0' transform='matrix(30 0 0 30 405 270)'%3e%3cuse xlink:href='%23d' y='-6'/%3e%3cuse xlink:href='%23d' y='6'/%3e%3cg id='e'%3e%3cuse xlink:href='%23d' x='-6'/%3e%3cuse xlink:href='%23d' transform='rotate(-144 -2.344 -2.11)'/%3e%3cuse xlink:href='%23d' transform='rotate(144 -2.11 -2.344)'/%3e%3cuse xlink:href='%23d' transform='rotate(72 -4.663 -2.076)'/%3e%3cuse xlink:href='%23d' transform='rotate(72 -5.076 .534)'/%3e%3c/g%3e%3cuse xlink:href='%23e' transform='scale(-1 1)'/%3e%3c/g%3e%3c/svg%3e"
        );
        break;
      case "GBP":
        setFlagSRC(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3e%3cclipPath id='a'%3e%3cpath d='M0 0v30h60V0z'/%3e%3c/clipPath%3e%3cclipPath id='b'%3e%3cpath d='M30 15h30v15zv15H0zH0V0zV0h30z'/%3e%3c/clipPath%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23012169' d='M0 0v30h60V0z'/%3e%3cpath stroke='%23fff' stroke-width='6' d='m0 0 60 30m0-30L0 30'/%3e%3cpath stroke='%23C8102E' stroke-width='4' d='m0 0 60 30m0-30L0 30' clip-path='url(%23b)'/%3e%3cpath stroke='%23fff' stroke-width='10' d='M30 0v30M0 15h60'/%3e%3cpath stroke='%23C8102E' stroke-width='6' d='M30 0v30M0 15h60'/%3e%3c/g%3e%3c/svg%3e"
        );
        break;
      case "CNY":
        setFlagSRC(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 30 20'%3e%3cdefs%3e%3cpath id='a' fill='%23ffde00' d='M0-1 .588.809-.952-.309H.952L-.588.809z'/%3e%3c/defs%3e%3cpath fill='%23de2910' d='M0 0h30v20H0z'/%3e%3cuse xlink:href='%23a' transform='matrix(3 0 0 3 5 5)'/%3e%3cuse xlink:href='%23a' transform='rotate(23.036 .093 25.536)'/%3e%3cuse xlink:href='%23a' transform='rotate(45.87 1.273 16.18)'/%3e%3cuse xlink:href='%23a' transform='rotate(69.945 .996 12.078)'/%3e%3cuse xlink:href='%23a' transform='rotate(20.66 -19.689 31.932)'/%3e%3c/svg%3e"
        );
        break;
      default:
        return null;
    }
  };

  console.log(currency);

  return (
    <div className="cotacao_card">
      <div className="cotacoesCardTop">
        <div className="currency">
          <div className="flag_position">
            <img src={flagSRC} alt="" className="flag_image"></img>
          </div>
          {currency["name" as keyof CurrencyType].split("/")[0]}
        </div>
      </div>
      <div className="cotacaoCardMiddle">
        <div className="conversao">
          <p>Saldo: </p>
          {handleSymbol()}{" "}
          {(credito / Number(currency["high" as keyof CurrencyType])).toFixed(
            5
          )}
        </div>
        <div className="valorCotacao">
          <p>Cotação: </p>
          {currency["high"]}
        </div>
      </div>
    </div>
  );
}
