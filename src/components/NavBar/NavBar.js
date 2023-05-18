import { NavLink, Link } from "react-router-dom"
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link className="titulo_navbar" to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/reparacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>reparacion</NavLink>
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>celular</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>accesorios</NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar