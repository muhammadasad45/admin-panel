
import {Link } from "react-router-dom";
import  '../../App.css';
const index = ({Suggestions}) => {
  return (
    <>
            <div className="contLinkiner-fluid" id="suggestion">

{/* <!-- suggestion --> */}
<div className="mx-3 row gy-4 my-5">

  {Suggestions.suggestions.map((suggestion, index) => {
    return (
      <div className="col-xl-4">
    <div className="suggestion-box shadow p-4">
      <h3>{suggestion.title}</h3>
      <Link className="text-black fw-bold text-decoration-none " to="">{suggestion.user.email}</Link>
      <p className="suggestion-para">
        {suggestion.description} 
      </p>
    </div>
  </div>
    )
  }

  )}

</div>
</div>
    </>
  )
}

export default index