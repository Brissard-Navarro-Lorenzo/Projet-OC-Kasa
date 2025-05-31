import { useState } from "react";
import "../style/Slideshow/Slideshow.scss";
export default function Slideshow({ tableau_images, alt }) {
    const [index, setIndex] = useState(0);
    const tailleTableau = tableau_images.length;

    function diminuerIndex() {
        // index <= 0 ? setIndex(tailleTableau - 1) : setIndex(index - 1);
        setIndex((index - 1 + tailleTableau) % tailleTableau);
    }
    function augmenterIndex() {
        // index >= tailleTableau - 1 ? setIndex(0) : setIndex(index + 1);
        setIndex((index + 1) % tailleTableau);
    }
    return (
        <section className="slideshow">
            <div className="slideshow__container" style={{ transform: `translateX(${-index * 100}%)` }}>
                {tableau_images.map((photo, i) => (
                    <img src={photo} alt={`${alt} photo ${i + 1}`} className="slideshow__img" key={i} />
                ))}
            </div>
            <i
                className={`fa-solid fa-chevron-left slideshow__prev ${tailleTableau <= 1 ? "slideshow__none" : ""}`}
                onClick={diminuerIndex}></i>
            <i
                className={`fa-solid fa-chevron-right slideshow__next ${tailleTableau <= 1 ? "slideshow__none" : ""}`}
                onClick={augmenterIndex}></i>
            <p className={`slideshow__nombre ${tailleTableau <= 1 ? "slideshow__none" : ""}`}>{`${index + 1}/${tailleTableau}`}</p>
        </section>
    );
}
