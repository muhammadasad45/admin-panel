import React from 'react'
import fruite from '../../image/fruite.webp'
import {Link } from "react-router-dom";
const index = () => {
  return (
    <>
           <div class="mx-5  ">
        
        <form class="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div class="d-flex">
                <input class="border border-none form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
            </div>
          </form>


          <table class="rounded-3 table table-responsive" id="remove">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Bazar name</th>
                <th scope="col">Category Name</th>
                <th scope="col">Sub Category Name</th>
                <th scope="col">Variety </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <img style={{width: "2rem"}} src={fruite} alt="not" /> </td>
                <td>agri bazar</td>
                <td>Fruite</td>
                <td>Mango</td>
                <td>Lungra</td>
                <td class="">
           
                       <Link class="m-0 px-3 btn btn-sm btn-success rounded-pill text-decoration-none text-white" to="/editCategories" >
                       Edit
                       </Link>  
               
                    <button class="ms-3 px-4 m-0 px-3 btn btn-sm  rounded-pill" style={{color:"white", backgroundColor: "#e00909"}}>
                      Delete
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>

         
    </div>
    </>
  )
}

export default index