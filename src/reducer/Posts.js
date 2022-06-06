import * as actionType from '../constants/actionType';

 const PostReducer = (state = {posts: []}, action) => {
    switch (action.type) {
        case actionType.GET_ALL_POSTS:
            return { 
                ...state, 
                posts: action.data };
        case actionType.GET_POST_BY_ID:
            return {
                ...state,
                post: action.data
            };

        default:
            return state;
    }
}
export default PostReducer;