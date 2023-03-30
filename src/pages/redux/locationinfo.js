import locations from "../../data/locationInfo.json";

const initialCardState = {
	locations: locations,
};

export const selectLocations = (state) => {
	return state.locations.locations;
};

const lacationReducer = (state = initialCardState, action) => {
	return state;
};

export default lacationReducer;
