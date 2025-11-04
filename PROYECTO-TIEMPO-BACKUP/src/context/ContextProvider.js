import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const loadCategorieProgress = (index, categorie) => {
        return;
    };

    return (
        <Context.Provider value={{
            loadCategorieProgress
        }}>
            {children}
        </Context.Provider>
    );
}
