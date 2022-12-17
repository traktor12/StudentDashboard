import React, {useState, useEffect} from "react";
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
    
    const unique = [...new Set(allStudentData.map(item => item.studentName))]; // [ 'A', 'B']
    console.log(unique)
  
    // const sss=
    // <select id='sel' value={picked} onChange={x=>setPicked(x.target.value)}>
    //             <option disabled selected>Select a student</option>
    // </select>
  
    
    //  function Addsss(){
    //   useEffect(()=>
    //         unique.forEach(x=>{
    //             document.getElementById('sel').innerHTML += '<option value="' + x + '">' + x + "<option/>"    
    //         })  );
    //   }
    const sss = (
      <select id='sel' value={picked} onChange={x => setPicked(x.target.value)}>
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
        <Bar dataKey="funGrade" fill="blue" />
        <Bar dataKey="difficultyGrade" fill="red" />
      </BarChart>
     
    </div>
    
  );
}

export default SingleStudent
