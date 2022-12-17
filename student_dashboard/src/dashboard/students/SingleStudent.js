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
    const [picked, setPicked]=useState();
    const singleStudent = allStudentData.filter(x=> x.studentName.includes(picked));
    const [showFunBar, setShowFunBar] = useState(true);
    const [showDifficultyBar, setShowDifficultyBar] = useState(true);


    const unique = [...new Set(allStudentData.map(item => item.studentName))]; 
    console.log(unique)

    const handleChange = (event) => {
      const newValue = event.target.value;
      window.history.pushState({}, '', `/${newValue}`);  // Update the URL path 
      //window.location.assign() to reloadd the page as well.
      setPicked(newValue);  // Update the component state
    }

    const sss = (
      <select id='sel' value={picked} onChange={handleChange}>
        <option disabled selected>Select a student</option>
        {unique.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    );

  return (
    <div>
        {sss}
    <div>Name: {picked}</div>
    <input type="checkbox" checked={showFunBar} onChange={() => setShowFunBar(!showFunBar)} />
      Show Fun Bar
      <input type="checkbox" checked={showDifficultyBar} onChange={() => setShowDifficultyBar(!showDifficultyBar)} />
      Show Difficulty Bar
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
        {showFunBar && <Bar id='funBar' dataKey="funGrade" fill="blue" />}
        {showDifficultyBar && <Bar dataKey="difficultyGrade" fill="red" />}
      </BarChart>
      {/* <BarChart
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
        <Bar id='funBar' dataKey="funGrade" fill="blue" />
        <Bar dataKey="difficultyGrade" fill="red" />
      </BarChart> */}
    </div>
    
  );
}

export default SingleStudent
