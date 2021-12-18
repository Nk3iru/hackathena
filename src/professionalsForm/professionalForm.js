import React from "react";
import majors from "./majors.json"

class SelectMajors extends React.Component
{
    render()
    {
        return(
    <div>
        <select>
        <option selected disabled="true">select major</option>
        {
           majors.Major.map(result=>(<option>{result.majorName}</option>))
        }
        </select>
    </div>
        );
    }
}

export default SelectMajors;