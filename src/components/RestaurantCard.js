import { IMG_CON_URL } from "./constants";

const RestaurantCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img src={IMG_CON_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{lastMileTravelString}</h2>
        </div>
    )
}

export default RestaurantCard