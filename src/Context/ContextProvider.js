import React, { createContext, useState } from "react"

const UserContext = createContext();

function UserContextProvider(props) {
    const [userState, setUserState] = useState({});
    // const handleUserChange  = () => setUserState('hello');
    return(
        <UserContext.Provider value={{userState, setUserState}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider



