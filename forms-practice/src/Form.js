import React from 'react';
import './App.css';
import FormComponent from './FormComponent'

class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      destination : "",
      dietaryRestriction : {
        isVegan: false,
        isVegetarian : false,
        isNonVeg : false,
        isJain : false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState(prevState => {
       return {
         dietaryRestriction : {
           ...prevState.dietaryRestriction,
           [name] : checked
         }
       }
    }) : 
    this.setState({
      [name]:value
    })
  }
  render(){
    
    return(
      <FormComponent handleChange={this.handleChange} {...this.state}/>
    )
  }
}

export default Form;
