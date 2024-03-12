export default function Friend({friend}){
    const{name,email}=friend;
    return(
        <div className="box">
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
        </div>
    )
}

/**
 * 1. state to hold data 
 * 2. use effect with dependency array 
 * 3. use fetch to load data 
 * 4.set loaded data to the state 
 * 5.display data on the component
*/