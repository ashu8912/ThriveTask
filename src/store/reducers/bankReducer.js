//import {DEFAULT_KEY,generateCacheTTL} from "redux-cache";
import {SUCCESS,FAILURE, SELECTED_CITY} from "../actions/actionTypes";
const initialState = {
	//[DEFAULT_KEY]: null,
	selectedCity:"MUMBAI"
}

const bankReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS: {
			return {
				...state,
				//[DEFAULT_KEY]: generateCacheTTL(),
				[action.payload.bankCity]:action.payload.data
			};
		}
		case SELECTED_CITY:{
			return {
				...state,
				selectedCity:action.payload.cityName
			}
		}

		default: {
			return state;
		}
	}
}

export default bankReducer;
