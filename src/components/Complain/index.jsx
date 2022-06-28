import React from 'react'

const index = ({complaints , ResolveComplaint}) => {
  console.log(complaints)
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
              {complaints.complaints.map(complaint => (
                <tr>
                  <td>{complaint.user.email}</td>
                  <td>{complaint.user.name}</td>
                  <td>{complaint.user.location}</td>
                  <td>{complaint.user.mobilephone}</td>
                  <td>{complaint.description}</td>
                  <td>
                    {complaint.status === "pending" ? <button class="btn btn-success" onClick={()=>ResolveComplaint(complaint._id)} type="submit">Resolve</button> :<button class="btn btn-success" disabled type="submit">Resolved</button> }
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