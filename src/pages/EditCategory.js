import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import EditCategory from '../components/EditCategory/Index.jsx'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsById } from '../actions/post'

const AddCategory = () => {
  let {id} = useParams()
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const [Post, setPost] = useState(posts.post)
  console.log(posts)
  console.log(Post)
  const getPost = async () => {
    await dispatch(getPostsById(id))
  }
  useEffect(() => {
    getPost()
  })
  console.log(id)
  return (
    <>
            <Navbar/>
          <EditCategory/>     
    </>
  )
}

export default AddCategory