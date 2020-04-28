import React from 'react'; 
import fondo from '../styles/static/404.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/components/Page404.styl"

const Page404 = () => {
    return(
    <>
        <Header isPage404 />
        <div className="Page404">
            <img src={fondo} alt="fondo"/>           
        </div>
        <Footer isPage404Footer/>
    </>
);
}

export default Page404;