import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Addcategories from '../components/AddCategory'
import { useDispatch } from 'react-redux'
import { addCategory } from '../actions/Category'
import { useNavigate } from 'react-router-dom'
const AddCategory = () => {
  const [image, setimage] = useState()
  const [name, setname] = useState("")
  const [subCategory, setsubCategory] = useState("")
  const [bazar, setbazar] = useState("")
  const dispatch = useDispatch()
  let history = useNavigate()
  let handleName=(e)=>{
    setname(e.target.value)
  }
  let handleSubCategory=(e)=>{
    setsubCategory(e.target.value)
  }
  let handleBazar=(e)=>{
    if(e.target.value==1){
      setbazar("Agri bazar")
    }else if(e.target.value==2){
      setbazar("Machinery")
    }else if(e.target.value==3){
      setbazar("Seeds")
    }
  }
  let handleImage=(e)=>{
    setimage(e.target.files[0])
  }


  let addCategor=(formData)=>{
    console.log(formData)
    dispatch(addCategory(formData , history))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('subCategory', subCategory)
    formData.append('bazar', bazar)
    formData.append('image', image)
    addCategor(formData)
    

  }


  return (
    <>
    <Navbar/>
          <Addcategories handleSubmit={handleSubmit}  handleName={handleName} handleBazar={handleBazar}  handleImage={handleImage} handleSubCategory={handleSubCategory}  />     
    </>
  )
}

export default AddCategory