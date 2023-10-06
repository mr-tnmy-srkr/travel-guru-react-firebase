import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Children, createContext } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

//googleProvider
const GoogleProvider = new GoogleAuthProvider();
//facebookProvider
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  //google signIn
  const googleSignIn = () => {
   return signInWithPopup(auth, GoogleProvider);
  };
//facebook logIn

const facebookSignIn = () => {
  return signInWithPopup(auth, facebookProvider)

}


  const authInfo = {
    googleSignIn,facebookSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
