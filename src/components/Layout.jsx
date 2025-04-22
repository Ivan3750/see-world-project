import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import Facebook from "../assets/facebook.svg";
import YouTube from "../assets/youtube.svg";
import Instagram from "../assets/instagram.svg";
import X from "../assets/x.svg";
const Layout = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#CFE7F5] text-[#266294] px-6 md:px-20 py-3 flex items-center justify-between h-[100px] relative">
        <div className="flex flex-col items-center justify-between h-full">
          <img src={logo} alt="See world" className="w-[55px] h-auto" />
          <p className="text-sm md:text-base font-bold">See World</p>
        </div>

        <nav className="hidden md:flex gap-10">
          <NavLink to="/" className="text-lg font-bold">
            Головна
          </NavLink>
          <NavLink to="/ogolosh" className="text-lg font-bold">
            Оголошення
          </NavLink>
          <NavLink to="/favorite" className="text-lg font-bold">
            Обранне
          </NavLink>
        </nav>

        <button className="hidden md:block border border-[#266294] text-[#266294] font-bold text-lg w-[209px] h-[44px]">
          Зареєструватися
        </button>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-[2px] bg-[#266294]"></span>
          <span className="w-6 h-[2px] bg-[#266294]"></span>
          <span className="w-6 h-[2px] bg-[#266294]"></span>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#CFE7F5] flex flex-col items-center gap-4 py-4 md:hidden z-50">
            <NavLink
              to="/"
              className="text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Головна
            </NavLink>
            <NavLink
              to="/all"
              className="text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Всі оголошення
            </NavLink>
            <NavLink
              to="/favorite"
              className="text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Обранне
            </NavLink>
            <NavLink
              to="/account"
              className="text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Особистий кабінет
            </NavLink>
            <button className="border border-[#266294] text-[#266294] font-bold text-lg w-[209px] h-[44px]">
              Зареєструватися
            </button>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="px-[80px] py-[34px] text-[#266294]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-between h-full">
            <img src={logo} alt="See world" className="w-[55px] h-auto" />
            <p className="text-sm md:text-base font-bold">See World</p>
          </div>
          <div className="flex flex-col gap-5 items-end">
            <nav className="hidden md:flex gap-10">
              <NavLink to="/" className="text-lg font-bold">
                Головна
              </NavLink>
              <NavLink to="/ogolosh" className="text-lg font-bold">
                Оголошення
              </NavLink>
              <NavLink to="/favorite" className="text-lg font-bold">
                Обранне
              </NavLink>
              <NavLink to="/favorite" className="text-lg font-bold">
                Особистий каб.
              </NavLink>
            </nav>
            <div className="flex gap-4">
              <img src={Facebook} alt="facebook" />
              <img src={YouTube} alt="youtube" />
              <img src={Instagram} alt="instagram" />
              <img src={X} alt="x" />
            </div>
          </div>
        </div>
        <p className="mt-[20px]">©Всі права захищені.</p>
      </footer>
    </>
  );
};

export default Layout;
