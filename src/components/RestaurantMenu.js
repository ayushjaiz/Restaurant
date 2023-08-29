import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { IMG_CON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantInfo = useRestaurant(resId)

    return (!restaurantInfo) ? <Shimmer /> : (
        <div>
            <h1>Restaurant id: {restaurantInfo?.id}</h1>
            <h2>Name: {restaurantInfo?.name}</h2>
            <img src={IMG_CON_URL + restaurantInfo?.cloudinaryImageId} />
        </div>
    )
}

export default RestaurantMenu;