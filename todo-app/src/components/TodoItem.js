import React from 'react'
import todoData from '../data/todoData'



function TodoItem(props){
    
    const styling = {
        fontStyle : "italic",
        textDecoration : "line-through",
        color : "purple"
    }
    
    console.log(props)
    return(
        <div>
            <input type="checkbox" onChange={(event)=> {props.changeHandler(props.content.id)}} checked={props.content.completed}/>
            <p style={props.content.completed? styling : null}>{props.content.text}</p>
        </div>
    )
}

export default TodoItem