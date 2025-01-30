import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [jokes , setJokes] = useState([]) // we will take jokes from the backend
  //we will use axios to call api for the data because this is special for web request (data conversion ye khud kr dega no need to do)

  //use useEffect for api call (remember)
  useEffect(() =>{
    // proxy use kiya vite.config.js me 
    axios.get('/api/jokes')
    .then((Response)=>{
      // console.log(Response.data);
      setJokes(Response.data);
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })

  return (
    <>
      <h1>this is full stack application</h1>
      <p>Total Jokes : {jokes.length}</p> 
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }    
    </>
  )
}

export default App
