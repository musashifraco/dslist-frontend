import { Routes, Route } from "react-router-dom";
import { ListaDeGames1 } from "../../pages/ListaDeGames1";
import { ListaDeGames2 } from "../../pages/ListaDeGames2";

export function Router() {
    return (
        <Routes>
            <Route path="/lists/1/games" element={<ListaDeGames1/>}></Route>
            <Route path="/lists/2/games" element={<ListaDeGames2/>}></Route>
        </Routes>
    )
}