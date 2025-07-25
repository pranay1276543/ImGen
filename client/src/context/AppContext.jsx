import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(null);
    const [showlogin,setShowlogin] = useState(false)
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [credit,setCredit] = useState(false) 
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    // const navigate = useNavigate()

    const loadCreditsData = async ()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
            // console.log(data)
            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})
            console.log(data)
            if(data.success){
                loadCreditsData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditsData()
               
            }
        } catch (error) {
            // console.log("generate image error")
            toast.error(error.message)
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }
    useEffect(()=>{
        if(token){
            
            loadCreditsData()
        }
    },[token])


    const value={
        user, setUser,showlogin,setShowlogin,backendUrl,
        token,setToken,credit,setCredit,loadCreditsData,logout,
        generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider