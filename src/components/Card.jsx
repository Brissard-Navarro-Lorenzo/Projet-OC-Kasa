import "../style/Card/Card.scss";

export default function Card({ image, titre }) {
    return (
        <article className="card">
            <img src={image} alt={titre} className="card__img" />
            <p className="card__title">{titre}</p>
        </article>
    );
}
