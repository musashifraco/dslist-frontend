import { Routes, Route } from "react-router-dom";
import { ListaDeGames } from "../../pages/ListaDeGames";
import { Game } from "../../pages/Game";
import { Lists } from "../../pages/Lists";
export function Router() {
    return (
        <Routes>
            <Route path="/lists" element={<Lists/>}></Route>
            <Route path="/lists/:listId/games" element={<ListaDeGames/>}></Route>
            <Route path="/lists/:listId/games/:gameId" element={<Game/>}></Route>
        </Routes>
    )
}