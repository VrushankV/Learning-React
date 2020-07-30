import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MainComponent from './MainComponent'
function MyApp(){
    return(
        <div>
            <Navbar/>
            <MainComponent/>
            <Footer/>
        </div>
    )
} 

export default MyApp;