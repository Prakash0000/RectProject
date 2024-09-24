import React, { useState } from 'react';
import LoginRegister from '../../components/login-register';
const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleOnAction = (flag) =>{ 
        console.log(flag)
        setIsLogin(flag) 
    }

    return (
       <LoginRegister isLogin = {isLogin} onAction={handleOnAction}/>
    );
};

export default Login;