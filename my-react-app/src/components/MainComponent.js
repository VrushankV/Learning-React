import React from 'react';

function MainComponent(){
    const firstName = "Vrushank"
    const lastName = "V"
    const style = 
    {color:"orange",
     backgroundColor: "red"
    }
    return(
    <h3 style={style}>Hi {`${firstName}  ${lastName}`}</h3> 
    )
} 

export default MainComponent;
