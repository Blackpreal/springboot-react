//import { Route, Router, } from "react-router";
import "../css/Login_Signup.css"
import { useNavigate } from "react-router";


function Login_Signup() {
    const navigate = useNavigate()
    
    function loginClick(){
        navigate('login')
    }
    function registerClick(){
        navigate('Register')
    }
    return ( 
        <div className="h-login">
            <button className="b-login" onClick={loginClick}>Login</button>
            <button className="b-signup" onClick={registerClick}>Sign Up</button>
        </div>


     );
}

export default Login_Signup;