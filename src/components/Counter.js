import React, {Component} from 'react';
var counter_val = 0;


function Counter(props){

    return <>
        <button onclick={increment}>Increment</button>
        <h1>Brenden</h1>
        <button onclick={decrement}>Decrement</button>
        <h1>{counter_val}</h1>
    </>
    
}

function increment(props){
    counter_val++;
}
function decrement(props){
    counter_val--;
}

export default Counter