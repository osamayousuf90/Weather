import React from 'react'
import load from "./logo2.gif"

const Loader = () => {
  return (
      <>
      <div className="loader">
       <img src={load} className="loader" alt="" />
      </div>
      </>
  )
}

export default Loader