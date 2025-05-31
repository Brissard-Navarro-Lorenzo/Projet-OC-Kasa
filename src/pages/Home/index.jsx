import Banner from "../../components/Banner";
import logements from "../../logements.json";
import falaises_banner from "../../images/falaises_banner.png";
import Gallery from "../../components/Gallery";

export default function Home() {
    const alt = "Falaises en bord de mer";
    const titre = "Chez vous, partout et ailleurs";
    return (
        <main className="main">
            <Banner img={falaises_banner} alt={alt} titre={titre} />
            <Gallery liste={logements} />
        </main>
    );
}
