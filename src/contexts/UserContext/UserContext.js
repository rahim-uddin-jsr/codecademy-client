import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(auth)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})

    const createAccountWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAuthProvider = new GoogleAuthProvider()
    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (info) => {
        return updateProfile(auth.currentUser, info)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unsubscribe;
    }, [])

    const authInfo = {
        createAccountWithEmailPass,
        logInWithGoogle,
        logInWithGithub,
        loginWithEmailPass,
        updateUserProfile,
        logOut,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;