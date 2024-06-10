
import { atom, selector } from "recoil";


export const countAtom = atom({
    key :"countAtom",
    default : 0,
});

//this is use like useMemo(()=>{return count%2},[count])
export const eveneSelector =selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countAtom);
        return count % 2;
    }
}) 