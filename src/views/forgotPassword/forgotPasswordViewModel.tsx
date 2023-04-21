import {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ForgotPasswordViewModel = () => {

    const { token, setToken } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token])

    const handleForgotPassword = (e: any) => {
        e.preventDefault();
        const dataEmail = e.target[0].value
        axios.post("http://localhost:3000/users/forgot-password", {
            email: dataEmail
        }).then((res) => {
            console.log(res.data);
            setMessage("Un email vous a été envoyé pour réinitialiser votre mot de passe");
        });
    }

    return {
        handleForgotPassword,
        message,
    }
};

export default ForgotPasswordViewModel;
