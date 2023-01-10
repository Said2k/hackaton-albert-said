import { Alert, AlertTitle, Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './orders.css'

const Orders = () => {
    const navigate = useNavigate()
    const [alert , setAlert] =useState(0)
    const [orders, setOrders] = useState({
        name: '',
        surname: '',
        card: '',
        phone: '',
        address: '',
    })

    const successAlert = () => {
        if(alert==0){
            setAlert(1)
        }else{
            setAlert(0)
        } 
    }
    return (
        <Box sx={{
        display: 'flex',
         justifyContent: 'center',
         marginTop: '100px',
         }}>
            <Grid 
            className='order__block' 
           >
                {alert==0? (null) : (<Alert severity="success">
   <AlertTitle>Success</AlertTitle>
   Ваша оплата прошла — <strong>успешно</strong>
 </Alert>)}
                <Grid sx={{
                    textAlign: 'center'
                    }}>
                    <h2>Оформить заказ</h2>
                    <Grid sx={{
                        display: 'flex',
                         flexDirection: 'column'
                         }}>
                        <Grid sx={{
                            padding: '20px',
                             display: 'flex'
                             }}>
                                
                    <TextField 
                   id="outlined-basic" 
                   variant="outlined"
                   label="Name*" 
                   value={orders.name}
                    sx={{
                        width: '50%',
                         marginRight: "10px",
                        
                         }}
                         onChange={(e)=>setOrders({
                            ...orders, name: e.target.value
                         })}
                         />

                    <TextField 
                   id="outlined-basic" 
                   value={orders.surname}
                   variant="outlined"
                   label="Surname*" 
                    sx={{width: '50%'}}
                    onChange={(e)=>setOrders({
                        ...orders, surname: e.target.value
                     })}
                    />
                    </Grid>
                    <Grid>
                    <TextField
                    id="outlined-basic"
                    value={orders.card} 
                    variant="outlined"
                    label="Card number*" 
                    type={'number'}
                    sx={{width: '80%'}}
                    onChange={(e)=>setOrders({
                        ...orders, card: e.target.value
                     })}
                    />
                    </Grid>

                    <Grid sx={{
                        padding: '20px',
                         display: 'flex'
                         }}>
                    <TextField
                    id="outlined-basic"                   value={orders.phone} 
                    variant="outlined"
                    label="Phone*" 
                    type={'number'}
                    sx={{
                        width: '50%',
                        marginRight: '10px',
                        }}
                        onChange={(e)=>setOrders({
                            ...orders, phone: e.target.value
                         })}
                        />
                    <TextField
                    id="outlined-basic"                    value={orders.address}
                    variant="outlined"
                    label="Typing your address*" 
                    sx={{width: '50%'}}
                    onChange={(e)=>setOrders({
                        ...orders, address: e.target.value
                     })}
                    />
                    </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px'}}>
                       
                <Button className='order__btn' 
                onClick={()=>{
                    navigate('/products')
                }}
                >Вернуться</Button>
                <Button className='order__btn'
                onClick={()=>{
                    successAlert()
                    setOrders({
                        name: '',
                        surname: '',
                        card: '',
                        phone: '',
                        address: '',
                    })
                }}
                >Оплатить</Button>
               
                </Grid>
            </Grid>
        </Box>
                
    );
};

export default Orders;