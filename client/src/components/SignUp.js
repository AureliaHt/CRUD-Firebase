const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup">
                <h3>S'inscrire</h3>
                <form>
                    <input type="text" placeholder="identifiant" required/>
                    <input type="email" placeholder="email" required/>
                    <input type="password" placeholder="mot de passe" required/>
                    <input type="submit" value="Valider l'inscription"/>
                </form>
            </div>
        </div>
    );
};

export default SignUp;