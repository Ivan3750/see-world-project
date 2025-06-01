import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import LastAdvert from "../components/LastAdvert";
import PopularPlaces from "../components/PopularPlaces"
import Favorites from "./Favorites";

const Home = () => {
  return (
    <>
      <div className="Hero">
        <div>
          <h1 className="text-white text-[80px] uppercase font-bold  w-[515px]">
            Знайди своє місце
          </h1>
          <h2 className="text-white uppercase text-[32px] font-bold">
            Подорожуй зі смаком
          </h2>
        </div>
        <div className="flex gap-5">
          <button className="bg-[#E96E25] border-2 border-[#E96E25] h-[48px] w-[235px] text-white ">
            Знайти оголошення
          </button>
          <button className="text-[#E96E25] border-2 h-[48px] border-[#E96E25] w-[235px] font-bold text-[16px] hover:bg-[#FFE4D4]">
            Подати оголошення
          </button>
        </div>
      </div>
      <section>
        <h2 className="text-[#111111] text-[40px] font-bold mb-[30px]">
          Критерії оголошення
        </h2>
        <div className="flex justify-center flex-wrap gap-5">
          <div className="flex flex-col items-center">
            <img
              src={Img1}
              alt=""
              className="w-full max-w-[630px] aspect-[1.25]"
            />
            <p className="text-[#111111] text-[26px] font-medium">Будинки</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Img2}
              alt=""
              className="w-full max-w-[630px] aspect-[1.25]"
            />
            <p className="text-[#111111] text-[26px] font-medium">Студії</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Img3}
              alt=""
              className="w-full max-w-[630px] aspect-[1.25]"
            />
            <p className="text-[#111111] text-[26px] font-medium">Квартири</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Img4}
              alt=""
              className="w-full max-w-[630px] aspect-[1.25]"
            />
            <p className="text-[#111111] text-[26px] font-medium">Кімнати</p>
          </div>
        </div>
      </section>
      
      <PopularPlaces></PopularPlaces>
      <LastAdvert></LastAdvert>
      <Favorites></Favorites>
    </>
  );
};

export default Home;
