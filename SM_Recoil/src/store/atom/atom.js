import { atomFamily } from "recoil";
import { TodoList } from "../../todo";

export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default:(id)=>{
        return TodoList.find(x=>x.id === id);
    }
})