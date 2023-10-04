import { createContext, useState } from "react";

const PERSON = {
    id: 1,
    name: "Juan",
    lastname: "Perez",
    age: 25,
    city: "Santiago",
    country: "Chile",
    isActive: false,
};

export const AppContext = createContext(PERSON);

const AppContextProvider = ({ children }) => {
    const [person, setperson] = useState(PERSON);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleIsActive = () => {
        setperson({ ...person, isActive: !person.isActive });
    };
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const values = {
        person,
        handleIsActive,
        isDarkMode,
        toggleTheme,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
