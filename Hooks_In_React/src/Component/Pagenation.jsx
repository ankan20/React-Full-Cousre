import React, { useEffect, useState } from 'react'

function newTodo (){
  let todos = [];
  let size = Math.floor(Math.random()*10) +10;
  for(let i =0;i<size;i++){
    let todo = {
      id:i,
      title:"Its new todo " + i,
      description : "New description " + i
    };
    todos.push(todo);
  }
  return todos;
}

const App = () => {
  const [selectedId,setSelectedId] = useState(1);
  
  return (
    <div>
      <button onClick={function (){setSelectedId(1)}}>1</button>
      <button onClick={function (){setSelectedId(2)}}>2</button>
      <button onClick={function (){setSelectedId(3)}}>3</button>
      <button onClick={function (){setSelectedId(4)}}>4</button>
      <button onClick={function (){setSelectedId(5)}}>5</button>
     <TodoWithID id={selectedId}/>
    </div>
  )
}

function TodoComponent ({title,description}){
  return (
    <>
      <h5>Title : {title}</h5>
      <h5>Description :{description}</h5>
      <br />
    </>
  )
}

function TodoWithID({id}){
  const [todos,setTodos] = useState({});
  useEffect(()=>{
    let allTodo = newTodo();
    let todo = allTodo.find((todo)=>todo.id ===id); 
    setTodos(todo);
    
  },[id])


  return (
    <div>
      <h4>ID : {todos.id}</h4>
      <h3>Title : {todos.title}</h3>
      <h3>Description : {todos.description}</h3>
    </div>
  )
}




export default App
