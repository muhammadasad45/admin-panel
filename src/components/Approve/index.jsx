import React from 'react'
import { api } from '../../constants/apiUrl'
import fruite from '../../image/fruite.webp'
const index = ({post , filterPosts}) => {
 let p= post.posts.filter(post => post.isApproved === true)
 console.log(post)
  return (
    <>
          <div className="mx-5  ">   
        <form className="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div className="d-flex">
               
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
             {p.map(post => (
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
                    <button class="btn btn-primary" disabled={post.isApproved}> Approved </button>
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