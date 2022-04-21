import React from 'react'
import fruite from '../../image/fruite.webp'
const index = () => {
  return (
    <>
          <div className="mx-5  ">   
        <form className="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div className="d-flex">
                <input className="border border-none form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </div>
          </form>


          <table className="rounded-3 table table-responsive" id="post">
            <thead>
              <tr>
             <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Sub-Category</th>
                <th scope="col">Variety</th>
                <th scope="col">Location</th>
                <th scope="col">Contact no</th>
                <th scope="col">Approval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img style={{width: "2rem"}} src={fruite} alt="not" /></td>
                <td>Fruits</td>
                <td>Mango</td>
                <td>Chaunsa</td>
                <td>islamabad</td>
                <td>0300-1234567</td>
                <td className="d-flex ">
                  <button className="m-0 px-3 btn btn-sm btn-success rounded-pill">
                    Unapprove
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