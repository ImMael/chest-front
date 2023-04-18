import React, {FC, PropsWithChildren, useEffect} from "react";
import {User} from "../../domain/user/user.domain";
import {useNavigate} from "react-router-dom";
const AuthContext = React.createContext<{
    user: User | null
    setUser: (user: User | null) => void
}>({
    user: null,
    setUser: () => {}
})

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = React.useState<User | null>(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
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
