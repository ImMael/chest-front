import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../components/auth/AuthContext";
import {User} from "../../../domain/user/user.domain";
import {useEffect, useState} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const lobbyViewModel = () => {
    const [user, setUser] = useState<User | null>(null);
    const {token} = useAuth();

    const getUserData = async () => {
        const decodedToken: User = jwtDecode(token || '');
        const email = decodedToken.email;
        const data = await axios.get(`http://localhost:3000/users/me/${email}`)
        return data.data;
    }

    useEffect(() => {
        getUserData().then((data) => {
            setUser(data);
        });
    }, [])

    const { search } = useLocation()
    const navigate = useNavigate()
    const urlParams = new URLSearchParams(search)
    const isPublic = JSON.parse(urlParams.get('p') as string)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    const returnHome = () => {
        navigate('/')
    }

    const users: User[] = []
    if (user instanceof User) {
        users.push(user)
    }

    return {
        isPublic,
        returnHome,
        users
    }
}
