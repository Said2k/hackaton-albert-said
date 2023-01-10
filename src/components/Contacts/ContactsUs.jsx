import { Box, Grid } from '@mui/material';
import React from 'react';
import  '../Contacts/contacts.css'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { fontWeight } from '@mui/system';

const ContactsUs = () => {
    return (
        <Box sx={{marginBottom: '100px'}}>
            <div className='contact__title'>
            <h1>Фирменные магазины:</h1>
            </div>

            <Grid sx={{padding: '10px',}}>
                <div className='contact__image'>
                    <img 
                    src="https://www.asus.com/images/logo/logo-002.svg" 
                    alt=""
                    width={180}
                    />
                    </div>
                    <p style={{textAlign: 'center', margin: '20px 0 50px 0', fontSize: '20px', fontWeight: 600}}>Москва</p>
                    

                    <Grid className='contact__info' >
                        <Grid sx={{marginRight: '30px'}}>

                    <p 
                    style={{
                        textAlign: 'center',
                        fontSize: '22px',
                        fontWeight: 600
                    }}>
                        ASUS Shop</p>


                    <p>

                          <LaunchOutlinedIcon 
                         sx={{
                        width: '100px'}}/>  
                         <a 
                         style={{textDecoration: 'none'}}
                         href='https://ru.store.asus.com/'> https://ru.store.asus.com/
                         </a> </p>
                    <p >
                        <AlternateEmailOutlinedIcon 
                        sx={{
                            width: '100px'
                            }}/>   
                            <a 
                            style={{textDecoration: 'none'}}
                            href='https://mail.google.com/mail/u/0/#sent?compose=CllgCKCCSPQGPJQmdmBvVPNWvSTpBLVHDzJCBdGFftXwmFqSWjSZRBNHgcmLjpzRXmjgBtmfnNq' > shop_ru@asus.com</a> </p>
                    <p>
                        <LocalPhoneOutlinedIcon  sx={{
                            width: '100px'
                            }}/>
                          +7(800)100-27-87</p>

                    <p style={{marginLeft: '33px'}}> 
                        
                        <img 
                        src="data:image/svg+xml,%3Csvg viewBox='-1 1 20 20' xmlns='http://www.w3.org/2000/svg' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 13.8L6.5 4 10 9.5 13.5 4l3.5 9.8h1V15h-5v-1.2h.5l-1-2.27L10 15l-2.5-3.47-1 2.27H7V15H2v-1.2h1z' fill='%23FF4D4D'%3E%3C/path%3E%3C/svg%3E"
                        width={30}
                         alt="" 
                         style={{marginRight: '33px'}}
                         /> Нижегородская
                         </p>
                         
                    <p> 
                        <PlaceOutlinedIcon  sx={{
                            width: '100px'
                            }}/>Москва, Нижегородская улица, 29-33с2
                    </p>
                    <p>
                        <CalendarMonthOutlinedIcon  sx={{
                            width: '100px'
                            }}/> Пн-пт с 10:00 до 19:00, сб-вс выходной
                    </p>
                    </Grid>
                    <iframe className='contact__map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17971.246032182295!2d37.6796486!3d55.7340787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab54ce49bf81b%3A0xbd51b77a011cceae!2z0KTQuNGA0LzQtdC90L3Ri9C5INC80LDQs9Cw0LfQuNC9IEFTVVMgU2hvcA!5e0!3m2!1sru!2skg!4v1673301996243!5m2!1sru!2skg" ></iframe>
                    </Grid>
            </Grid>
            

        </Box>
    );
};

export default ContactsUs;