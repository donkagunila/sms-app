import React from 'react'
import Loader from "react-loader-spinner"

function PageLoader() {
  return (
    <Loader type="TailSpin" color="#2c7be5" height={40} style={{
      margin: "0 auto"
  }}  />
  )
}

export default PageLoader


