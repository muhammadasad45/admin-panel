import axios from 'axios'
import { api } from '../constants/apiUrl';

import { GET_ALL_POSTS } from '../constants/actionType';


export const getAllPosts = () => async (dispatch) => {
    try {
        let token = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token;

        const { data } = await axios(
            {
                method: 'get',
                url: api + 'posts/',
                headers: {
                    'Authorization': token
                }
            }
        )
       if(data.success==true){
        
        dispatch({ type: GET_ALL_POSTS, data: data.posts });
       }
    } catch (error) {
        console.log(error);
    }
}

export const approvePost = (id) => async (dispatch) => {
    try {
        let token = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token;

        const { data } = await axios(
            {
                method: 'post',
                url: api + 'posts/approve/' + id,
                headers: {
                    'Authorization': token
                }
            }
        )
       if(data.success==true){
      
        dispatch({ type: GET_ALL_POSTS, data: data.posts });
       }
    } catch (error) {
        console.log(error);
    }
}
