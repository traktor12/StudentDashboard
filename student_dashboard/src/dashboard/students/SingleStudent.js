import React, {useState} from "react";
import { allStudentData } from "../../data/studentData";
import {  
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  

function SingleStudent() {
  

//State and const for getting the value of the selected student <option> in <select> ----------------
   
    const [picked, setPicked]=useState();
    const singleStudent = allStudentData.filter(x=> x.studentName.includes(picked));
    
//States for the conditional render of the bars--------------------------------------------------------
    const [showFunBar, setShowFunBar] = useState(true);
    const [showDifficultyBar, setShowDifficultyBar] = useState(true);

//Creating a new array[] from allStudentData[] with only the unique names as values-------------------
    const unique = [...new Set(allStudentData.map(item => item.studentName))]; 
//    console.log(unique)

//Code to update the URL path to the selected student name--------------------------------------------

 
    const handleChange = (event) => {
      const newValue = event.target.value;
      setPicked(newValue);  // Update the component state
      window.history.pushState({}, '', `/SingleStudent/${newValue}`); //no reload + URL Update
    }

    window.onload = () => {setPicked(defaultSelectedOption)}
   

//A Select where the options are the values of the unique[] array -----------------------------------

const pathnameParts = window.location.pathname.split('/');
const defaultSelectedOption = pathnameParts[pathnameParts.length - 1];
//console.log(defaultSelectedOption)

const sss = (
  <select id='sel' value={picked} onChange={handleChange}>
    <option selected disabled defaultValue={defaultSelectedOption} value={defaultSelectedOption}>{defaultSelectedOption}</option>
    {unique.map(name => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
);



//The Checboxes for choosing which bars are displayed -------------------------------------------------
  const checkboxInputs = (
    <div>
      <input className="funBarCheckbox" type="checkbox" checked={showFunBar} onChange={() => setShowFunBar(!showFunBar)} />
      Show Fun Bar
      <br/>
      <input className="dBarCheckbox" type="checkbox" checked={showDifficultyBar} onChange={() => setShowDifficultyBar(!showDifficultyBar)} />
      Show Difficulty Bar
    </div>
  );  
//Return Statement ------------------------------------------------------------------------------------
  return (
    <div>
        {sss}
        {checkboxInputs}
    {/* BarChart Code */}
    <BarChart
        width={2000}
        height={300}
        data={singleStudent}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="projectName" tick={{fontSize: 10, fill:'red'}}/>
        <YAxis type="number" domain={[0, 10]} />
        <Tooltip />
        <Legend />
        {/* Code for the conditional rendering of the 2 bars */}
        {showFunBar && <Bar id='funBar' dataKey="funGrade" fill="blue" />}
        {showDifficultyBar && <Bar dataKey="difficultyGrade" fill="red" />}
      </BarChart>
    </div>
    
  );
}

export default SingleStudent
