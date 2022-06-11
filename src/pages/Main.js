import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/Main'
import { useNavigate } from 'react-router-dom'
import { signout } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions/user'
import { getComplaints } from '../actions/complaints'
import {getAllPosts} from "../actions/post"
const Main = () => {
  let dispatch = useDispatch()
  let history = useNavigate()
 let {authData} =  useSelector(state => state.authData)

  useEffect(() => {
   if(!authData){
     history('/')
   }
  }, [authData])
  const handleLogout=()=>{
    dispatch(signout())
    history("/")
  }
  let users = useSelector(state => state.users)
  let complaints = useSelector(state => state.complaints)
  const posts = useSelector(state => state.posts)
  const [Users, setUsers] = useState(users)
  const [Complaints, setComplaints] = useState(complaints)
  const [Posts, setPosts] = useState(posts)

  useEffect(() => {
    getData()
    getC()
    getAll()
    setUsers(users)
    setComplaints(complaints)
  },[users , complaints])
  const getUser = async () => {
    dispatch(getUsers())
 }
 const getComplaintss = async()=>{
    dispatch(getComplaints())
 }
 const getC = async()=>{
   await getComplaintss()
  }
 const getData = async () => {
     await getUser();
 }
 const getPosts = async () => {
  await dispatch(getAllPosts())
}

const getAll = async () => {
  await getPosts()
}


// Count No of Complaints Which are not resolved 
let count = 0
Complaints.complaints.map(complaint => {
  if (complaint.status === "pending") {
    count = count + 1
  }
}
)

  return (
      <>
    <Navbar handleLogout={handleLogout}/>
    <MainSection userCount = {Users.users.length} postCount={Posts.posts.length} compCount={Complaints.complaints.length} pendingCom = {count}/>
      </>
  )
}

export default Main