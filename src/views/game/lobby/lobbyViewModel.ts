import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../components/auth/AuthContext";
import {User} from "../../../domain/user/user.domain";
import {useEffect} from "react";

export const lobbyViewModel = () => {

    const { user } = useAuth();

    const { search } = useLocation()
    const navigate = useNavigate()
    const urlParams = new URLSearchParams(search)
    const isPublic = JSON.parse(urlParams.get('p') as string)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    const returnHome = () => {
        navigate('/')
    }

    const users: User[] = []
    users.push(user as User)

    return {
        isPublic,
        returnHome,
        users
    }
}
