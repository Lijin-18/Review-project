import React, { useContext, useEffect } from 'react'
import Card from './card'
import Button from './button'
import MyContext from './MyContext'


function Form({}) {

const {getValue , warn , value , setValue, showVal ,updatedValue } = useContext(MyContext);

  const getInp =(e) =>{
    getValue(e.target.value)
  }


useEffect(()=>{

  if(updatedValue.edit === true){
    setValue(updatedValue.item.name)
  }

},[updatedValue])
  

  return (
    <div className="text-center">
        <Card>
        <form onSubmit={(e)=>{showVal(e)}}>
            <input value={value} onChange={getInp} className='input-field form-control'/>
             <Button  type={"primary"} />
             
        </form>
        <div>
              <p className="warning-text">{warn}</p>
             </div>
        </Card>

    </div>
  )
}

export default Form