import { useContext, useEffect } from "react";
import "./HomePage.css";
import axios from "axios";
import { ApiContext } from "../../contexts/api-context";

export default function MainPage() {
  const { setName, setAccount, setAgency, setCredito, api } =
    useContext(ApiContext);

  // Faz a request dos dados necessários para api
  const requestApi = async () => {
    const response = await axios.get(api);
    setAgency(response.data.agency);
    setName(response.data.name);
    setAccount(response.data.account);
    setCredito(response.data.current_balance);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return <></>;
}
