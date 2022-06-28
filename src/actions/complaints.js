import axios from 'axios'
import { api } from '../constants/apiUrl';
import { GET_COMPLAINTS , GET_COMPLAINTS_BY_USER } from '../constants/actionType';



export const getComplaints = () => async (dispatch) => {
    try {
        if(localStorage.getItem('profile')){
            //  var token=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
            var token ='Bearer ' + JSON.parse(localStorage.getItem('profile')).token
             }
        const { data } = await axios(
            {
                method: 'get',
                url:api+'complaints',
                headers: {
                    'Authorization':token
                  }
            }
            )
        if(data.success==true){
           
            dispatch({ type: GET_COMPLAINTS,payload: data.complaints });
        }

    } catch (error) {
        console.log(error);
    }
}


export const ResolveComplain =(id)=> async(dispatch) => {
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
                url:api+'complaints/resolve',
                data:body,
                headers: {
                    'Authorization':token
                }

            }
            )
        if(data.status = true){
            getComplaints()
        }

    } catch (error) {
        console.log(error);
    }
}
