import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

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
        </div>
    )
}

const burgerKing = {
    name: "Burger King",
    image: "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220314064416545518_262x360jpg",
    cusines: ["Burger", "American"],
    ratings: "4.2"
}


const RestaurantCart = () => {
    return (
        <div className="card">
            <img src={burgerKing.image} />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.ratings} stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div class="restaurant-list">
            <RestaurantCart />
            <RestaurantCart />
            <RestaurantCart />
            <RestaurantCart />
            <RestaurantCart />
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);