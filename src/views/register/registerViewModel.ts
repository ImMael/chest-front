import {useNavigate} from "react-router-dom";
import axios from "axios";

export const registerViewModel = () => {
    const navigate = useNavigate();

    const register = (e: any) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        axios.post("http://localhost:3000/users/register", {username, email, password}).then(r => {
            console.log(r);
            navigate("/login");
        });
    }

    return {
        register
    }
}

export default registerViewModel;
