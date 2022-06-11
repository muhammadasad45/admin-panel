import * as ActionTypes from '../constants/actionType';
import { api } from '../constants/apiUrl';
import axios from 'axios';


// Category Reducer

 const CategoryReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        default:
            return state;
    }
}
export default CategoryReducer;