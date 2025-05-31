import logo_Kasa_blanc from "../images/logo_kasa_blanc.svg";
import "../style/Footer/Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo_Kasa_blanc} alt="Logo de Kasa" className="footer__img" />
            <h2 className="footer__text">© 2020 Kasa. All rights reserved</h2>
        </footer>
    );
}
