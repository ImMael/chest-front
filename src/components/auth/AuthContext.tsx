import React, {FC, PropsWithChildren, useEffect} from "react";
import {User} from "../../domain/user/user.domain";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
const AuthContext = React.createContext<{
    token: string | null
    setToken: (token: string | null) => void
}>({
    token: null,
    setToken: () => {}
})

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [token, setToken] = React.useState<string | null>(null)

    const sessionToken: string = sessionStorage.getItem('JWT') || '';

    useEffect(() => {
        if (sessionToken) {
            setToken(sessionToken)
        }
    }, [sessionToken])

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => React.useContext(AuthContext)

export {
    AuthContext,
    AuthProvider,
    useAuth
}
