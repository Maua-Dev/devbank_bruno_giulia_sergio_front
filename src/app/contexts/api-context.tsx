import { ReactNode, createContext, useState } from "react";

type ApiContextType = {
  api: string;
  name: string;
  account: string;
  agency: string;
  credito: number;

  setApi: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAgency: React.Dispatch<React.SetStateAction<string>>;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setCredito: React.Dispatch<React.SetStateAction<number>>;
};

const defaultApiContextType: ApiContextType = {
  api: "",
  name: "",
  agency: "",
  account: "",
  credito: 0,
  setApi: () => {},
  setName: () => {},
  setAgency: () => {},
  setAccount: () => {},
  setCredito: () => {},
};

export const ApiContext = createContext<ApiContextType>(defaultApiContextType);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [api, setApi] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [agency, setAgency] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [credito, setCredito] = useState<number>(0);

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
      }}
    >
        {children}
    </ApiContext.Provider>
  );
};
