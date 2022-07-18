import { add_todo } from "./actiontypes.js";

const initstate = {
    // i could have fetched it from json but could not have deployed as the both the servers should have to run to obtain data 
    // i could have also created api deployed it and then fetched it from there 
    // due to time constraints could not do so 
    todos :[{
        title:"https://m.media-amazon.com/images/I/81m-k+GAPWS._SX679_.jpg",
        status:false
    },{
        title:"https://m.media-amazon.com/images/I/71zVkhxzkmS._SX679_.jpg",
        status:true
    },
    {
        title:"https://m.media-amazon.com/images/I/41zM8SvEFVL.jpg",
        status:true
    },
    {
        title:"https://m.media-amazon.com/images/I/81tyEM-RLUL._SX679_.jpg",
        status:true
    },{
        title:"https://m.media-amazon.com/images/I/61p5laX4jSL._SX569_.jpg",
        status:true
    },{
        title:"https://m.media-amazon.com/images/I/41LhgXjZk0L._AC_SR160,160_.jpg",
        status:true
    },{
        title:"https://m.media-amazon.com/images/I/41zM8SvEFVL.jpg",
        status:true
    },{
        title:"https://m.media-amazon.com/images/I/61FEsMzJyxL._SX569_.jpg",
        status:true
    },
{
    title:"https://images-eu.ssl-images-amazon.com/images/I/51kaTQfVPyL._SX300_SY300_QL70_FMwebp_.jpg"
},
{
    title:"https://images-eu.ssl-images-amazon.com/images/I/71wqqRBINbL._AC_UL160_SR160,160_.jpg"
},
{
    title:"https://m.media-amazon.com/images/I/513TpbApnbL._AC_SR160,160_.jpg"
},{
    title:"https://m.media-amazon.com/images/I/41JSNb0EzdL._AC_SR160,160_.jpg"
}]
}
const reducer = (state=initstate,{type,payload})=>{
    switch (type){
        case add_todo:{
            return {
                ...state,
                todos:[...state.todos,payload]
            }
        }
        default:
            return state;
    }
}

export {reducer}