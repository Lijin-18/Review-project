import React from 'react'

function Button({type}) {
  return (
    <>
        <button className={`btn btn-${type}`}>Send</button>
    </>
  )
}

export default Button