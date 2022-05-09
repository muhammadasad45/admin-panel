import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../actions/Category'
import Navbar from '../components/Navbar'
import Viewcategories from '../components/ViewCategory'

const ViewCategories = () => {
const categories = useSelector(state => state.categories)
const [Categories, setCategories] = useState(categories)
 const dispatch = useDispatch();
const getCategoriees = async() => { 
    await dispatch(getAllCategories())
}

const getAllCategoriees = async() => {
    await getCategoriees()
}

useEffect(() => {
  getAllCategoriees()
  setCategories(categories)
}, [Categories])

  return (
    <>
      <Navbar/>
        <Viewcategories Categories={Categories}/>
    </>
  )
}

export default ViewCategories