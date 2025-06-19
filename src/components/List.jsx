import React, { useContext } from 'react'
import MyContext from './MyContext'
import Items from './Items'

function List() {

  
const {myOb , deleteOb} = useContext(MyContext)
  return (
    <>
    {
      myOb.map((data)=>(
        <Items key={data.id} data={data} deleteOb={deleteOb}></Items>
      ))
    }
    </>
  )
}

export default List