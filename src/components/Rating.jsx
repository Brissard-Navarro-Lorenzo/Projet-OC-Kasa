import "../style/Rating/Rating.scss";

export default function Rating({ note }) {
    const tableau = [1, 2, 3, 4, 5];
    return (
        <>
            {tableau.map((nb) =>
                note >= nb ? (
                    <i className="fa-solid fa-star etoile--rouge" key={nb}></i>
                ) : (
                    <i className="fa-solid fa-star etoile--grise" key={nb}></i>
                )
            )}
        </>
    );
}
