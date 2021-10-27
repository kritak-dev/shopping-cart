import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav className="fixed-nav-bar">
            <h1><Link to="/">Planetorium</Link></h1>
            <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/products">Products</Link></h1>
            <h1><Link to="/cart">Cart</Link></h1>
        </nav>
    );
}

export default Navbar;