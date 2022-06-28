import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { blockUser, getUsers } from '../actions/user'
import Navbar from '../components/Navbar'
import Userlist from '../components/Userlist'
const UserList = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const {authData} = useSelector(state => state.authData)
  if(!authData){
    navigate('/')
  }

  const [Loading, setLoading] = useState(true)


  
  const [Changed, setChanged] = useState(false)
  const blockuser=(id)=>{
    setChanged(true)
    dispatch(blockUser(id))
    

  }

  const getUser = async () => {
    dispatch(getUsers())
 }
 const getData = async () => {
     await getUser();
 }


let users = useSelector(state => state.users)
const [Users, setUsers] = useState(users)
const [FilteredUser, setFilteredUser] = useState(Users.users)
const [search, setSearch] = useState('')

  useEffect(() => {
    getData()
  }, [Loading , Changed])

useEffect(() => {
  setFilteredUser(users.users)
  }, [users])



let handleSearch = (e) => {
  setSearch(e.target.value)
}



useEffect(() => {
  let filteredUser = Users.users.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  })
  setFilteredUser(filteredUser)
}, [search])


  return (
      <>
    <Navbar/>
    <Userlist Users={FilteredUser} handleSearch={handleSearch} blockuser={blockuser} />
      </>
  )
}

export default UserList