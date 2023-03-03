import React from "react";
import { useNavigate } from "react-router-dom";


const Navigation = () => {
    const navigate = useNavigate(); 
    const signOut = () => {
        navigate("../signin", { replace: true });
    }

    if (isSignedin) {
             return (
        <nav style={{ display: 'flex', justifyContent: "flex-end" }}>
            <p className='f3 link dim black underline pa3 pointer' onClick={signOut}> Sign Out </p>
        </nav >
             )
        } else {
        return (
        <div>
            <div>
                <nav style={{ display: 'flex', justifyContent: "flex-end" }}>
                <a className='f3 link dim black underline pa3 pointer' href='signin'> Sign In </a>
                </nav>
            </div>
            <div>
                <nav style={{ display: 'flex', justifyContent: "flex-end" }}>
                <a href='register' className='f3 link dim black underline pa3 pointer'> Register </a>
                </nav>
            </div>
        </div>)
    }

}

export default Navigation;