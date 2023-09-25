import { useState } from "react";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});

    const getApiData = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const getCharacter = async (id) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
            return data
        } catch (error) {
            console.error(error);
        }
    };

    return {
        characters,
        getApiData,
        getCharacter,
        character,
    };
};
