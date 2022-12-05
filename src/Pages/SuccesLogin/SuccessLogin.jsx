import ReactDOM from "react-dom/client";
import {MenuLogin} from "../../components/LoginMenu/MenuLogin";

import {useState} from "react";
import {LoginForm} from "../../components/LoginForm/LoginForm";



export function SuccessLogin () {


    return (
        <div>
            <MenuLogin />
            <LoginForm />
        </div>
    )}