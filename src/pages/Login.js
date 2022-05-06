import React , {useEffect, useState} from 'react'
import Login from '../components/Login'
import { Redirect , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/auth';

export default function Loginn({User}) {
    const history = useNavigate();
    

   useEffect(() => {
    if(User){
      history('/Main')
    }
   }, [User])


    const [Username, setUsername] = useState('');
    const [Pass, setPass] = useState('');
   
    const dispatch = useDispatch();
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlepass = (e) => {
        setPass(e.target.value)
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            username:Username,
            password:Pass
        }
        console.log(formData)
       dispatch(signin(formData ,history))

    }

   


  return (
    <Login handleSubmit={handleSubmit} handleUsername={handleUsername} handlepass={handlepass}/>
  )
}
