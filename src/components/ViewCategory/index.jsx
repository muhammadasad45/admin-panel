import React from 'react'
import fruite from '../../image/fruite.webp'
import {Link } from "react-router-dom";
import { api } from '../../constants/apiUrl';
const index = ({Categories , deletecategory}) => {
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Categories.categories.map((category,index)=>{
                return(
                  <tr>
                    <td><img src={api+category.image} style={{height:'2rem'}} alt=""/></td>
                    <td>{category.bazar}</td>
                    <td>{category.name}</td>
                    <td>{category.subCategory}</td>
                    <td>
                      <Link to={`editCategories/${category._id}`} class="btn btn-success">Edit</Link>
                      <button onClick={()=>deletecategory(category._id)} class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>

         
    </div>
    </>
  )
}

export default index