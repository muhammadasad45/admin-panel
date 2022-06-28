import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getComplaints, ResolveComplain } from '../actions/complaints';
import Complain from '../components/Complain';
import Navbar from '../components/Navbar';

const Complaints = () => {
const [Loading, setLoading] = useState(true)
  let dispatch = useDispatch()
 
  const getComplaintss = async()=>{
    dispatch(getComplaints())
 }

 const [Changed, setChanged] = useState(false)
 let getC = async()=>{
  await getComplaintss()
}
let complaints = useSelector(state => state.complaints)
const [Complaints, setComplaints] = useState(complaints)
let ResolveComplaint = (id) => {
  
 dispatch(ResolveComplain(id))
  setChanged(true)
  setChanged(false)
}
  useEffect(async() => {
    
    await getC()
    setLoading(false)
  },[Changed])
useEffect(() => {
  if(Loading === false || Changed === true){
  setComplaints(complaints)
  }
}, [Loading , Changed])
  
  return (
    <>
        <Navbar/>
        <Complain complaints={Complaints} ResolveComplaint={ResolveComplaint}/>
        
    </>
  )
}

export default Complaints