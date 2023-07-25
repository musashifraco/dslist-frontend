import { IntroMain, TextContainer } from "./Intro.styles.ts"
import manPlayingGame from "../../../../public/images/man-playing-game.png"
import { NavLink } from "react-router-dom"
export function Intro() {
    return (
    <IntroMain>
        <TextContainer>
            <span>DSList PRO</span>
            <h1>Suas coleções do jeito certo</h1>
            <p>Organize sua coleção de games de um jeito prático, divertido e organizado. Esta é a minha primeira aplicação fullstack. O Front-end foi feito com React e o Back-end foi feito com Spring boot. Espero que goste :)</p>
            <NavLink to="/lists" title="StartButtom">
            <button>Iniciar</button>
            </NavLink>
        </TextContainer>
        <img src={manPlayingGame} alt="" />
    </IntroMain>
    )
}