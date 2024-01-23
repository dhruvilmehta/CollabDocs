import { useContext } from "react"
import { AuthContext } from "../contexts/auth-context"
import useLocalStorage from "./use-local-storage"
import {jwtDecode} from "jwt-decode"
import Token from "../types/interfaces/token"
import AuthService from "../services/auth-services"

const useAuth=()=>{
    const {accessToken, setAccessToken, isAuthenticated, setIsAuthenticated, loading, setLoading, loadingAuth, setLoadingAuth, errors, userId, setUserId, email, setEmail}=useContext(AuthContext)

    const [refreshToken, setRefreshToken]=useLocalStorage<string|null>('refresh_token',null)

    const login=(accessToken: string, refreshToken: string)=>{
        const {exp, id, email}=jwtDecode<Token>(accessToken)
        silentRefresh(exp)
        setUserId(id)
        setEmail(email)
        setAccessToken(accessToken)
        setRefreshToken(refreshToken)
        setIsAuthenticated(true)
    }

    const logout=async()=>{
        if(!accessToken) return ;
        try{
            await AuthService.logout(accessToken)
        }catch(error){
            console.log(error)
        }finally{
            destroyAuth()
        }
    }

    const silentRefresh=(exp: number)=>{
        const msExpiration=Math.abs(new Date().getTime()-new Date(exp*100).getTime())

        setTimeout(()=>{
            refreshAccessToken()
        },msExpiration)
    }

    const destroyAuth=()=>{
        setRefreshToken(null)
        setAccessToken(null)
        setUserId(null)
        setEmail(null)
        setIsAuthenticated(null)
    }

    const refreshAccessToken=async()=>{
        if(refreshToken==null){
            destroyAuth()
            setLoadingAuth(false)
            return 
        }
        try{
            const response=await AuthService.refreshToken({token: refreshToken})
            const {accessToken: newAccessToken, refreshToken: newRefreshToken}=response.data
            login(newAccessToken, newRefreshToken)
        }catch(error){
            destroyAuth()
        }finally{
            setLoadingAuth(false)
        }
    }

    return{
        accessToken,
        isAuthenticated,
        loading,
        loadingAuth,
        errors,
        userId,
        email,
        login,
        logout,
        refreshAccessToken
    }
}

export default useAuth