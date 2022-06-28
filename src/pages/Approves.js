import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Approve from '../components/Approve'
import Navbar from '../components/Navbar'
import { getAllPosts } from '../actions/post';
const Approves = () => {
  const posts = useSelector(state => state.posts)
  const [Posts, setPosts] = useState(posts.posts)
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const getPosts = async () => {
    await dispatch(getAllPosts())
  }
  console.log(posts)
  const getData = async () => {
    await getPosts()
  }
  useEffect(() => {
    getData()
   setLoading(false)
  }, [])

  useEffect(() => {
    setPosts(posts.posts)
  }, [Loading])
  return (
    <>
         <Navbar/>
        <Approve post={posts}/>
     
    </>
  )
}

export default Approves