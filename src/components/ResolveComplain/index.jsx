import React from 'react'

const index = ({complaints}) => {
  console.log(complaints)
  complaints = complaints.complaints.filter((complaint)=>complaint.status === "resolved")
  return (
    <>
        
    <div class="mx-5  ">       
       


          <table class="rounded-3 table table-responsive" id="complain">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Fullname</th>
                <th scope="col">Location</th>
                <th scope="col">Contact no</th>
                <th scope="col">Description</th>
                <th scope="col">Issue</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map(complaint => (
                <tr>
                  <td>{complaint.user.email}</td>
                  <td>{complaint.user.name}</td>
                  <td>{complaint.user.location}</td>
                  <td>{complaint.user.mobilephone}</td>
                  <td>{complaint.description}</td>
                  <td>
                    {complaint.status === "pending" ? <button class="btn btn-success" >Resolve</button> :<button class="btn btn-success" disabled type="submit">Resolved</button> }
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