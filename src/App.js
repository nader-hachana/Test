import React, { useState } from "react";
import Names_Order from "./Components/Names_Order.js";
import Classify from "./Components/Classify.js";
import Names from "./Components/Names.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [i, seti] = useState(0);
  const name = ["Akali", "Diana", "Fizz", "Lux", "Yone"];
  const [start, setstart] = useState(false);
  const [present,setpresent]=useState([]);
  const [abscent,setabsent]=useState([]);
  const [tous,settous]=useState([]);
  function handlestate(x) {
    if(x==="present"){
      setpresent([...present,name[i]])
    }
    else if (x==="absent"){
      setabsent([...abscent,name[i]])
    }
    settous([...tous,name[i]])
    return(
      seti(i+1)
    )
  }
  return (
    <div style={{ backgroundColor: "black", height: "800PX", width: "100%" }}>
      {name[i] ? (<Names i={i} name={name} start={start} Click={() => setstart(true)}></Names>) : null}
      {name[i] ? (<Classify start={start} advance={handlestate}></Classify>) : null}
      <Names_Order></Names_Order>
      {tous.map((p)=><div style={{color:"white",textAlign:'center',borderStyle: 'solid'}}>{p} </div>)}

    </div>
  );
}
