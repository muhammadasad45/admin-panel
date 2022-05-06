import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getComplaints, ResolveComplain } from '../actions/complaints';
import Complain from '../components/Complain';
import Navbar from '../components/Navbar';

const Complaints = () => {

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

  let ResolveComplaint = (id) => {
  
    dispatch(ResolveComplain(id))
  }
  
  const [Complaints, setComplaints] = useState(complaints)

  return (
    <>
        <Navbar/>
        <Complain complaints={Complaints} ResolveComplaint={ResolveComplaint}/>
        
    </>
  )
}

export default Complaints