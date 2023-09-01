import { Link } from "react-router-dom";
import { IMG_CON_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId, id }) => {
    return (
        <div className="card w-[230px] h-[300px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CON_URL + cloudinaryImageId} />
            <Link to={"/restaurant/" + id}><h2 className="font-bold text-xl">{name}</h2></Link>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{lastMileTravelString}</h2>
        </div>
    )
}

export default RestaurantCard