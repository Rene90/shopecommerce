import React, {useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import Header from "./components/nav/Header"
import RegisterComplete from './pages/auth/RegisterComplete'

import {auth} from './firebase'
import { useDispatch } from "react-redux"

const App = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async ()=>{
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        dispatch({
          type: "LOGGED_IN_USER",
          payload:{
            email:user.email,
            token:idTokenResult.token
          }
        })
      }
    })
    return ()=> unsubscribe()
  },[])

  return(
    <>
      <Header/>
      <ToastContainer/>
    <Routes>
      <Route  path="/" element = {<Home />}/>
      <Route  path="/login" element = {<Login />}/>
      <Route  path="/register" element = {<Register />}/>
      <Route  path="/register/complete" element = {<RegisterComplete />}/>

    </Routes>
    
    
    
    
    </>


    


  ) 
}





export default App;
