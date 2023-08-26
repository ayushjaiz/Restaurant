import { Link } from "react-router-dom";
import { IMG_CON_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId, id }) => {
    return (
        <div className="card">
            <img src={IMG_CON_URL + cloudinaryImageId} />
            <Link to={"/restaurant/" + id}><h2>{name}</h2></Link>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{lastMileTravelString}</h2>
        </div>
    )
}

export default RestaurantCard