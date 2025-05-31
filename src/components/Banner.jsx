import "../style/Banner/Banner.scss";

export default function Banner({ img, alt, titre }) {
    return (
        <section className="banner">
            <img src={img} alt={alt} className="banner__img" />
            <h1 className="banner__title">{titre}</h1>
        </section>
    );
}
