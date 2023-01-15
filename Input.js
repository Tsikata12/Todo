import React, { useState } from "react"

export default function Input() {
    
    const [toDo, setToDo] = useState({title: "", description: ""})
    const [toDoList, setToDoList] = useState([])
    
    function handleChange(event) {
        const {name, value} = event.target
        setToDo(prevToDo => {
            return {
                ...prevToDo,
                [name]: value
            }
        })
    }
    
    function submitTask() {
        const newToDo = {
            ...toDo,
            id: Math.floor(Math.random() * 1000)
        }
        
        setToDoList(prevToDoList => [...prevToDoList, newToDo])
        setToDo({title: "", description: ""})
    }
    
    
    // useEffect(()=> {
    //     console.log(toDoList)
    // },[toDoList])
    
    function deleteTask(id) {
        setToDoList(toDoList.filter(task => task.id !== id))
    }
    
    const displayTask = toDoList.map(task => (
        <div key={task.id} className="display-box">
            <div className="inner-task">
                <h3>{task.title}</h3>
                <button onClick={()=> deleteTask(task.id)} className="delete-btn">Delete</button>
            </div>
            <p>{task.description}</p>
        </div>
    ))
    
    return (
    <div className="container-input">
        <div className="form"> 
            <input 
            type="text"
            placeholder="title"
            value={toDo.title}
            onChange={handleChange}
            name="title"
            />
            <input 
            type="text"
            placeholder="description"
            value={toDo.description}
            onChange={handleChange}
            name="description"
            />
            <button  onClick={submitTask} className="submitButton">Add</button>
        </div>
        {displayTask}
    </div>
    )
}