import React , {useState} from "react";

import { useDispatch } from "react-redux";
import { createUser } from "../actions/signin";


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const signin = (e) => {
        e.preventDefault();
        console.log("creating user");
    }

    return(
      
        <React.Fragment>
            <form onSubmit={signin}>
            <p>Create an account.</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Create account" />
            </form>
        </React.Fragment>
       
    )

}

export default Signin;