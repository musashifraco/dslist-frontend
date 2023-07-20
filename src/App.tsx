import { BrowserRouter } from "react-router-dom";
import { Router } from "./utils/configs/Router";
import { GlobalStyle } from "./styles/global";

export function App() {
 return (
    <BrowserRouter>
    <Router/>
    <GlobalStyle/>
    </BrowserRouter>
 )
}

