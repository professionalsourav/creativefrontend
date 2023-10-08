import { createContext, useState, useContext, useEffect } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../../firebase";


// create context
const AuthContext = createContext();
// Provider Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
 

  const value = {
    currentUser,
    setCurrentUser,
    
    
  }

  // set currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}