import { Link } from "react-router";
import "../../style/Erreur/Erreur.scss";

export default function Erreur() {
    return (
        <main className="main">
            <section className="erreur">
                <h1 className="erreur__title">404</h1>
                <p className="erreur__message">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="erreur__link">
                    Retourner sur la page d'accueil
                </Link>
            </section>
        </main>
    );
}
