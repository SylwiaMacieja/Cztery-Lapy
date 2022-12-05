import ReactDOM from "react-dom/client";
import {MenuLogin} from "../../components/LoginMenu/MenuLogin";
import {LoginStep1} from "../../components/LoginStep1/LoginStep1";

import {useState} from "react";



export function SuccessLogin () {

    const [selected, setSelected] = useState("Wybierz schronisko");

    return (
        <div>
            <MenuLogin />
            <LoginStep1 selected={selected} setSelected={setSelected}/>

        </div>
    )}