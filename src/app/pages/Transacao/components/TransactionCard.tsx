import { TransactionContextType } from "../../../contexts/api-context";
import "./TransactionCard.css";

interface Props {
  transacao: TransactionContextType;
}

export default function TransacaoCard({ transacao }: Props) {
  const handleType = (type: string) => {
    if (type == "withdraw") {
      return "red";
    } else {
      return "green";
    }
  };

  console.log(transacao);
  const date = new Date(transacao.timestamp);
  return (
    <div className="transacaoCard">
      <div
        className="type"
        style={{ "backgroundColor": handleType(transacao.type) }}
      >
        <p>{transacao.type == "deposit" ? 'Deposito': "Saque"}</p>
      </div>
      <div className="transactionCard_middle">
        <div className="transactionCardMiddle_left">
          <p>VALOR:</p>
          <p>R$ {transacao.value}</p>
        </div>
        <div className="transactionCardMiddle_middle">
          <p>DATA:</p>
          <p>{date.toLocaleString()}</p>
        </div>
        <div className="transactionCardMiddle_right">
            <p>Saldo:</p>
            <p>R$ {transacao.current_balance}</p>
        </div>
      </div>
    </div>
  );
}
