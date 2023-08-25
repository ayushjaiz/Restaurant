import { useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";


function filterData(searchInput, restaurants) {
    newData = restaurantList.filter((restaurant) =>
        restaurant.data.name.includes(searchInput));

    return newData
}

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList)

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={
                        (e) => {
                            setSearchInput(e.target.value);
                        }
                    }
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchInput, restaurants);
                        setRestaurants(data);
                    }}>
                    Search
                </button>
            </div >
            <div className="restaurant-list">
                {restaurants.map((restaurant) => <RestaurantCard {...restaurant.data} />)}
            </div>
        </>
    )
}

export default Body;