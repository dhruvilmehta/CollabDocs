import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { ToastContext } from "../../contexts/toast-context"
import AuthService from "../../services/auth-services"
import axios from "axios"

const VerifyEmail=()=>{
    const {token}=useParams()
    const {addToast, error}=useContext(ToastContext)
    const [children, setChildren]=useState(<>Loading...</>)

    const verifyEmail=async()=>{
        if(token===undefined){
            error("This token is invalid")
            setChildren(<Navigate to="/login" />)
        }
        try{
            await AuthService.verifyEmail(token)
            addToast({
                title: 'Successfully verified your email address',
                body: 'You may login now',
                color: 'success'
            })
        }catch(err){
            if(axios.isAxiosError(err)){
                console.log("axios error")
            }
            error('An unknown error has occured. Please try again')
        }finally{
            setChildren(<Navigate to="/login" />)
        }
    }

    useEffect(()=>{
        verifyEmail()
    },[])

    return children
}

export default VerifyEmail