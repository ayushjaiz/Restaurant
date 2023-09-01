import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../assests/img/logo.png"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
    <a href="/">
        <img className="h-28 px-2" alt="logo" src={Logo} />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const { user } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/cart">Cart- {cartItems.length} Items</Link></li>
                </ul>
            </div>
            {user.name}
            <h1>{isOnline ? "✅Online" : "🔴Offline"}</h1>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
}

export default Header;