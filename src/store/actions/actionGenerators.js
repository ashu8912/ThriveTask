import axios from "axios";
// import { checkCacheValid } from "redux-cache";

import {API_URL} from "../../utils/configs";
import { START,SUCCESS,FAILURE, SELECTED_CITY} from "./actionTypes";

export const getBankDetails=(cityName)=>(dispatch,getState)=>{
    //const isCacheValid = checkCacheValid(getState, "banks");
    console.log("inside");
	//if (isCacheValid) { return null; }
     console.log(getState());
     dispatch({type:SELECTED_CITY,payload:{cityName}});
     if(getState().banks[cityName])
     {
         return null;
     }
	dispatch({
		type: START
	});

	axios.get(`${API_URL}${cityName}`)
		.then((response) => {
            console.log(response.data);
				dispatch({
				type: SUCCESS,
				payload: {data:response.data,bankCity:cityName},
			});
		})
		.catch((error) => {
			console.log('error: ', error);
			dispatch({
				type: FAILURE,
				payload: error,
			});
		});
}