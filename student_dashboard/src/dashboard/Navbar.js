export default function Navbar(){
    return <nav className="nav">
        <span className="siteTitle">Student Dashboard</span>
        <ul>
            <li>
                <a href="/">All Students</a>
            </li>
            <li>
                <a href="/SingleStudent">Single Student</a>
            </li>
        </ul>
    </nav>
}