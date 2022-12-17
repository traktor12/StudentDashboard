import React,{useState} from "react";
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

function AllStudents (){

//States for the conditional render of the bars--------------------------------------------------------
  const [showFunBar, setShowFunBar] = useState(true);
  const [showDifficultyBar, setShowDifficultyBar] = useState(true);

//Return Statement -------------------------------------------------------------------------------
  return(
    <div>
       <input className="funBarCheckbox" type="checkbox" checked={showFunBar} onChange={() => setShowFunBar(!showFunBar)} />
      Show Fun Bar
      <input className="dBarCheckbox" type="checkbox" checked={showDifficultyBar} onChange={() => setShowDifficultyBar(!showDifficultyBar)} />
      Show Difficulty Bar
      {/* BarChart Code */}
      <BarChart
      width={20000}
      height={300}
      data={allStudentData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
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
  )
}

export default AllStudents;

