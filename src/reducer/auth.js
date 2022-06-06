import * as actionType from '../constants/actionType';

const authReducer = (state = { authData: JSON.parse(localStorage.getItem('profile')) }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        console.log(action.data)
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOG_OUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
