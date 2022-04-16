import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Lights() {
    const [light, setLight] = useState("");

    const turn_on = (color) =>{
        var insert = {'color': color}
        fetch(process.env.REACT_APP_API_URL + "/lights", 
            {
                method:'POST', 
                body: JSON.stringify(insert),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }
            })  
          .then(res => res.json())
          .then(data => console.log(data))
      }
    return (
        <div>
            <h1>Current Light</h1>
            <h2>{light}</h2>
            <br/>
            <p>Set Lights</p>
            
            <button value="Green Light" onClick={() => turn_on("GREEN")}>Turn on green light</button> 
            <button value="Yellow Light" onClick={() => turn_on("YELLOW")}>Turn on yellow light</button> 
            <button value="Red Light" onClick={() => turn_on("RED")}>Turn on red light</button> 
        </div>
    )
}
