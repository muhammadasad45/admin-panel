import React, { useEffect, useState } from 'react'
import ResolveComplain from '../components/ResolveComplain';
import Navbar from '../components/Navbar'
import { getComplaints } from '../actions/complaints';
import { useDispatch, useSelector } from 'react-redux';
const Resolve = () => {

  let dispatch = useDispatch()
  let complaints = useSelector(state => state.complaints)
  const getComplaintss = async()=>{
    dispatch(getComplaints())
 }

 let getC = async()=>{
  await getComplaintss()
}
  useEffect(() => {
    getC()
    setComplaints(complaints)
  },[complaints])

 
  const [Complaints, setComplaints] = useState(complaints)
  console.log(Complaints)

  return (
    <>
         <Navbar/>
        <ResolveComplain complaints={Complaints}/>
    </>
  )
}

export default Resolve