import axios from 'axios'
import { api } from '../constants/apiUrl';
import {GET_ALL_CATEGORIES ,GET_CATEGORY_BY_ID} from '../constants/actionType'

// Category Action
export const getAllCategories =()=> async(dispatch) => {
    try {
        let token = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token
        const { data } = await axios(
            {
                method: 'get',
                url: api + 'categories/',
                headers: {
                    'Authorization': token
                }
            }
        )
        if (data.success == true) {
            dispatch({ type: GET_ALL_CATEGORIES, payload: data.categories });
        }
    } catch (error) {
        console.log(error);
    }
}

export const addCategory = (formData , history) => async (dispatch) => {
    try {
        let token = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token

        const { data } = await axios(
            {
                method: 'post',
                url: api + 'categories/add',
                data: formData,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        
        if (data.success == true) {
            dispatch(getAllCategories());
            history("/ViewCategories")
        }
    } catch (error) {
        console.log(error);
    }
}


export const deleteCategory = (id) => async (dispatch) => {
    try {
        let token = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token

        const { data } = await axios(
            {
                method: 'delete',
                url: api + 'categories/delete/' + id,
                headers: {
                    'Authorization': token
                }
            }
        )
        if (data.success == true) {
            dispatch(getAllCategories());
        }
    } catch (error) {
        console.log(error);
    }
}

