import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.png";

export default function Slider({ title, cities }) {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [index, setIndex] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(3);
      else if (width >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < cities.length - slidesToShow) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full overflow-hidden px-4 mb-[40px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h3 className="font-bold text-[32px] text-[#111111]">{title}</h3>
        <Link
          href="/"
          className="font-bold text-[20px] cursor-pointer underline decoration-[#266294] text-[#266294] 
        hover:text-[#487DAA] hover:decoration-[#487DAA] transition-all"
        >
          Відкрити всі оголошення
        </Link>
      </div>

      <div className="flex gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className={index !== 0 ? "hover:scale-[0.988] cursor-pointer" : ""}
        >
          <img src={Arrow} alt="arrow" />
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * index}%)`,
            width: `${(100 / slidesToShow) * cities.length}%`,
          }}
          ref={containerRef}
        >
          {cities.map((city, i) => (
            <div
              key={i}
              className="p-2 box-border"
              style={{ width: `${100 / cities.length}%` }}
            >
              <div>
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-[350px] object-cover mb-[10px]"
                />
                <div className="font-bold text-[16px] text-[#111111]">
                  <p>{city.name}</p>
                  <p>{city.hotels}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={next} disabled={index >= cities.length - slidesToShow}>
          <img src={Arrow} alt="arrow" className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
