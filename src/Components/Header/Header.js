import logo from '../Header/GR-logo.png';
import Cart from '../Cart/Cart';

export const Header = () => {
    return (
        <div className="navbar fixed">
        <ul className='navbar_list'>
            <li ><a className='navbar_logo' href="/"><img className='logo' src={ logo } width='60px' alt='logo'/></a></li>
            <li ><a className='navbar_list_item' href="/">Om oss</a></li>
            <li ><a className='navbar_list_item' href="#product">Frakt og levering</a></li>
            <li ><a className='navbar_list_item' href="#contacts">Contacts oss</a></li>
            <li ><Cart/></li>
        </ul>
        
    </div>
    )
}

export default Header;