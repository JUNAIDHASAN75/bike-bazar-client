import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const createUser =(email, password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    };
    const LogOut = ()=>{
        setIsLoading(false)
        return signOut(auth)
    };
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
            console.log('SHOW THE USER',currentUser)
        });
        return ()=>{
            return unsubscribe()
        } 
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        LogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;