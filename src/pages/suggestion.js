import React, { useEffect, useState } from 'react'
import Suggestion from '../components/Suggestion'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuggestions } from '../actions/Suggestion'
const Suggestions = () => {

  let dispatch = useDispatch()
  let suggestions = useSelector(state => state.suggestions)
  const getSuggestion = async()=>{
    dispatch(getAllSuggestions())
  }

  
  useEffect(() => {
    getSuggestion()
    setSuggestions(suggestions)
  },[suggestions])
  const [Suggestions, setSuggestions] = useState(suggestions)




  return (
    <>
     <Navbar/>
    <Suggestion Suggestions={Suggestions}/>
    </>
  )
}

export default Suggestions