import { useState } from "react";

function Like(){
    
    let[like,setlike]=useState(false);
    let[count ,setCount]=useState(0);
    console.log("render the from start");
    console.log(`after render from start ${count}`)
    function incrs(){
        setCount(count+1);
        console.log(`after icount function ${count}`)
    }
    function islike(){
        setlike(! like);
    
        
    }
    
    return(
        <>
        <div> 
            <p>count : : {count}</p>
        <button onClick={incrs}>HIT ME !!!!!</button> 
        </div>
        
<p>
   
{ like ? (
    <button onClick={islike}>like</button>
):(
    <button onClick={islike}>unlike</button>
)

}
</p>
</>
    );
}
export default Like;