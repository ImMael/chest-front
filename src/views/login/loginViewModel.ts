import {useAuth} from "../../components/auth/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const LoginViewModel = () => {

    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (user) {
            navigate("/");
        }
    }, [user])

    const login = () => {
        const user = {
            id: 1,
            name: "John Doe",
            email: "john@doe.fr",
            password: "john",
            createdAt: new Date(),
            updatedAt: new Date(),
            friends: []
        };
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        navigate("/");
    }

    return {
        login
    }

}

export default LoginViewModel;
