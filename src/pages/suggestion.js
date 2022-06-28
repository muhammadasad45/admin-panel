import React, { useEffect, useState } from 'react'
import Suggestion from '../components/Suggestion'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuggestions } from '../actions/Suggestion'
const Suggestions = () => {

  let dispatch = useDispatch()
  const [Loading, setLoading] = useState(true)
  let suggestions = useSelector(state => state.suggestions)
  const getSuggestion = async()=>{
    dispatch(getAllSuggestions())
  }

  
  useEffect(async() => {
   await getSuggestion()
    setLoading(false)
  },[])
  useEffect(() => {
    setSuggestions(suggestions)
  }, [Loading])

  const [Suggestions, setSuggestions] = useState(suggestions)




  return (
    <>
     <Navbar/>
    <Suggestion Suggestions={Suggestions}/>
    </>
  )
}

export default Suggestions