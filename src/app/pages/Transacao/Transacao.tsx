import { useContext, useEffect, useState } from "react";
import Header from "../../ui/components/Header";
import { ApiContext, TransactionContextType } from "../../contexts/api-context";
import "./Transacao.css"
import axios from "axios";
import TransacaoCard from "./components/TransactionCard";
import { Link } from "react-router-dom";

export default function Transacao() {

    const {name, agency, account, api} = useContext(ApiContext)
    const [transactionsArray, setTransactionsArray] = useState<TransactionContextType[]>([]);

    const requestApi = async () => {
        const response = await axios.get(`${api}/history`);
         setTransactionsArray(response.data.all_transactions);
         console.log(response.data)
         console.log(transactionsArray)
         
      };
      
    useEffect(() => {
        requestApi();
    }, []);

    return (
        <main className="transacao_page">
            <Header name={name} agency={agency} account={account}></Header>
            <div className="transaction_top_box">
                <p>Histórico de transações</p>
            </div>
            <div className="transacao_middle">
                {
                    transactionsArray !== undefined ? transactionsArray.map((transacao) => {
                        console.log(transactionsArray)
                        return (
                            <TransacaoCard transacao={transacao}></TransacaoCard>
                        );
                     }) : null
                }
            </div>
            <div>
                <Link to= '/HomePage'>
                    <button className="transacao_back_button">Voltar</button>
                </Link>
            </div>
        </main>
    )
}