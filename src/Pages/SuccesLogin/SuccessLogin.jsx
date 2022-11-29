import ReactDOM from "react-dom/client";
import {MenuLogin} from "../../components/LoginMenu/MenuLogin";
import {LoginStep1} from "../../components/LoginStep1/LoginStep1";
import {LoginStep2} from "../../components/LoginStep2/LoginStep2";
import {useState} from "react";
import {LoginStep3} from "../../components/LoginStep3/LoginStep3";


export function SuccessLogin () {

    const [selected, setSelected] = useState("Wybierz schronisko");

    return (
        <div>
            <MenuLogin />
            <LoginStep1/>
            <LoginStep2 selected={selected} setSelected={setSelected}/>
            <LoginStep3 />
        </div>
    )}