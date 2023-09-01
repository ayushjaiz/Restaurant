import { Link } from "react-router-dom";
import { FOOD_ITEM_URL, IMG_CON_URL } from "../constants";

const FoodItemCard = ({ name, price, imageId, category }) => {
    return (
        <div className="card w-[230px] h-[300px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={FOOD_ITEM_URL + imageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h2>Price: {price / 100}</h2>
            <h2>Category: {category}</h2>
            <h2>{imageId}</h2>
        </div>
    )
}

export default FoodItemCard