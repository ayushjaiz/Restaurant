import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { IMG_CON_URL } from "../constants";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState()
    const { resId } = useParams();

    useEffect(() => { getRestaurantInfo() }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608848658684735&lng=77.35975004732609&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const restaurantInfo = restaurants.filter((restaurant) => restaurant?.info?.id === resId)[0].info;
        setRestaurantInfo(restaurantInfo);
        console.log(restaurantInfo);
    };

    return (!restaurantInfo) ? <Shimmer /> : (
        <div>
            <h1>Restaurant id: {restaurantInfo?.id}</h1>
            <h2>Name: {restaurantInfo?.name}</h2>
            <img src={IMG_CON_URL + restaurantInfo?.cloudinaryImageId} />
        </div>
    )
}

export default RestaurantMenu;