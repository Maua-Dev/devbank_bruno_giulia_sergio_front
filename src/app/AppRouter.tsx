import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import DepositPage from "./pages/DepositPage/DepositPage";
import WithdrawalPage from "./pages/WithdrawalPage/WithdrawalPage";
import Transacao from "./pages/Transacao/Transacao";


export default function AppRouter() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/HomePage" element={<HomePage />}/>
                <Route path='/HomePage/DepositPage' element={<DepositPage />}/>
                <Route path='/HomePage/WithdrawalPage' element={<WithdrawalPage />}/>
                <Route path='/HomePage/Transacao' element={<Transacao />} />
            </Routes>
        </BrowserRouter>
    )
}