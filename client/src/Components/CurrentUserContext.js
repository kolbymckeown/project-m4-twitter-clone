import React from "react";
import styled from "styled-components";

export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
    const [profile, setProfile] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/me/profile")
        .then((res) => {
            return res.json();
        })
        .then((newProfile) => {
            setProfile(newProfile.profile);
        });
    }, []);


    return (
        <CurrentUserContext.Provider value={{ profile }}>
        {children}
        </CurrentUserContext.Provider>

        // fetch user data
    );
    };

export default CurrentUserProvider;
