import { useState } from "react";

interface ClickCounterProps {
    title: string;
    on10ClickMessage: string;
    onMouseOverMessage : string; 
    
  }

const ClickCounter = ({title,on10ClickMessage,onMouseOverMessage}:ClickCounterProps) => {

    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    

    return(
         <div className="card">
         <p>{title}</p>
         
         <button onClick={() => setCount((count) => count + 1)}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
           
           count is {count}
         </button>
         {isHovered ? <p>{onMouseOverMessage}</p> : null}
         <p>
        <p>{count>10 ? on10ClickMessage : ""}</p>
           Edit <code>src/App.tsx</code> and save to test HMR
         </p>
       </div>
    )

}

export default ClickCounter;