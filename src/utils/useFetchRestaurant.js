import { useEffect } from "react";
import { RESTAURANTS_API } from "./constant";
import * as restaurants from "./restaurantCardMockData.json";
export const useFetchRestaurants = (
	setDefaultRestaurants,
	setRestaurantsList
) => {
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const response = await fetch(RESTAURANTS_API);
			const data = await response.json();
			setTimeout(() => {
				setDefaultRestaurants(
					data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
						?.restaurants
				);
				setRestaurantsList(
					data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
						?.restaurants
				);
			}, 1000);
		} catch (error) {
			console.log(error);
			alert("Add extension cors to show data from swiggy");
			setTimeout(() => {
				setDefaultRestaurants(restaurants);
				setRestaurantsList(restaurants);
			}, 1000);
		}
	};
};
