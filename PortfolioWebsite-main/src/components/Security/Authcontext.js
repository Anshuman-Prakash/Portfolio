import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuth =() => useContext(AuthContext)

export default function AuthProvider({children}) {
    const[mode, setMode] = useState(false);

    function toogle() {
        setMode(!mode)
    }

    return (
        <AuthContext.Provider value={{mode, toogle}}>
            {children}
        </AuthContext.Provider>
    )
}