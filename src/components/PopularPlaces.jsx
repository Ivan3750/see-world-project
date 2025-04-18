import Firenze from "../assets/Firenze.jpg";
import Madrit from "../assets/Madrit.jpg";
import Mallorca from "../assets/Mallorca.jpg";
import Montpellier from "../assets/Montpellier.jpg";
import Nantes from "../assets/Nantes.jpg";
import Paris from "../assets/Paris.jpg";
import Roma from "../assets/Roma.jpg";
import Selvia from "../assets/Selvia.jpg";
import Venezia from "../assets/Venezia.jpg";
import Slider from "../components/Slider";

const franceCities = [
  { name: "Nantes", img: Nantes, hotels: "10 753 готелів" },
  { name: "Montpellier", img: Montpellier, hotels: "11 386 готелів" },
  { name: "Paris", img: Paris, hotels: "12 278 готелів" },
];

const italyCities = [
  { name: "Venezia", img: Venezia, hotels: "14 120 готелів" },
  { name: "Firenze", img: Firenze, hotels: "7 988 готелів" },
  { name: "Roma", img: Roma, hotels: "12 809 готелів" },
];

const spainCities = [
  { name: "Selvia", img: Selvia, hotels: "8 984 готелів" },
  { name: "Madrit", img: Madrit, hotels: "15 325 готелів" },
  { name: "Mallorca", img: Mallorca, hotels: "9 825 готелів" },
];

export default function PopularPlaces() {
  return (
    <section>
        <h2 className="text-[#111111] text-[40px] font-bold mb-[30px]">
          Критерії оголошення
        </h2>
    <div>
      <Slider title="Франція" cities={franceCities} />
      <Slider title="Італія" cities={italyCities} />
      <Slider title="Іспанія" cities={spainCities} />
    </div>
      </section>
  );
}
