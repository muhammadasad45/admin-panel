import { AUTH , LOG_OUT} from '../constants/actionType';
import axios from 'axios'
import { api } from '../constants/apiUrl';

export const signout=()=>(dispatch)=>{
  
  dispatch({type:LOG_OUT})
  
}




export const changePassword=(newp , oldp ) =>async(dispatch)=>{
  try {
    if(localStorage.getItem('profile')){
      //  var token=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
      var token ='Bearer ' + JSON.parse(localStorage.getItem('profile')).token;
    }
    let formData = {
      newp:newp,
      oldp:oldp
    }
    const { data } = await axios(
      {
      method: 'post',
      url:api+'users/changepassword',
      data:formData,
      headers: {
        'Authorization':token
      }
    }
    )
    if(data.success==true){
      console.log(data);
    }
   // history.push('/rdashboard');

  } catch (error) {
    console.log(error);
  }
}
export const signin = (formData , history) => async (dispatch) => {
  try {
    const { data } = await axios(
      {
      method: 'post',
      url:api+'users/login',
      data:formData,
    }
    )
    if(data.success==true){
      console.log(data)
      if(data.user.role=='admin'){

      dispatch({ type: AUTH, data });
      history('/Main');
      }
      
    }
   

  } catch (error) {
    console.log(error);
  }
};

