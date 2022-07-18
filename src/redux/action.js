import { add_todo } from "./actiontypes.js";

export const addtodo = (payload)=>{
    return {
        type:add_todo,
        payload
    }
}

