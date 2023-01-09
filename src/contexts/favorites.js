import React, { createContext, useContext, useReducer, useState } from "react";
import { useProducts } from "./productContext";



const favoritesContext = createContext()

export const useFavorites = () =>{
    return useContext(favoritesContext)
}

const INIT_STATE = {
   favorites: {
        data:[],
        dataLength: 0
    }

}

function reducer(state=INIT_STATE, action){
    switch(action.type){
        case 'set_favorites':
            return {...state, favorites:{data:{...state.favorites.data, state}}}
    }
}

const FavoriteContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)




    const addProductsInFavorites = (id) =>{
        dispatch({
            type: 'set_favorites',
            payload: id
        })
    }
//     const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favorites") || "[]"))

//     const isFavorited = storageItem.includes(id)
  
//     const handleToggleFavourite = (id) => {
//       if (!isFavorited) {
  
//         const newStorageItem = [...storageItem, id]
//         setStorageItem(newStorageItem);
//         localStorage.setItem("favorites", JSON.stringify(newStorageItem))
  
//       } else {
  
//         const newStorageItem = storageItem.filter((savedId) => savedId !== id)
//         setStorageItem(newStorageItem);
//         localStorage.setItem("favorites", JSON.stringify(newStorageItem))
  
//       }
  
//     }


  let values = {
    addProductsInFavorites
  }

  return <favoritesContext.Provider value={values}>{children}</favoritesContext.Provider>
}

export default FavoriteContextProvider