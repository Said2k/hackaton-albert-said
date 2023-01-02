import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ACTION, JSON_API } from '../helpers/const';

export const productsContext = createContext()

export const useProducts = () =>{
  return  useContext(productsContext)
}
const INIT_STATE = {
    products:[],
    oneProduct:{},
}
const reducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case ACTION.GET_PRODUCTS:
            return {...state, products: action.payload};
        case ACTION.GET_ONE_PRODUCT:
            return {...state, oneProduct: action.payload};    
        default :
        return state;
    }
}

const ContextProductProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    const getProducts = async ()=>{
        try {
            const {data} = await axios(JSON_API)
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

    const values = {
        getProducts,
        deleteProduct,
        products: state.products,
        oneProduct: state.oneProduct,
        postProduct,
        getOneProduct,
        editOneProduct,
    }

    return(
        <productsContext.Provider value={values}>
            {children}
        </productsContext.Provider>
    )

}
export default ContextProductProvider;