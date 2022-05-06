import axios from 'axios'
import { api } from '../constants/apiUrl';
import { GET_ALL_SUGGESTIONS  } from '../constants/actionType';


export const getAllSuggestions = () => async (dispatch) => {
    try {

        var token ='Bearer ' + JSON.parse(localStorage.getItem('profile')).token

        const { data } = await axios(
            {
                method: 'get',
                url:api+'suggestions',
                headers: {
                    'Authorization':token
                }
            }
            )
        if(data.success==true){
            console.log(data)
            dispatch({ type: GET_ALL_SUGGESTIONS,payload: data.suggestions });
        }

    } catch (error) {
        console.log(error);
    }
}