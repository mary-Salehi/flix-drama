import { useTheme } from "../../contexts/ThemeContext.";
import { Link, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

function AuthContainer() {
  const location = useLocation();
  const isSignUp = location.pathname.endsWith("/signUp");

  return(
    <div>
      {isSignUp ? <SignUp/> : <Login/>}
    </div>
  )
}

export default AuthContainer;
