import React from 'react'
import Card from './card'

function Items({data , deleteOb}) {
  return (
    <Card>
        <li>
            {data.name}
            <button onClick={()=>{deleteOb(data.id)}} >X</button>
        </li>
    </Card>
  )
}

export default Items