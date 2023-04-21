import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ResetPasswordViewModel = () => {

    const { email } = useParams();
    const navigate = useNavigate();

    const handleResetPassword = (e: any) => {
        e.preventDefault();
        const dataNewPassword = e.target[0].value;
        const dataConfirmPassword = e.target[1].value;
        if (dataNewPassword === dataConfirmPassword) {
            axios.put("http://localhost:3000/users/reset-password", {
                cryptEmail: email,
                password: dataNewPassword
            }).then((res) => {
                console.log(res.data);
                navigate("/login");
            });
        } else {
            alert("Les mots de passe ne correspondent pas");
        }
    }




    return {
        handleResetPassword,
    }
};

export default ResetPasswordViewModel;
