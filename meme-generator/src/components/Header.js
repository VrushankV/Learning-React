import React from 'react'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <header>
                <img  
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png"
                    alt="Problem?"
                    height="100px"
                />
                <p>Meme Generator</p>
            </header>
        )
        
    }
}
export default Header