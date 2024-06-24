import {auth, provider} from "../../config/firebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";


export const Auth = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider); 
        console.log(result);
        const authInfo = {
            userID : result.user.uid,
            name : result.user.displayName,
            profilePhoto: result.user.photoURL,
            isAuth:true,
        }
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    }
    
    return <div className="login-page">
        <p>Sign in with Google to Continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
}