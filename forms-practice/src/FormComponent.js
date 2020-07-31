import React from 'react'

class FormComponent extends React.Component{
    constructor(){
        super()
    }

    render(props){
        return(
            <div>
        <form>
          <label>
            First Name: 
          <input name="firstName" value={this.props.firstName} onChange={this.props.handleChange} type="text"/><br/>
          </label>
          <label>
            Last Name: 
          <input name="lastName" value={this.props.lastName} onChange={this.props.handleChange} type="text"/><br/>
          </label>
          <label>
            Age: 
          <input name="age" value={this.props.age} onChange={this.props.handleChange} type="text"/><br/>
          </label>
          <h3>Gender: </h3>
        
          <label> Male
            <input type="radio" name="gender" value="male" checked={this.props.gender==="male"} onChange={this.props.handleChange}/> 
          </label>

          <br/>
          <label> Female
            <input type="radio" name="gender" value="female" checked={this.props.gender==="female"} onChange={this.props.handleChange}/> 
          </label>

          <br/>
          <label>Choose Destination:
            <select name="destination" value={this.props.destination} onChange={this.props.handleChange}>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </label>

          <br/>
          
          <h3>Dietary Restriction :</h3>
          <label>Vegan: 
            <input type="checkbox" name="isVegan" value={this.props.dietaryRestriction.isVegan} checked={this.props.dietaryRestriction.isVegan} onChange={this.props.handleChange} />
          </label>
          <br/>
          <label>Vegetarian: 
            <input type="checkbox" name="isVegetarian" value={this.props.dietaryRestriction.isVegetarian} checked={this.props.dietaryRestriction.isVegetarian} onChange={this.props.handleChange} />
          </label>
          <br/>
          <label>Non-Vegetarian: 
            <input type="checkbox" name="isNonVeg" value={this.props.dietaryRestriction.isNonVeg} checked={this.props.dietaryRestriction.isNonVeg} onChange={this.props.handleChange} />
          </label>
          <br/>
          <label>Jain-Food: 
            <input type="checkbox" name="isJain" value={this.props.dietaryRestriction.isJain} checked={this.props.dietaryRestriction.isJain} onChange={this.props.handleChange} />
          </label>

          <br/>
          <button>Submit!</button>

        </form>
        <br/>
        <hr/>
        <h1>Entered Information: </h1>
        <p>Your Name: {this.props.firstName} {this.props.lastName}</p>
        <p>Your Age: {this.props.age}</p>
        <p>Your Location: {this.props.destination}</p>
        <p>Your Gender: {this.props.gender}</p>
        <p>Your Dietary Restriction: <br/>
          Vegan : {this.props.dietaryRestriction.isVegan ? "Yes" : "No"} <br/>
          Vegetarian : {this.props.dietaryRestriction.isVegetarian ? "Yes" : "No"}<br/>
          Non-Vegetarian : {this.props.dietaryRestriction.isNonVeg ? "Yes" : "No"}<br/>
          Jain-Food : {this.props.dietaryRestriction.isJain ? "Yes" : "No"}<br/>
        </p>
      </div>
        )
    }
}

export default FormComponent