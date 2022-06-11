import React from 'react'
import fruite from '../../image/fruite.webp'
import { api } from '../../constants/apiUrl'
const index = ({post ,ApprovePost}) => {
  console.log(post)
  post = post.filter(post => post.isApproved === false)
  return (
    <>
           <div class="mx-5  ">
        
        <form class="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div class="d-flex">
                <input class="border border-none form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
            </div>
          </form>


          <table class="rounded-3 table table-responsive" id="post">
            <thead>
              <tr>
              <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Sub-Category</th>
                <th scope="col">Variety</th>
                <th scope="col">Location</th>
                <th scope="col">Contact no</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope="col">Approval</th>
              </tr>
            </thead>
            <tbody>
             {post.map(post => (
               <tr>
                 <td><img  style={{height:"3rem" , width:"3rem"}} src={api+post.Category.image } alt="fruite" class="img-fluid"/></td>
                  <td>{post.Category.name}</td>
                  <td>{post.Category.subCategory}</td>
                  <td>{post.Product}</td>
                  <td>{post.addedBy.location}</td>
                  <td>{post.addedBy.mobilephone}</td>
                  <td>{post.Quantity} KG</td>
                  <td>{post.price}</td>
                  <td> 
                  <button onClick={()=>ApprovePost(post._id)} class="btn btn-primary" > Approve </button>
                    <button onClick={()=>ApprovePost(post._id)} class="btn btn-danger" > Reject </button>
                    </td>
                </tr>
              ))}
           
              
            </tbody>
          </table>

         
    </div>
    </>
  )
}

export default index