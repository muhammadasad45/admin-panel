import * as actionType from '../constants/actionType';


const complaintsReducer = (state ={complaints:[]} , action) => {
    switch (action.type) {
        case actionType.GET_COMPLAINTS:
            return {
                ...state,
                complaints: action.payload
                };
        default:
            return state;
    }
}
export default complaintsReducer;
