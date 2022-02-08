import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>React Project</h1>
        <div className="links">
          <Link to="/list">List</Link>
          <Link to="/home">Form</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;