import {useState} from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true);

    return (
        <div className="connect-modal">
            <div className="header-btn">
                <button 
                    style={{background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83"}}
                    onClick={() => setSignUp(true)}
                >S'inscrire</button>
                <button
                    style={{background: signUp ? "rgb(83,83,83" : "rgb(28,28,28)"}}
                    onClick={() => setSignUp(false)}
                >Se connecter</button>
            </div>
            {signUp ? <SignUp/> : <LogIn/>}
        </div>
    );
};

export default ConnectModal;