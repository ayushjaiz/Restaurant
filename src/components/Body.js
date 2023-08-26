import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
    const newData = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase()?.includes(searchInput.toLowerCase()));

    return newData;
}

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState()

    useEffect(() => { getRestaurants() }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608848658684735&lng=77.35975004732609&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (filteredRestaurants?.length === 0) {
        <h1>No restaurant match your filter!!</h1>
    }

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
                        const data = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            {(allRestaurants?.length === 0) ? <Shimmer /> :
                <div className="restaurant-list">

                    {(filteredRestaurants?.length === 0) ? <h1>No restaurant matching</h1> :
                        filteredRestaurants?.map((restaurant) =>
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />)}
                </div>
            }
        </>
    )
}

export default Body;