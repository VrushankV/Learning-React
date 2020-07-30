import React from 'react'

class Screen extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState(prevState => {
            prevState.isLoggedIn = !prevState.isLoggedIn
            console.log(prevState)
            return prevState
        })
    }
    render(){
        return(
        <button onClick={this.clickHandler}>{this.state.isLoggedIn? "Logout" : "Login"}</button>
        )
    }
}

export default Screen