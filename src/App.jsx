import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Header from './components/header'
import List from './components/List'
import Form from './components/Form'
import Button from './components/button'
import MyContext, { MycontentHere } from './components/MyContext'
import ThemeContext, { ThemeContextProvider } from './components/Themecontext'
// import { uuid } from 'uuidv4';



function App() {


  return(
    <div className="container">

    <MycontentHere>
    <Header></Header>
      <Form />
      <List/>
    </MycontentHere>

    </div>
  )
 
}

export default App
