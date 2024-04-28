import { ReactNode, createContext, useState } from "react";

export type CotacaoType = {
    moedas : Object;
}

export type CurrencyType = {
  code: string,
  codein: string,
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string
}

export type CotacaoApiContextType = {
  cotacaoApi: string;
  currency: Object;

  setCotacaoApi: React.Dispatch<React.SetStateAction<string>>;
  setCurrency: React.Dispatch<React.SetStateAction<Object>>;
};

const defaultCotacaoApiContextType: CotacaoApiContextType = {
  cotacaoApi: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,BTC-BRL",
  currency: {},

  setCotacaoApi: () => {},
  setCurrency: () => {},
};

export const CotacaoApiContext = createContext<CotacaoApiContextType>(defaultCotacaoApiContextType);

export const CotacaoApiProvider = ({ children }: { children: ReactNode }) => {
    const [cotacaoApi, setCotacaoApi] = useState<string>("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,BTC-BRL");
    const [currency, setCurrency] = useState<Object>({});

    return (
      <CotacaoApiContext.Provider
        value={{
          cotacaoApi,
          setCotacaoApi,
          currency,
          setCurrency
        }}
      >
          {children}
      </CotacaoApiContext.Provider>
    );
  };