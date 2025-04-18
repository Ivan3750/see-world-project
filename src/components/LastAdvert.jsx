import Vila from "../assets/Vila Gale Lagos Hotel.jpg";
import Sierra from "../assets/Sierra de Meira.jpg";
import Petit from "../assets/Petit Hotel.jpg";
import Molitor from "../assets/Molitor Hotel.jpg";
import Le from "../assets/Le Galion Hotel.jpg";
import KViHotel from "../assets/KViHotel.jpg";
import Horison from "../assets/Horison Blu.jpg";
import Gran from "../assets/Gran Hotel.jpg";
import Cala from "../assets/Cala Moresca.jpg";
import { Link } from "react-router-dom";
import Star from "../assets/star.svg"
const HotelsList = [
  {
    name: "Vila Gale Lagos Hotel",
    img: Vila,
    place: "Andresen, Portugal",
    rating: "7,1",
  },
  { name: "Cala Moresca", img: Cala, place: "Via Faro, Italy", rating: "8,6" },
  {
    name: "Horison Blu",
    img: Horison,
    place: "Petrou Karakousi, Greece",
    rating: "5,9",
  },
  {
    name: "Le Galion Hotel",
    img: Le,
    place: "Saint-Martin-de-Re, France",
    rating: "8,4",
  },
  {
    name: "Molitor Hotel",
    img: Molitor,
    place: "Paris, France",
    rating: "6,9",
  },
  {
    name: "Sierra de Meira",
    img: Sierra,
    place: "Madrid, Spain",
    rating: "7,4",
  },
  { name: "Petit Hotel", img: Petit, place: "Madrid, Spain", rating: "7,2" },
  { name: "Gran Hotel", img: Gran, place: "Alicante, Spain", rating: "8,9" },
  { name: "KViHotel", img: KViHotel, place: "Madrid, Spain", rating: "7,2" },
];

const LastAdvert = () => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-[20px]">
          <h2 className="font-bold text-[32px] text-[#111111]">
            Останні оголошення
          </h2>
          <Link
            href="/"
            className="font-bold text-[20px] cursor-pointer underline decoration-[#266294] text-[#266294] 
        hover:text-[#487DAA] hover:decoration-[#487DAA] transition-all"
          >
            Відкрити всі оголошення
          </Link>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-[20px]">
          {HotelsList.map((h, i) => 
            (<div key={i}>
              <img src={h.img} alt={h.name} />
              <div>
                <p className="text-[16px] text-[#111111] font-bold">{h.name}</p>
                <p className="text-[16px] text-[#766F6F] font-bold">{h.place}</p>
                <div className="flex gap-1"><img src={Star} alt="rating" />
                <p className="text-[14px] text-[#266294] font-bold">{h.rating}</p>
                </div>
              </div>
            </div>)
          )}
        </div>
      </section>
    </>
  );
};

export default LastAdvert;
