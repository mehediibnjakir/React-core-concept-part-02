import { useState } from "react"

export default function Counter(){
    const [count, setCount]= useState(0);
    const addCount = ()=> {
        const newCount = count +1;
        setCount (newCount)
    }
    const handelReduce = ()=> {
        const newCount = count -1;
        setCount (newCount)
    }

    
    return(
        <div style= {{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={addCount}>
                Add 
            </button>
            <button onClick={()=>{
                const newCount = count -1;
                setCount (newCount)
            }}>
                Reduce 
            </button>
        </div>
    )
}