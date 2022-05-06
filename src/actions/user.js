import { GET_USERS } from '../constants/actionType';
import axios from 'axios'
import { api } from '../constants/apiUrl';





export const getUsers = () => async (dispatch) => {
  try {
      if(localStorage.getItem('profile')){
     //  var token=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
     var token ='Bearer ' + JSON.parse(localStorage.getItem('profile')).token
      }
      
    const { data } = await axios(
      {
      method: 'get',
      url:api+'users/',
      headers: {
        'Authorization':token
      }

    }
    )
    if(data.success==true){
      dispatch({ type: GET_USERS, 
        payload: data.users });
    }


  } catch (error) {
    console.log(error);
  }
};


export const blockUser= (id)=> async()=>{
  try {
      if(localStorage.getItem('profile')){
     //  var token=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
     var token ='Bearer ' + JSON.parse(localStorage.getItem('profile')).token
      }
      let body = {
        id:id
      }
    const { data } = await axios(
      {
      method: 'post',
      url:api+'users/blockuser',
      data:body,
      headers: {
        'Authorization':token
      }

    }
    )
    console.log(data)
     if(data.status = true){
         getUsers()
  }
  } catch (error) {
    console.log(error);
  }

 

} 
