import React, {useEffect, useState} from "react";
import {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {Friend} from "../../domain/user/friend.domain";

export const HomeViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openModal, setOpenModal] = React.useState(false);
    const {user} = useAuth()
    const navigate = useNavigate();

    const friendRequests: Friend[] = [{id: 1, username: 'walidhaddoury'}];
    const friends: Friend[] = [{id: 2, username: 'Nohan75'}];

    useEffect(() => {
        console.log(user)
        if(!user) {
            navigate('/login')
        }
    }, [user])
    return {
        isMenuOpen,
        setIsMenuOpen,
        friendRequests,
        friends,
        openModal,
        setOpenModal
    }
}

export default HomeViewModel
