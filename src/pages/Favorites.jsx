import { Link } from "react-router-dom"
import Star from "../assets/star.svg"
import { useDispatch, useSelector } from "react-redux"


const Favorites = () => {
const dispatch = useDispatch()
const favoriteList = useSelector(state => state.favorites.list)
console.log(favoriteList)

    return ( <>
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
          {favoriteList.map((h, i) => (
            <div key={i}>
              <img src={h.img} alt={h.name} />
              <div>
                <p className="text-[16px] text-[#111111] font-bold">{h.name}</p>
                <p className="text-[16px] text-[#766F6F] font-bold">
                  {h.place}
                </p>
                <div className="flex gap-1">
                  <img src={Star} alt="rating" />
                  <p className="text-[14px] text-[#266294] font-bold">
                    {h.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
</section>
    </> )
}
 
export default Favorites