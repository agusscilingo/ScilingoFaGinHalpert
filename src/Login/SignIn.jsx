import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";

import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const [setValue] = useState("");
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    });
    return <div> {<button onClick={handleClick}>INGRESAR CON GOOGLE</button>};
    </div>
};

export default SignIn;
