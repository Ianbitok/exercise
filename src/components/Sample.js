import { useState } from "react";

const ConditionalRendering = ()=> {
    const [display, setDisplay]= useState(true);
    let output;
    //Conditional rendering using elements 
if(display){
    output =<h1>Display is true hence this line is displayed </h1>
} else {
    output = <h1>Display is false hence this line is not displayed</h1>
}
}

export default ConditionalRendering;