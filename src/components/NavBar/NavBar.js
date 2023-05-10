import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
                <h3>Ecommerce</h3>
            </link>
            <div className="Categories">
                <NavLink to={`/category/reparacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Quienes Somos</NavLink>
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Quienes Somos</NavLink>
                
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar