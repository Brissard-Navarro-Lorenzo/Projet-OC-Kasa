import { Link } from "react-router";
import Card from "../components/Card";
import "../style/Gallery/Gallery.scss";
export default function Gallery({ liste }) {
    return (
        <section className="gallery">
            {liste.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <Card image={logement.cover} titre={logement.title} />
                </Link>
            ))}
        </section>
    );
}
