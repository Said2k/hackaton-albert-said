import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/productContext';

const EditProduct = () => {
     const navigate = useNavigate()
     const {oneProduct, getOneProduct,editOneProduct} = useProducts()

     const [product, setProduct] = useState(oneProduct)
        const {id} = useParams()
     useEffect(()=>{
    setProduct(oneProduct)
     },[oneProduct])
     
     useEffect(()=>{
        getOneProduct(id)
     },[])



     const handleInp = (e)=>{
        let obj ={
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)
     }
   console.log(product);
    return (
        <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <TextField
        fullWidth
        variant="outlined"
        label="Name"
        name="name"
        id="outlined-basic"
        value={product.name || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        name="description"
        id="outlined-basic"
        value={product.description || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Price"
        name="price"
        id="outlined-basic"
        value={product.price || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Picture"
        name="picture"
        id="outlined-basic"
        value={product.picture || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Type"
        name="type"
        id="outlined-basic"
        value={product.type || ""}
        onChange={handleInp}
      />
      <Button
        onClick={() => {
          editOneProduct(id, product);
          navigate(-1);
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        Edit Product
      </Button>
        </Box>
    );
};

export default EditProduct;