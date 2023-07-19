import { Routes, Route } from "react-router-dom";
import { ListaDeGames } from "../../pages/ListaDeGames";
export function Router() {
    return (
        <Routes>
            <Route path="/lists/:listId/games" element={<ListaDeGames/>}></Route>
        </Routes>
    )
}