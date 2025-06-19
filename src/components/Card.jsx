import React from 'react'

function Card({children , cname}) {
  return (
    <div className={`card card-layout ${cname}`}>
        {children}
    </div>
  )
}

export default Card