import {useState} from 'react';
import { createContext } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);
    
    const addFavorite = (id) => {
        setFavoriteMealIds(favorites => [...favorites, id]);
    };
    
    const removeFavorite = (id) => {
        setFavoriteMealIds(favorites => favorites.filter(m => m != id));
    };
    
    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
    }
    
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;