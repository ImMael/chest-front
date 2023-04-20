import {useEffect, useState} from "react";
import {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {Friend} from "../../domain/user/friend.domain";
import jwtDecode from "jwt-decode";

export const HomeViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {token, setToken} = useAuth();
    const navigate = useNavigate();
    const [decodedToken, setDecodedToken] = useState<any>({});
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    useEffect(() => {
        console.log(token)
        if(!token) {
            navigate('/login')
        } else {
            setDecodedToken(jwtDecode(token));
        }
    }, [token])

    const friendRequests: Friend[] = [{id: 1, username: decodedToken.sub}];
    const friends: Friend[] = [{id: 2, username: 'Nohan75'}];

    const test = () => {
        console.log('test')
    }

    const openLogoutModal = () => {
        setIsLogoutModalOpen(true)
    }

    const handleLogout = () => {
        sessionStorage.removeItem('JWT');
        setToken('');
        setIsLogoutModalOpen(false)
        navigate('/login');
    }

    return {
        test,
        openLogoutModal,
        handleLogout,
        isMenuOpen,
        setIsMenuOpen,
        friendRequests,
        friends,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
    }
}

export default HomeViewModel
