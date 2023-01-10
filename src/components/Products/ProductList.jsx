import { CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Pagination, Paper, RadioGroup, TextField, Radio, Slider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/productContext';
import ProductCard from './ProductCard';
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from 'react-router-dom';
import '../Products/ProductList.css'


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
            sx={{marginBottom: '30px'}}
            className='product__input'
                fullWidth
                id='input'
                placeholder='Search'
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

                
            <FormControl className='product__filter' sx={{
                 
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
                        <div className='product__range'>
            <FormLabel  sx={{
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
                max={1800}
                min={50}
                step={10}

                sx={{width: '250px', height: '7px', color: 'black'}}/>

                </div>
               
            </FormControl>
                </Grid>
           
            </Grid>
            </FormControl>    

            <h1 className='product__h1'>Выберите продукт</h1>   

        <Grid className='product__list'>
            {products?.length>0 ? (paramsPage().map((item)=>{
               return  <ProductCard item={item} key={item.id}/>
               
            })) : (<CircularProgress color='inherit' />

            )}
            </Grid>

        <Pagination 
        className='product__pagginate' 
        sx= {{m:3}}
        count ={count}
        page={page}
        onChange={handleChange}
        shape="rounded"

        />

            <div className='block__side' >
                <div style={{ marginRight: '50px'}} className='block__info'>
                <h3>Дисплей ROG Nebula</h3>
            <p>БЫСТРЫЙ, ЯРКИЙ, КРАСОЧНЫЙ ,изумительные цвета, высокая контрастность, плавность отображения динамичного контента – все это предлагают игровые ноутбуки ASUS с передовыми дисплеями. Вы сможете увидеть все так, как задумано авторами, и реагировать на происходящее в игре на шаг впереди оппонентов.</p>
                </div>
                <div className='block__img'>
                    <img  width={'100%'} src="https://dlcdnrog.asus.com/rog/media/1662554060763.webp" alt="" />
                </div>
            </div>

            <div className='block__side'>
            <div style={{ marginRight: '50px'}}  className='block__img'>
                    <img  width={'100%'} src="https://dlcdnrog.asus.com/rog/media/1647514304141.webp" alt="" />
                </div>
                
                <div className='block__info'>
                <h3>Rog intelligent cooling</h3>
            <p>В устройствах серии ROG применяются передовые технологии охлаждения, как аппаратные, так и программные, которые оптимизируются под конкретное сочетание компонентов и конструктивные особенности каждой модели. Инновационные вентиляторы, термоинтерфейс из жидкого металла и интеллектуальные алгоритмы гарантируют защиту от перегрева под любыми нагрузками и в игровых, и в профессиональных приложениях.</p>
                </div>
                
            </div>
        
       </Grid>
    );
};

export default ProductList;