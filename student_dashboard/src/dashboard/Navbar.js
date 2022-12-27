//import {Link} from 'react-router-dom';
import AllStudents from "./students/AllStudents";
import SingleStudent from "./students/SingleStudent";
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <BrowserRouter>
        <nav className="nav">
        <span className="siteTitle">Student Dashboard</span>
        <ul>
            <li>
                <Link to="/">All Students</Link>
            </li>
            <li>
                <Link to="/SingleStudent">Single Student</Link>
            </li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<AllStudents />} /> 
          <Route path="SingleStudent" element={<SingleStudent />} />
        </Routes>
        </BrowserRouter>
    )
}