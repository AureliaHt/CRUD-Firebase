import { useRef } from "react";
import {auth} from "../utils/firebase.config";

const SignUp = () => {
  const RegisterEmail = useRef();
  const RegisterPassword = useRef();

  const handleRegister = (e) => {
      e.preventDefault();

      try {
        auth.createUserWithEmailAndPassword(RegisterEmail.current.value, RegisterPassword.current.value)
      } catch (error) {
          console.log(error.message);
      }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={e => handleRegister(e)}>
          <input type="text" placeholder="identifiant" required />
          <input
            type="email"
            placeholder="email"
            required
            ref={RegisterEmail}
          />
          <input
            type="password"
            placeholder="mot de passe"
            required
            ref={RegisterPassword}
          />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
