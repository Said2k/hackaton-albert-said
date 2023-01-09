import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACTION, JSON_API,getLengthFavorites, CART } from '../helpers/const';

export const productsContext = createContext()

export const useProducts = () =>{
    return  useContext(productsContext)
}
const INIT_STATE = {
    products:[],
    oneProduct:{},
    favorites: JSON.parse(localStorage.getItem('favorites')),
    favoritesLength: getLengthFavorites(),
    }

const reducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case ACTION.GET_PRODUCTS:
            return {
                ...state,
                 products: action.payload};
            case ACTION.GET_ONE_PRODUCT:
            return {
                ...state, 
                oneProduct: action.payload};
                case ACTION.SET_FAVORITES:
                    return {
                      ...state,
                       favorites: action.payload,
                       favoritesLength: state.favoritesLength +1}
                       
                       case 'delete_favorite':
                        return{
                            ...state,
                            
                             favorites: action.payload,
                             favoritesLength: state.favoritesLength -1}
                
        default :
        return state;
    }
}

const ContextProductProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const location = useLocation()
    const navigate = useNavigate()
    

    const getProducts = async ()=>{
        try {
            const {data} = await axios(`${JSON_API}${window.location.search}`)
            let action= {
                type: ACTION.GET_PRODUCTS,
                payload: data,
    
            }
            dispatch(action)
            
        } catch (error) {
            console.log(error);
        }
    }
   


    const deleteProduct = async(id) =>{
        try {
            await axios.delete(`${JSON_API}/${id}`)
            getProducts()
            
        } catch (error) {
            console.log(error);
        }
    }

    const postProduct = async (newProduct) =>{
        try {
            await axios.post(JSON_API,newProduct);
            getProducts() 
            
        } catch (error) {
            console.log(error);
        }
    }
    
    const getOneProduct = async (id) =>{
        try {
            const {data} = await axios(`${JSON_API}/${id}`)
            let action = {
                type: ACTION.GET_ONE_PRODUCT,
                payload: data
            }
            dispatch(action)
            
        } catch (error) {
            console.log(error);
        }
    }

    const editOneProduct = async (id, newObj) =>{
        try {
            const {data} = await axios.patch(`${JSON_API}/${id}`, newObj)

        } catch (error) {
            console.log(error);
        }
    }
const fetchByParams = async(query,value) =>{
    const search = new URLSearchParams(location.search)

    if(value == 'all'){
        search.delete(query)
    }else{
        search.set(query,value)
    }
    const url = `${location.pathname}?${search.toString()}`
    navigate(url)
} 

const getFavorites =() =>{
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({
          products: [],
        })
      );
      favorites = {
        products: [],
      };
    }

    dispatch({
      type: ACTION.SET_FAVORITES,
      payload: favorites,
    });
}

const removeProductInFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    favorites.products = favorites.products.filter((elem) => elem.pick.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // getFavorites()
    dispatch({
      type: 'delete_favorite',
      payload: favorites,
    });
  }

  const addProductsInFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")); 
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    let newProduct = {
      pick: product,
    };

    let productToFind = favorites.products.filter(
      (elem) => elem.pick.id === product.id
    );

    if (productToFind.length == 0) {
      favorites.products.push(newProduct);
    } else {
      favorites.products = favorites.products.filter(
        (elem) => elem.pick.id !== product.id
      );
    }


    localStorage.setItem("favorites", JSON.stringify(favorites));

    dispatch({
     
      type: ACTION.SET_FAVORITES,
      payload: favorites,
    });
  };


    const values = {
        getProducts,
        deleteProduct,
        products: state.products,
        oneProduct: state.oneProduct,
        postProduct,
        getOneProduct,
        editOneProduct,
        fetchByParams,
        removeProductInFavorites,
        addProductsInFavorites,
        getFavorites,
        favorites: state.favorites,
    }


    return(
        <productsContext.Provider value={values}>
            {children}
        </productsContext.Provider>
    )

}
export default ContextProductProvider;