import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'


function App() {
  function handleSubmit(nombre) {
    
    setNombre(nombre)
  }
  // function handleSubmit(color) {
    
  //   setColor(color)
  // }

  
  

  return (
    <>
      <Form onNombre={handleSubmit} />
      <Card />
     
      
    </>
  )
}

export default App
