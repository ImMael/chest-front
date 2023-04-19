import {useEffect, useState} from "react";
import {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";

export const HomeViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {user} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if(!user) {
            navigate('/login')
        }
    }, [user])

    const test = () => {
        console.log('test')
    }

    return {
        test,
        isMenuOpen,
        setIsMenuOpen
    }
}

export default HomeViewModel
