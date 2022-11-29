import React from "react";

export function LoginStep3 () {
    return (
        <div>
           <form className="LoginStep3">
               <h1 className="LoginStep3__title">3. Zamów kuriera wypełniając poniższe dane</h1>
               <input className="LoginStep3__input" type="text" name="street" placeholder="ulica, numer domu, numer mieszkania"/>
               <input className="LoginStep3__input" type="text" name="postcode" placeholder="kod pocztowy xx-xxx"/>
               <input className="LoginStep3__input" type="text" name="city" placeholder="miasto"/>
               <input className="LoginStep3__input" type="text" name="data" placeholder="data odbioru przesyłki"/>
           </form>

        </div>
    )


}
