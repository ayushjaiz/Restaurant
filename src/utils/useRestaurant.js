import { useEffect, useState } from "react"
import { API_URL } from "../constants";

const useRestaurantInfo = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => { getRestaurantInfo() }, []);

    async function getRestaurantInfo() {
        const data = await fetch(API_URL);
        const json = await data.json();

        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const restaurantInfo = restaurants.filter((restaurant) => restaurant?.info?.id === resId)[0].info;
        setRestaurantInfo(restaurantInfo);
    };
    return restaurantInfo;
}

export default useRestaurantInfo;
