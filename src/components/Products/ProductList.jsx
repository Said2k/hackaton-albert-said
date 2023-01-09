import { CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Pagination, Paper, RadioGroup, TextField, Radio, Slider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/productContext';
import ProductCard from './ProductCard';
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from 'react-router-dom';


const ProductList = () => {
    const {fetchByParams} = useProducts()
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')

    const [rangePrice,setRangePrice] = useState(40)

    // const handleRange =(e) =>{
    //     setRangePrice(e.target.value)
    // }

    // console.log(rangePrice)


    const {getProducts, products} = useProducts()
    const [page, setPage] = useState(1)

    const productsPerPage = 3

    const count = Math.ceil(products.length / productsPerPage)

    const handleChange = (e,p) =>{
        setPage(p)
    }
    // console.log(products);

    const paramsPage = () =>{
        const begin = (page-1) * productsPerPage
        const end = begin + productsPerPage
        return products.slice(begin,end);
    }

    useEffect(()=>{
        setSearchParams({
            q: searchProduct,
        })
        getProducts()
    },[searchProduct])

    useEffect(()=>{
        getProducts()
    },[searchParams])
    // console.log(products);
    return (
       <Grid item  sx={{ width: '100%' , alignItems: 'center', display: "flex", flexWrap: "wrap", flexDirection: 'column' }}>
            <TextField 
                fullWidth
                id='input'
                placeholder='Search'
                sx={{
                    width: '40%',
                    marginBottom: '30px'   
                }}
                // label= "Search" 
                value={searchProduct}
                onChange={(e)=>{
                    setSearchProduct(e.target.value)
                }}
                variant='outlined'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon  sx={{borderRight: '1px solid black', paddingRight: '18px',color: '#2573ef', width: '50px'}}/>
                        </InputAdornment>
                    )
                }}
            />

                
            <FormControl sx={{
                 display: 'flex',
                padding: '18px',
                   height: '150px',
                boxShadow: '0px 0px 4px 0px gray',
                borderRadius: '20px'
                   }}>
                <Grid height={'50%'} >

                <FormLabel sx={{display:'flex',justifyContent: 'center',fontWeight: 600, color: 'black'}}>Type:</FormLabel>
                <RadioGroup sx={{display: 'flex', flexDirection: 'row'}} onChange={(e)=>fetchByParams('type', e.target.value)}>

                    <FormControlLabel value={'all'} control={<Radio/>} label={'All'}/>
                    <FormControlLabel value={'PC'} control={<Radio/>} label={'PC'}/>
                    <FormControlLabel value={'Keybord'} control={<Radio/>} label={'Keybords'}/>
                    <FormControlLabel value={'Monitor'} control={<Radio/>} label={"Monitors"}/>
                    <FormControlLabel value={'Phone'} control={<Radio/>} label={"Phones"}/>
                    <FormControlLabel value={'Mouse'} control={<Radio/>} label={"Mices"}/>
                    
                </RadioGroup>
                <Grid sx={
                    {display: 'flex',
                     justifyContent: 'center'
                     }}>
                <FormControl sx={{
                    marginBottom: '100px'
                    }}>
            <FormLabel sx={{
                display:'flex',
                 justifyContent: 'center',
                 fontWeight: 600,
                 color: 'black',
                 marginTop: '10px'
                 }}>Price:</FormLabel>
                <Slider 
                defaultValue={100}
                 aria-label="Default" valueLabelDisplay="auto" 
                onChange={(e)=>{
                    setRangePrice(e.target.value)
                    fetchByParams('price', e.target.value)}
                }
                value={rangePrice}
                max={3000}
                min={50}
                step={10}

                sx={{width: '250px', height: '7px', color: 'black'}}/>
               
            </FormControl>
                </Grid>
           
            </Grid>
            </FormControl>
        
        {/* </Paper> */}
       



        <Box sx={{
            width: '100%',
          display: "flex",
          justifyContent: 'space-around',
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
          marginTop: '50px'
        }}>
            {products.length>0 ? (paramsPage().map((item)=>{
               return  <ProductCard item={item} key={item.id}/>
               
            })) : (<CircularProgress color='inherit' />

            )}
        </Box>
        <Pagination  
        sx= {{m:3}}
        count ={count}
        page={page}
        onChange={handleChange}
        shape="rounded"

        />
       </Grid>
    );
};

export default ProductList;