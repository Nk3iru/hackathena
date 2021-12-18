import {useState} from "react";
import ReactDOM from "react-dom";
import './studentForm.css';

function StudentForm(){

    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");   

   
    render()
    {
        return(
        <form>
            <label>Name:
             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
             </label>
      
             <label>School:
             <input type="text" value={school} onChange={(e) => setSchool(e.target.value)}/>
             </label>
        
      
            <label>Major:
             <input type="text" value={major} onChange={(e) => setMajor(e.target.value)}/>
             </label>
        
        </form>
        );
    }
}

    
ReactDOM.render(<StudentForm/>, document.getElementById('root'));