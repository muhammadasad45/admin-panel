import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { approvePost, getAllPosts } from '../actions/post';

const Posts = () => {
  const posts = useSelector(state => state.posts)
  const [Posts, setPosts] = useState(posts.posts)
  const dispatch = useDispatch();
  const getPosts = async () => {
     dispatch(getAllPosts())
  }
  const getData = async () => {
    await getPosts()
  }
  const ApprovePost = async (id) => {
     dispatch(approvePost(id))
  }

  


  useEffect(async() => {
    await getData()
    setPosts(posts.posts)
  }, [])


  return (
    <>
          <Navbar/>
        <Post post={Posts} ApprovePost={ApprovePost} />
          
       
      
    </>
  )
}

export default Posts