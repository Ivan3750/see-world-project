import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"

const Layout = () => {
    return ( <>
    <header>
        <div className="logo-block">
            <img src={logo} alt="See world" className="logo-img"/>
            <p className="logo-name">See World</p>
        </div>
        <nav>
            <NavLink href="/">Головна</NavLink>
            <NavLink href="/all">Всі оголошення</NavLink>
            <NavLink href="/favorite">Улюбленні</NavLink>
            <NavLink href="/account">Особистий кабінет</NavLink>
        </nav>
        <button className="regist-btn">Зареєструватися</button>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>

    </footer>
    </> );
}
 
export default Layout;