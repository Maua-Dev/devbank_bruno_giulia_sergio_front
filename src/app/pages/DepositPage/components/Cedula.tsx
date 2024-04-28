import { useContext } from "react";
import "./Cedula.css";
import { ApiContext, TransacaoType } from "../../../contexts/api-context";

interface Props {
  valor: number;
}

export default function Cedula({ valor }: Props) {

  const {setTransacao, transacao} = useContext(ApiContext)

  return (
    <main>
      <div className="cedula">
        <p className="RS_symbol">R$</p>
        <p className="valor">{valor}</p>
      </div>
      <div className="cedula_bottom">
        <div className="cedula_bottom_left">
          <p className="qtd_text">Quantidade</p>
        </div>
        <div className="cedula_bottom_right">
          <button className="plus_button" onClick={() => transacao[valor as keyof TransacaoType] > 0 ? setTransacao( {...transacao, [valor as keyof TransacaoType] : transacao[valor as keyof TransacaoType]-1}) : null}>-</button>
          <p className="quantity" >{transacao[valor as keyof TransacaoType] }</p>
          <button className="plus_button" onClick={() => setTransacao( {...transacao, [valor as keyof TransacaoType] : transacao[valor as keyof TransacaoType]+1})}>+</button>
        </div>
      </div>
      

    </main>
    
  );
}
