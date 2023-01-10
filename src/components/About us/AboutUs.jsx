import { Box, Grid } from '@mui/material';
import React from 'react';
import '../About us/aboutUs.css'
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <>
        <div 
        className='about__back'
       >

        <Grid className='title'>
            <h1>Здесь мы расскажем о ROG</h1>

        <ul className='title__ul'>
            <li>
            Нужна поддержка, пока вы работаете, учитесь и отдыхаете дома? ASUS здесь для вас.
Пожалуйста, обратитесь к <a href='*'> поддержке</a>, и мы с вами свяжемся
            </li>
        </ul>
        </Grid>
            
        </div>

            <h2 className='title__product' style={{textAlign: 'center', marginTop: '40px'}}>Наши продукты</h2>
        <Grid className='product__item'>
             <div className='about__img'>
                <img src="https://dlcdnrog.asus.com/support/images/website/global/ProductLevel2/1065.png"  alt="" />
                <p>Ноутбуки</p>
             </div>
             <div className='about__img'>
             <img src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002207317PI11/image.jpg" alt="" />
                <p>Клавиатуры</p>
             </div>
             <div className='about__img'>
             <img src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="" />                <p>Мониторы</p>
             </div>
             <div className='about__img'>
             <img src="https://dlcdnwebimgs.asus.com/gain/A8895516-3C00-4DA2-97CA-04F258098672/w240/h175" alt="" />                <p>Телефоны</p>
             </div>
             <div className='about__img'>
             <img src="https://m.media-amazon.com/images/I/816N6Qr4wOL.jpg" alt="" />                <p>Мышки</p>
             </div>
        </Grid>

        <Grid sx={{marginBottom: '100px'}}>
            <h3 style={{textAlign: 'center'}}>История</h3>
            <p style={{padding: '20px', textAlign: 'center'}}>Компания ASUS была основана в 1989 году. Ее родоначальниками стали блестящие инженеры, сумевшие спроектировать первую материнскую плату, не имея доступа к процессору. В течение нескольких лет ASUS была динамично развивающейся компанией — появлялись новые продукты, росли объемы производства, пропорционально увеличивался штат сотрудников. Было разработано немало технологий, многие из которых впоследствии стали стандартом де-факто в IT-индустрии. Довольно скоро под руководством харизматичного руководителя компании Джони Ши, который является ее президентом и по сей день, ASUS, благодаря креативному подходу к проблемам рынка, стала мировым лидером по качеству и количеству произведенных плат. Стоит отметить, что основа любой системы – это в первую очередь качественные материнские платы, следовательно, и освоение рынка мобильных компьютеров далось компании с легкостью.</p>
           <h3 style={{textAlign: 'center'}}> Миссия бренда ROG</h3>
            <p style={{padding: '20px', textAlign: 'center'}}>
Сегодня линейка Republic of Gamers включает в себя компьютерное железо – материнские платы, видеокарты, звуковые карты, игровые мониторы, высокопроизводительные ноутбуки, десктопы, а также геймерскую периферию – клавиатуры, мышки, гарнитуры. Продукты ASUS ROG обеспечивают непревзойденную производительность для самых требовательных пользователей. Все это позволило создать вокруг бренда целую армию фанатов по всему миру.</p>

<h3 style={{textAlign: 'center'}}>Эволюция бренда ROG</h3>
<p style={{padding: '20px', textAlign: 'center'}}>
Бренд Republic of Gamers был создан в 2006 году, и с этого времени при создании продуктов инженеры ASUS начали работать в тесном сотрудничестве с ведущими мировыми геймерами и оверклокерами, принимая весьма нестандартные на первый взгляд решения. В отрасли существует фундаментальное правило: для того, чтобы вывести на рынок успешную линейку новых продуктов, дизайнеры и инженеры должны иметь полное представление о своих потребителях.
В конце 2004 года увидела свет материнская плата ASUS A8N32-SLI Deluxe, которая по сути явилась прототипом для будущих продуктов ROG. Это была первая материнская плата с поддержкой установки двух видеокарт, работающих в связке NVIDIA SLI. Данное решение при использовании двух относительно недорогих моделей GeForce 6600 GT превзошло по быстродействию в играх и топовую на тот момент видеокарту GeForce 6800 Ultra.

Кроме того, высокий разгонный потенциал ASUS A8N32-SLI Deluxe сделал эту материнскую плату лучшим выбором для оверклокеров и энтузиастов для текущего поколения процессоров, что было подтверждено многочисленными рекордами в игровых тестах и бенчмарках.</p>
        </Grid>
             <video style={{marginBottom: '-10px'}} loop muted autoPlay controls = ''    width={'100%'} src='https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/video/fhd-video.mp4'></video>




             </>
    );
};

export default AboutUs;