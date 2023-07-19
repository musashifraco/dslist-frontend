import { Routes, Route } from "react-router-dom";
import { ListaDeGames } from "../../pages/ListaDeGames";
import { Game } from "../../pages/Game";
export function Router() {
    return (
        <Routes>
            <Route path="/lists/:listId/games" element={<ListaDeGames/>}></Route>
            <Route path="/lists/:listId/games/:gameId" element={<Game/>}></Route>
        </Routes>
    )
}