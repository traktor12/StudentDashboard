import React from "react";
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


  return(
    <div>
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
      <Bar dataKey="funGrade" fill="blue" />
      <Bar dataKey="difficultyGrade" fill="red" />
    </BarChart>
    </div>
  )
}

export default AllStudents;

