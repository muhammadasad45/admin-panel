import React from 'react'
const index = ({Users , handleSearch ,blockuser}) => {
  return (
    <>
          <div class="mx-5  ">
        
        <form class="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div class="d-flex">
                <input class="border border-none form-control me-2" type="search" onKeyUp={(e)=>handleSearch(e)} placeholder="Search" aria-label="Search"/>
            </div>
          </form>
       
        <table class="rounded-3 table table-responsive" id="userList">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact no</th>
                <th scope="col">Location</th>
                <th scope="col">Block/Unblock</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((user,index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobilephone}</td>
                    <td>{user.location}</td>
                    <td>
                      <button onClick={()=>blockuser(user._id)} class="btn btn-success" type="submit">{user.status ? "Block":"unBlock"}</button>
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