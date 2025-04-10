import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    let [listOfRestaurants, setListOfRestaurant] = useState([]);
    let [filteredRestaurant, setFilteredRestaurant] = useState([]);
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch
            ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(resList);
        setFilteredRestaurant(resList);
        // setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if (filteredRestaurant?.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants?.filter((res) => res.data.name?.toLowerCase().includes(searchText?.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredListOfRestaurant = listOfRestaurants?.filter((res) =>
                        res.data.avgRating > 4);
                    setListOfRestaurant(filteredListOfRestaurant);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant?.map((restaurant) => <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id}><RestaurantCard resData={restaurant}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;