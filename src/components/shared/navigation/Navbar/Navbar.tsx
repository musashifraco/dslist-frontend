import { NavLink } from "react-router-dom";
import { Header} from "./Navbar.styles";

export function Navbar() {
    return (
        <Header>
            <NavLink to="/" title="logo">
            <h1>DSlist</h1>
            </NavLink>
        </Header>
        )
}

