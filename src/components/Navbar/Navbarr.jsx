// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';



// function Navbarr() {
//   return (
//     <>
//     <Navbar  expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link as={Link} to="/" className="nav-item nav-link px-4">HOME</Nav.Link>
//             <Nav.Link as={Link} to={"/aboutus"} className="nav-item nav-link px-4 ">ABOUT US</Nav.Link>          
//             <Nav.Link as={Link} to={"/aboutus"} className="nav-item nav-link px-4 ">SERVICES</Nav.Link>          
//             <Nav.Link as={Link} to={"/aboutus"} className="nav-item nav-link px-4 ">BRANDS</Nav.Link>          
//             <Nav.Link as={Link} to={"/aboutus"} className="nav-item nav-link px-4 ">CONTACT US</Nav.Link>          
//             <Nav.Link as={Link} to={"/aboutus"} className="nav-item nav-link px-4 ">BLOG</Nav.Link>  
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   );
// }



// export default Navbarr;




import React, { useState } from 'react'
import './Navbarr.css';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';


function Navbarr() {
  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  return (
    <>
   <nav className="NavbarItems">
    <h1 className="navbar-logo">Yatra</h1>
    <div className="menu-icons" onClick={handleClick}>
      <i className={ click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      {MenuItems.map((item, index)=>{
        return(

      <li key={index}>
      <NavLink className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</NavLink>
      </li>
        )
      })}
      <button>Sign Up</button>
    </ul>
   </nav>
    </>
  )
}

export default Navbarr