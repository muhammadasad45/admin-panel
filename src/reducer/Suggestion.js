import * as actionType from '../constants/actionType';

const SuggestionsReducer = (state ={suggestions:[]} , action) => {
    switch (action.type) {
        case actionType.GET_ALL_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload
                };
        default:
            return state;
    }
}

export default SuggestionsReducer;