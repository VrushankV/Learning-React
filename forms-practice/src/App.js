import React from 'react';
import './App.css';

class App extends React.Component{
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
      <div>
        <form>
          <label>
            First Name: 
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text"/><br/>
          </label>
          <label>
            Last Name: 
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text"/><br/>
          </label>
          <label>
            Age: 
          <input name="age" value={this.state.age} onChange={this.handleChange} type="text"/><br/>
          </label>
          <h3>Gender: </h3>
        
          <label> Male
            <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/> 
          </label>

          <br/>
          <label> Female
            <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}/> 
          </label>

          <br/>
          <label>Choose Destination:
            <select name="destination" value={this.state.destination} onChange={this.handleChange}>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </label>

          <br/>
          
          <h3>Dietary Restriction :</h3>
          <label>Vegan: 
            <input type="checkbox" name="isVegan" value={this.state.dietaryRestriction.isVegan} checked={this.state.dietaryRestriction.isVegan} onChange={this.handleChange} />
          </label>
          <br/>
          <label>Vegetarian: 
            <input type="checkbox" name="isVegetarian" value={this.state.dietaryRestriction.isVegetarian} checked={this.state.dietaryRestriction.isVegetarian} onChange={this.handleChange} />
          </label>
          <br/>
          <label>Non-Vegetarian: 
            <input type="checkbox" name="isNonVeg" value={this.state.dietaryRestriction.isNonVeg} checked={this.state.dietaryRestriction.isNonVeg} onChange={this.handleChange} />
          </label>
          <br/>
          <label>Jain-Food: 
            <input type="checkbox" name="isJain" value={this.state.dietaryRestriction.isJain} checked={this.state.dietaryRestriction.isJain} onChange={this.handleChange} />
          </label>

          <br/>
          <button>Submit!</button>

        </form>
        <br/>
        <hr/>
        <h1>Entered Information: </h1>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Location: {this.state.destination}</p>
        <p>Your Gender: {this.state.gender}</p>
        <p>Your Dietary Restriction: <br/>
          Vegan : {this.state.dietaryRestriction.isVegan ? "Yes" : "No"} <br/>
          Vegetarian : {this.state.dietaryRestriction.isVegetarian ? "Yes" : "No"}<br/>
          Non-Vegetarian : {this.state.dietaryRestriction.isNonVeg ? "Yes" : "No"}<br/>
          Jain-Food : {this.state.dietaryRestriction.isJain ? "Yes" : "No"}<br/>
        </p>
      </div>
    )
  }
}

export default App;
