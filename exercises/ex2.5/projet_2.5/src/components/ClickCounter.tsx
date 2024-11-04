import { useState } from "react";

interface ClickCounterProps {
    title: string;
    on10ClickMessage: string; 
    
  }

const ClickCounter = ({title,on10ClickMessage = "Master !",}:ClickCounterProps) => {

    const [count, setCount] = useState(0);
    

    return(
         <div className="card">
         <p>{title}</p>
         <button onClick={() => setCount((count) => count + 1)}>
           count is {count}
         </button>
         <p>
        <p>{count>10 ? on10ClickMessage : ""}</p>
           Edit <code>src/App.tsx</code> and save to test HMR
         </p>
       </div>
    )

}

export default ClickCounter;