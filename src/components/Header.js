import { useState } from "react";

const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://scontent.fvns2-1.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PFMUsqRwDuoAX9dTX81&_nc_ht=scontent.fvns2-1.fna&oh=00_AfDs2fKHqCgWIeZxNQP9ORBc5gNg7bIZHo-VC5kz_prd2A&oe=64E36E2E"
        />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
}

export default Header;