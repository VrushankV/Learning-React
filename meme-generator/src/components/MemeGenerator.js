import React from 'react'

class MemeGenerator extends React.Component{

    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {this.setState(prevState => {
                prevState.allMemeImages = response.data.memes
                console.log(prevState)
                return prevState
            })})
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    clickHandler(event){
        event.preventDefault()
        this.setState(prevState =>{
            prevState.randomImage = prevState.allMemeImages[Math.floor(Math.random() * prevState.allMemeImages.length)].url
            return prevState
        })
    }
    render(){
        return(
            <div>
                <h1>Meme Generator Section</h1>
                <form onSubmit={this.clickHandler}>
                    <label>Top Text:
                        <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Bottom Text:
                        <input type="text" name="bottomText" value={this.state.bottomText}  onChange={this.handleChange}/>
                    </label>
        
                    <button >Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top-text">{this.state.topText}</h2>
                    <h2 className="bottom-text">{this.state.bottomText}</h2>
                </div>
            </div>
     
        )
    }
}

export default MemeGenerator