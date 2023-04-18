import React, {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../components/auth/AuthContext";
export const HomeView: FC = () => {
    const {user} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if(!user) {
            navigate('/login')
        }
    }, [user])
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default HomeView;
