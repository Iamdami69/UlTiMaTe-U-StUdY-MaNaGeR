//@ts-check
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../../Config/Firebase/Firebase";

export const AuthContext = createContext({ user: null, authIsReady: null });

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(true);
  const [authIsReady, setAuthIsReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      // @ts-ignore
      setUser(res);
      setAuthIsReady(true);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, authIsReady }}>
      {children}
    </AuthContext.Provider>
  );
}
