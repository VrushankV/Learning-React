import React from 'react'

class MyApp extends React.Component {
    constructor(){
      super()
      this.state = {
        isLoggedIn : false,
        count : 0
      }
      this.myFunction = this.myFunction.bind(this)
    }

    myFunction(){
        this.setState(prevState => {
            return(
                {
                    isLoggedIn: false,
                    count : prevState.count+1
                }
            )
        })
    }

    fooBar(){
        console.log("Thanks for Hovering")
    }

    render() {
        return(
            <div>
                <img onMouseEnter={this.fooBar} src="http://www.fillmurray.com/300/200"/>
                <br></br>
                <h1>{this.state.count}</h1>
                <button onClick={this.myFunction}>Change!</button>
                <h1>You are currently logged {this.state.isLoggedIn ? "In" : "Out"}</h1>
                
            </div>
        )
    }
  }

export default MyApp