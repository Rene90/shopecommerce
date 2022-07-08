import React, { useState } from "react"
import { auth } from "../../firebase"
import {toast} from "react-toastify"

//import { sendSignInLinkToEmail } from "firebase/auth";
//import {getAuth, sendSignInLinkToEmail} from "firebase/auth"
const Register= ()=> {
    const [email, setEmail] =useState("")
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const config ={
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp : true,
        }
        
        await auth.sendSignInLinkToEmail(email,config)
        toast.success(`Email is sento to ${email}. Click the link to complete your registration`)
        // guardarlo en local storage
        window.localStorage.setItem("emailForRegistration",email)
        // vaciar el state al finalizar
        setEmail("")
    
    }
    const registerForm = () => <form onSubmit={handleSubmit}>
        <input type="email" 
            className="form-control"
            value={email} onChange={e=>setEmail(e.target.value) } autoFocus />
        <button type="submit" className="btn btn-raised">
            Register
        </button>
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    
                   {registerForm()}
                </div>

            </div>
        </div>
    )


}

export default Register