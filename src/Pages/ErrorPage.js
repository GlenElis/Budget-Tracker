import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div className="errDiv">
        ERROR! PAGE NOT FOUND
        <br></br>
        <br></br>

        <button onClick={() => {
            navigate("/");
        }}
        >
            {" "}
            Return to Home Page
        </button>
    </div>
  )
}

export default ErrorPage