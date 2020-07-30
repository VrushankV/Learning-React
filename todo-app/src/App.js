import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import todoData from './data/todoData'

// function App() {
//   const props= todoData.map(item => <TodoItem key={item.id} content={item}/>)
//   return (

//     <div className="App">
      
//       {props}
      
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todosData : todoData
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(id){
    this.setState(prevState =>{
      const updatedTodos = prevState.todosData.map(item => {
        if(item.id === id){
          item.completed = !item.completed
        }
        return item
      })
      return({
        todosData : updatedTodos
      })
        }
      )
    }
  
  
  render(){
    const props = (this.state.todosData).map(item => <TodoItem key={item.id} content={item} changeHandler={this.changeHandler}/>)
    return (

    <div className="App">
      
      {props}
      
    </div>
  )
  }
}
export default App;
