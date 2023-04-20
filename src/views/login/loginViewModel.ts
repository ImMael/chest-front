import {useAuth} from "../../components/auth/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const LoginViewModel = () => {

    const { token, setToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        if (token) {
            navigate("/");
        }
    }, [token])

    const login = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        axios.post("http://localhost:3000/auth/login", {email, password}).then(r => {
            sessionStorage.setItem("JWT", r.data.user.access_token);
            setToken(r.data.user.access_token);
        })
        navigate("/");
    }

    return {
        login
    }

}

export default LoginViewModel;
