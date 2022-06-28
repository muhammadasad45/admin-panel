import React from 'react'
import '../../App.css'
import Add from '../../image/add-category.svg'
import {Link } from "react-router-dom";
const index = ({handleName ,handleSubmit, handleSubCategory, handleImage , handleBazar}) => {
    
  return (
    <>
{/* Add Category */}
         <div class="mx-5  ">       
<div class="row mt-5 shadow " >
    <div class="col-xl-6 col-md-6 col-sm-12 ">
        <form class=" py-5 px-3">
            <h4 class="mb-3">Add Category</h4>
            <label for="exampleInputEmail1" class="form-label">Select Bazar</label>
            <select class="form-select" onChange={(e)=>handleBazar(e)} aria-label="Default select exampnle">
                    <option selected>Select Bazar</option>
                    <option value="1">Agri bazar</option>
                    <option value="2">Machinery</option>
                    <option value="3">Seeds</option>    
            </select>
            <div class="mb-3 mt-3">
            <label for="image" class="form-label">Upload Image</label>
            <input class="form-control" onChange={(e)=>handleImage(e)} type="file" id="image" name='image'/>
            </div>
        <div class='row mt-2'>
       
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Enter Category Name</label>
                    <input type="text" onChange={(e)=>handleName(e)} class="form-control" id="inputCity"/>
                </div>
               
               
        </div>

        <div class='row mt-2'>
        
                <div class="col-md-6">
                        <label for="exampleInputPassword1" class="form-label">Enter Sub Category Name</label>
                    <input type="text" onChange={(e)=>handleSubCategory(e)} class="form-control" id="inputCity"/>
                </div>
                
              
        </div>
        <div class="mt-3">

            <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-success rounded-pill px-4">Add Category</button>
        </div>
    </form>
</div>
    <div class="col-xl-6 col-md-6 col-sm-12  ">
        <div class="p-5 d-none d-sm-block mt-5">
            <img class="img-fluid " src={Add} alt=""/>
        </div>
    </div>
    </div>
        
    </div>
    </>
  )
}

export default index