import React, { useState, useEffect } from "react"
import { auth } from "../../firebase"
import {toast} from "react-toastify"
import { ConsoleSqlOutlined } from "@ant-design/icons"

//import { sendSignInLinkToEmail } from "firebase/auth";
//import {getAuth, sendSignInLinkToEmail} from "firebase/auth"
const RegisterComplete= ({history})=> {
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    useEffect(()=>{
        setEmail(window.localStorage.getItem('emailForRegistration'))
       // console.log(window.location.href)
        //console.log(window.localStorage.getItem('emailForRegistration'))

    },[])
    
    const handleSubmit =async(e)=>{
        e.preventDefault()
        // validacion
        if (!email || !password){
            toast.error('Se requiere email y password')
            return
        }
        if (password.length<6){
            toast.error("Passsword debe ser al menos de 6 caracteres de largo")
            return 
        }
        try{
            const result =await auth.signInWithEmailLink(email,window.location.href)
            //console.log('RESULT',result)
            if (result.user.emailVerified){
                //borrar email del local storage
                window.localStorage.removeItem('emailForRegistration')
                //obtener el token del usuario
                let user = auth.currentUser
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult()
                console.log('user', user, 'idTokenResult',idTokenResult)
                //redirect
                history.push('/')


            }
        }catch (error){
            toast.error(error.message)
        }
    
    }
    const completeRegistrationForm = () => <form onSubmit={handleSubmit}>
        <input type="email" 
            className="form-control"
            value={email}  disabled />
        <input type="password" 
            className="form-control"
            value={password} onChange={(e)=> setPassword(e.target.value)} autoFocus placeholder="Password"/>    
        <br/>
        <button type="submit" className="btn btn-raised">
            Complete registration
        </button>
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register complete</h4>
                    
                   {completeRegistrationForm()}
                </div>

            </div>
        </div>
    )


}

export default RegisterComplete