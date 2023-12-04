import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState();
    const [loading, setLoading] = useState(true);
      

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)        
    } 

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
        return  signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

const updateUserProfile = (name, photo)=>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            if(currentUser){

                setLoading(false)
            }
        })

        return ()=>{
            return unSubscribe()
        }
    },[])

    const authInfo ={
        createUser,
        signIn,
        googleSignIn,
        logOut,
        user,
        updateUserProfile,
        loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;