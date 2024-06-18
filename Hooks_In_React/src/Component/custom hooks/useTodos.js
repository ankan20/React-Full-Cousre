import { useEffect, useState } from "react";

export function useTodos (){
    const [todos ,setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res =>{setTodos(res.data.todos)});
    },[]);
    return { todos };
}