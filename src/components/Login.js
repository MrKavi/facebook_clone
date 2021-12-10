import React from "react";
import "./Login.css";
import fb from "../components/images/fb.png";
import fb1 from "../components/images/fb1.gif";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.messege));
  };
  return (
    <div className="login">
      <div className="logo">
        <img src={fb} alt="" />
        <img src={fb1} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sing In With Ur Google Account
      </Button>
    </div>
  );
}

export default Login;
