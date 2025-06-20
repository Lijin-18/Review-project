import React, { useContext } from 'react'
import Card from './card'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import MyContext from './MyContext';



function Items({data , deleteOb}) {
  const {updateValue} = useContext(MyContext);
  return (
    <Card>
        <li>
            {data.name}
           <div>
            <FaEdit onClick={()=>{updateValue(data)}} />
            <MdDelete onClick={()=>{deleteOb(data.id)}}/>
           
           </div>
        </li>
    </Card>
  )
}

export default Items