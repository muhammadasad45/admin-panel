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

 const [Changed, setChanged] = useState(false)
 let getC = async()=>{
  await getComplaintss()
}
  useEffect(() => {
    getC()
    setComplaints(complaints)
  },[complaints])

  let ResolveComplaint = (id) => {
    setChanged(true)
    dispatch(ResolveComplain(id))
  }

  useEffect(() => {
  
    setChanged(false)
    getC()
  }, [Changed])
  
  const [Complaints, setComplaints] = useState(complaints)
  console.log(Complaints)
  return (
    <>
        <Navbar/>
        <Complain complaints={Complaints} ResolveComplaint={ResolveComplaint}/>
        
    </>
  )
}

export default Complaints