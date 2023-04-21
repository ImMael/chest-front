import React, {useEffect, useState} from "react";
import {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {Friend} from "../../domain/user/friend.domain";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {User} from "../../domain/user/user.domain";

export const HomeViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [friendReqInput, setFriendReqInput] = useState<string>("");
    const [friendRequests, setFriendRequests] = useState([]);
    const [friends, setFriends] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const {token, setToken} = useAuth();
    const navigate = useNavigate();
    const [decodedToken, setDecodedToken] = useState<any>({});
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [errors, setErrors] = useState<any>([]);


    const getUserData = async () => {
        const email = decodedToken.email;
        const user = await axios.get(`http://localhost:3000/users/me/${email}`)
        return user.data;
    }

   useEffect(() => {
       if(!decodedToken.email) return;
       getUserData().then((data) => {
           console.log(data)
           setFriendRequests(data.friendRequests || []);
           setFriends(data.friends || []);
       });
    }, [decodedToken])

    useEffect(() => {
        if(errors.friendReqError) {
            setTimeout(() => {
                setErrors({friendReqError: ""})
            }, 3000)
        }
    }, [errors])

       const sendFriendRequest = async (friendEmail: string) => {
           const user = await getUserData();
           await axios.post(`http://localhost:3000/users/friend-request`, {
               me: user,
               email: friendEmail,
           }).catch((err) => {
                setErrors({friendReqError: err.response.data.message})
           })
       }

    const createLobby = (isPublic: boolean) => {
        navigate('/lobby?p=' + isPublic)
    }

    useEffect(() => {
        console.log(token)
        if(!token) {
            navigate('/login')
        } else {
            setDecodedToken(jwtDecode(token));
        }
    }, [token])

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
        openModal,
        setOpenModal,
        createLobby,
        sendFriendRequest,
        friendReqInput,
        setFriendReqInput,
        errors,
    }
}

export default HomeViewModel
