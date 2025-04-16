import { NavLink, Outlet } from "react-router-dom";
import logo from "../../public/logo.png"

const Layout = () => {
    return ( <>
    <header>
        <div>
            <img src={logo} alt="See world"/>
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