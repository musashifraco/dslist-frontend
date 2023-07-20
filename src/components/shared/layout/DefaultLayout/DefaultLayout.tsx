import { Outlet } from "react-router-dom";
import { Navbar } from "../../navigation/Navbar/Navbar";
import { LayoutContainer } from "./DefaultLayout.styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Navbar/>
            <Outlet/>
        </LayoutContainer>
    )
}