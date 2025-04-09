import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    console.log(props);
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;