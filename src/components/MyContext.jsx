import { createContext, useContext , useState } from "react";
const MyContext = createContext();

export const MycontentHere =({children}) =>{


    const [myOb , setCount] = useState([
    {id:0,name:"lijin"},
    {id:1,name:"david"},
    {id:2,name:"john"}
  ])
    const [value, setValue] = useState("");
    const [warn , setWarn] = useState("");
    const deleteOb = (id)=>{
      console.log("delete");
      console.log(id);
      setCount(myOb.filter(item=>(item.id !== id)))
}

  
    const getValue = (val) =>{
     setValue(val);
        if(val.length<10){
          setWarn("Characters must be greater than 10")
        }else{
          setWarn("")
        }
  }

    const showVal = (e) =>{
    e.preventDefault()
    if(value.length>=10){
        const data = addVal(value);
        setCount([...myOb,data])
        setValue("")
    }
    
    
 
  }


    const addVal = (val)=>{
    
    const values = {
      id:Math.random()*100000,
      name:val
    }

    return values
  }



  return (
    <MyContext.Provider value={{myOb , value , deleteOb , getValue , warn , showVal}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContext;