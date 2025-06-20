import { createContext, useContext , useEffect, useState } from "react";
const MyContext = createContext();

export const MycontentHere =({children}) =>{


    const [myOb , setCount] = useState([
    
  ])
    const [value, setValue] = useState("");
    const [warn , setWarn] = useState("");



    const deleteOb = (id)=>{
      // console.log("delete");
      // console.log(id);
      // setCount(myOb.filter(item=>(item.id !== id)))

      deleteData(id)
}



    const [updatedValue , setUpdatedValue] = useState({
      item:{},
      edit:false
    })



  
    const getValue = (val) =>{
     setValue(val);
        if(val.length<10){
          setWarn("Characters must be greater than 10")
        }else{
          setWarn("")
        }
  }




    const showVal = (e) => {
  e.preventDefault();

  if (value.length >= 10) {
    if (updatedValue.edit) {
      // Updating an existing item
      const updatedList = myOb.map((item) =>
        item.id === updatedValue.item.id
          ? { ...item, name: value }
          : item
      );
      setCount(updatedList);
      setUpdatedValue({ item: {}, edit: false }); 
      putData(value , updatedValue.item.id)// Exit edit mode
      
    } else {
      // Adding new item
      const data = addVal(value);
      // setCount([...myOb, data]);
      postData(data)

    }

    setValue(""); // clear input
    setWarn("");
  }
};




const postData = async(data)=>{
  const numid = String(data.id)
  await fetch("http://localhost:3000/items",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      name:data.name
    })
  })
  fetchData()
}

const deleteData = async(id)=>{
  await fetch(`http://localhost:3000/items/${id}`,{
    method:"DELETE",
    headers:{
      "content-type":"application/json"
    }

  })
  fetchData()
}

const putData = async(value , id)=>{
  await fetch(`http://localhost:3000/items/${id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(
      {
        id:`${id}`,
        name:value
      }
    )
  }
  )
}

    // const update =(updates)=>{
    //   if(updates.edit===true){
    //     const updatedlst = myOb.map((items)=>(
    //       updates.item.id === items.id? [...items.name,...updates.item.name]: items
    //     ))
        
    //   }
      
    // }

    const addVal = (val)=>{
    
    const values = {
      id:Math.random()*100000,
      name:val
    }

    return values
  }

  const updateValue = (item) =>{
    setUpdatedValue({
      item:item,
      edit:true
    })

    
  }




 const fetchData = async ()=>{
    const response = await fetch("http://localhost:3000/items")
    const data = await response.json()
    setCount(data)
 }

useEffect(()=>{
  fetchData()
},[])



  return (
    <MyContext.Provider value={{myOb , value , setValue, deleteOb , getValue , warn , showVal , updateValue , updatedValue}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContext;