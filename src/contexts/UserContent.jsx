import React, { createContext, useState } from 'react'

const UserContent = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        isLoggedIn: getLoginState(),
    })

    const storeInLocalStorage = (isLoggedIn) =>{
        localStorage.setItem('loggedIn', isLoggedIn)
    }

    function getLoginState() {
        return JSON.parse(localStorage.getItem('loggedIn'))
    }
    const logout = () => {
        setUser((prev) => ({
            ...prev,
            isLoggedIn: false
        }));
        storeInLocalStorage(false)
    }

    const login = () => {
        setUser((prev) => ({
            ...prev,
            isLoggedIn: true
        }));
        storeInLocalStorage(true)
    }

  return (
    <UserContent.Provider value = {{user, login, logout}}>
        {children}
    </UserContent.Provider>
  )
}

export default UserContent