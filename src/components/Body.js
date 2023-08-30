import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../constants";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState()

    useEffect(() => { getRestaurants() }, []);

    async function getRestaurants() {
        const data = await fetch(API_URL);
        const json = await data.json();

        console.log(json.data);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>🔴 Offline!! Check Internet Connection</h1>
    }

    if (filteredRestaurants?.length === 0) {
        return <h1>No restaurant match your filter!!</h1>
    }

    return (
        <>
            <div className="search-container p-5 bg-pink-50 my-5">
                <input
                    type="text"
                    className="search-input focus:bg-slate-200"
                    placeholder="Search"
                    value={searchInput}
                    onChange={
                        (e) => {
                            setSearchInput(e.target.value);
                        }
                    }
                />
                <button
                    className="search-btn p-2 m-2 bg-purple-500 text-white rounded-md  hover:bg-purple-600"
                    onClick={() => {
                        const data = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            {(allRestaurants?.length === 0) ? <Shimmer /> :

                <div className="restaurant-list flex-wrap">
                    {(filteredRestaurants?.length === 0) ? <h1>No restaurant matching</h1> :

                        filteredRestaurants?.map((restaurant) =>
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />)}
                </div>
            }
        </>
    )
}

export default Body;