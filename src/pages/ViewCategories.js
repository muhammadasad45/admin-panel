import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, getAllCategories } from '../actions/Category'
import Navbar from '../components/Navbar'
import Viewcategories from '../components/ViewCategory'

const ViewCategories = () => {
const categories = useSelector(state => state.categories)
const [Categories, setCategories] = useState(categories)
const [Loading, setLoading] = useState(true)
 const dispatch = useDispatch();
const getCategoriees = async() => { 
    await dispatch(getAllCategories())
}

const getAllCategoriees = async() => {
    await getCategoriees()
}

const deletecategory = (id)=>{
  dispatch(deleteCategory(id))
}




useEffect(async() => {
 await getAllCategoriees()
 setLoading(false)
 
  },[])
useEffect(() => {
  setCategories(categories)
  }, [Loading])

  return (
    <>
      <Navbar/>
        <Viewcategories Categories={Categories} deletecategory={deletecategory}/>
    </>
  )
}

export default ViewCategories