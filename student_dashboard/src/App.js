import React from "react";
import Navbar from "./dashboard/Navbar";
import AllStudents from "./dashboard/students/AllStudents";
import SingleStudent from "./dashboard/students/SingleStudent";
import '../src/styling/style.css'
function App() {

  let Page;
  switch(window.location.pathname){
      default :
        Page = AllStudents;
      break
      case '/SingleStudent':
        Page = SingleStudent
      break
  }

  return (
    <div>
      <Navbar />
      <Page />
    </div>
  );
}

export default App;
