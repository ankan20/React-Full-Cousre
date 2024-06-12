import { atom, selector } from "recoil";

export const todoAtom = atom({
    key:"todoAtom",
    default:[],
});

export const filterAtom = atom(
    {
        key:"filterAtom",
        default:"",
    }
)

export const filterSelector =selector({
    key:"filterSelector",
    get:({get})=>{
        const todo = get(todoAtom);
        const filter = get(filterAtom);
        return todo.filter((item)=> item.title.includes(filter) || item.description.includes(filter)) 
    }
}) 