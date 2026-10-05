import React from 'react'
import {useRouteError} from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    console.log(error)

  return (
    <div>
        
    <h1>Oops</h1>
    <p>Temos um problema</p>

    </div>
  )
}

export default ErrorPage