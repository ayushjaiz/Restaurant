import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Shimmer from "./Shimmer";
import { IMG_CON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurantInfo, recommended] = useRestaurant(resId);

    const items = recommended?.card?.card?.itemCards;

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (!recommended || !restaurantInfo) ? <Shimmer /> : (
        <div className="flex">
            <div>
                <h1>Restaurant id: {restaurantInfo?.id}</h1>
                <h2>Name: {restaurantInfo?.name}</h2>
                <img src={IMG_CON_URL + restaurantInfo?.cloudinaryImageId} />
            </div>
            <div>
                <button onClick={() => handleAddItem} className="p-2 m-4 bg-green-100">
                    Add Item
                </button>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        items?.map((item, index) => (
                            <li key={index}>{item.card.info.name} -
                                <button className=" p-1 bg-green-700" onClick={() => handleAddItem(item.card.info)}>ADD</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;