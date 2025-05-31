import { Link, useLocation } from "react-router";
import "../style/Header/Header.scss";
import logo_Kasa from "../images/logo_kasa.svg";

export default function Header() {
    const PageActuelle = useLocation();
    const url = PageActuelle.pathname;
    return (
        <header className="header">
            <img src={logo_Kasa} alt="Logo de Kasa" />
            <nav className="navbar">
                <Link to="/" className={`navbar__link ${url === "/" ? "navbar__link--underline" : ""}`}>
                    Accueil
                </Link>
                <Link to="/about" className={`navbar__link ${url === "/about" ? "navbar__link--underline" : ""}`}>
                    A propos
                </Link>
            </nav>
        </header>
    );
}
