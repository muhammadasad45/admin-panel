import * as actionType from '../constants/actionType';

const userReducer = (state ={users:[]} , action) => {
  switch (action.type) {
    case actionType.GET_USERS:
      return {
        ...state,
        users: action.payload
       };
    default:
      return state;
  }
};

export default userReducer;
