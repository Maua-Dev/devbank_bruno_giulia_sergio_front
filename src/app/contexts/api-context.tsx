import { ReactNode, createContext, useState } from "react";

export type TransacaoType = {
  2 : number;
  5 : number;
  10 : number;
  20 : number;
  50 : number;
  100 : number;
  200 : number;
}

export type TransactionContextType = {
  type : string;
  value : number;
  current_balance: number;
  timestamp: number;
}

type ApiContextType = {
  api: string;
  name: string;
  account: string;
  agency: string;
  credito: number;
  transacao : TransacaoType;
  transactionCard : TransactionContextType;

  setApi: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAgency: React.Dispatch<React.SetStateAction<string>>;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setCredito: React.Dispatch<React.SetStateAction<number>>;
  setTransacao : React.Dispatch<React.SetStateAction<TransacaoType>>;
  setTransactionCard : React.Dispatch<React.SetStateAction<TransactionContextType>>;
};

const defaultApiContextType: ApiContextType = {
  api: "",
  name: "",
  agency: "",
  account: "",
  credito: 0,
  transacao: {
    "2": 0,
    "5": 0,
    "10": 0,
    "20": 0,
    "50": 0,
    "100": 0,
    "200": 0
  },
  transactionCard: {
    "type": "",
    "value": 0,
    "current_balance": 0,
    "timestamp": 0

  },
  setApi: () => {},
  setName: () => {},
  setAgency: () => {},
  setAccount: () => {},
  setCredito: () => {},
  setTransacao: () => {},
  setTransactionCard: () => {},
};

export const ApiContext = createContext<ApiContextType>(defaultApiContextType);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [api, setApi] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [agency, setAgency] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [credito, setCredito] = useState<number>(0);
  const [transacao, setTransacao] =useState<TransacaoType>({
    "2": 0,
    "5": 0,
    "10": 0,
    "20": 0,
    "50": 0,
    "100": 0,
    "200": 0
  })
  const [transactionCard, setTransactionCard] = useState<TransactionContextType>({
    "current_balance": 0,
    "timestamp": 0,
    "type": "",
    "value": 0
  })

  return (
    <ApiContext.Provider
      value={{
        api,
        setApi,
        name,
        setName,
        agency,
        setAgency,
        account,
        setAccount,
        credito,
        setCredito,
        transacao,
        setTransacao,
        transactionCard,
        setTransactionCard
      }}
    >
        {children}
    </ApiContext.Provider>
  );
};
