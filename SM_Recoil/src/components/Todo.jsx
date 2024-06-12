import React, { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, filterSelector, todoAtom } from "../store/atom/todo";

const Todo = () => {
  return (
    <div>
      <RecoilRoot>
        <Input />
        <br />
        <Filter />
        <br />
        <AllTodos />
      </RecoilRoot>
    </div>
  );
};

function Input() {
  const setTodo = useSetRecoilState(todoAtom);
  const Todo = useRecoilValue(todoAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <label htmlFor="title">Enter title of the Todo</label>
      <input
        type="text"
        id="title"
        placeholder="enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Enter description for the Todo</label>
      <input
        type="text"
        id="description"
        placeholder="enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={function () {
          setTodo([...Todo, { title: title, description: description }]);
        }}
      >
        Add todo
      </button>
    </>
  );
}

function AllTodos() {
    let Todo = useRecoilValue(todoAtom);
    const isFilter = useRecoilValue(filterAtom);
    let filteredTodo = useRecoilValue(filterSelector);
    if(isFilter !==""){
        Todo = filteredTodo;
    }
  return(
    <>
        <h4>All Todos </h4>
        {
            Todo.map((todo)=>{
                return (
                    <div key={todo.title}>
                        <h4>Title : {todo.title}</h4>
                        <h4>Description : {todo.description}</h4>
                    </div>
                )
            })
        }
    </>
  )
}

function Filter() {
    const setFilter = useSetRecoilState(filterAtom);
    const [text,setText] = useState("")
  return (
    <>
      <input type="text" placeholder="enter something" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={function(){
        setFilter(text);
      }}>Filter Todos</button>
    </>
  );
}

export default Todo;
