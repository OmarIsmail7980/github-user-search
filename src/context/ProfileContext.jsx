import { createContext, useContext,useState } from "react";

const ProfileContext = createContext({});

export const ProfileContextProvider = ({children})=>{
    const [profile, setProfile] = useState({});
    const [notFound, setNotFound] = useState(false);

    return(
        <ProfileContext.Provider value={{profile,setProfile, notFound, setNotFound}}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = ()=>{
    return useContext(ProfileContext);
}