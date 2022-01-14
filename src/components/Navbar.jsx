import React from 'react'
import "./Navbar.css"
import Logo from "../Assets/cherise_logo.png"
import Cart from "../Assets/cart.png"
import user from "../Assets/user.svg"
import { Search } from '@mui/icons-material'

import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Form, FormControl, Nav, NavDropdown,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


 
export const Navbars = () => {
    return (
        <div className="header2">
 
           <Navbar className="navbar-animate" style={{backgroundColor:"#ffff",borderBottom: "1px solid #efefef"}}  expand="lg">
            <Container fluid>
                <Navbar.Brand >
                    <Link style={{textDecoration:"none"}}>
                        <Image src={Logo} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <Nav.Link className="fontPhilosopher">
                        <Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/">
                            HOME
                        </Link>
                    </Nav.Link>
                    
                    
                    <Nav.Link className="fontPhilosopher">
                        <Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/about">ABOUT</Link>
                    </Nav.Link>
                   
                    <NavDropdown className="fontPhilosopher black" title="BRANDS" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="fontPhilosopher"><Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/">SPECIALITEAS</Link></NavDropdown.Item>
                        <NavDropdown.Item className="fontPhilosopher"><Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/">TAPRI</Link></NavDropdown.Item>
                        <NavDropdown.Item className="fontPhilosopher"><Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/">AYURVEDIC</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Link>
                        
                    </Link>
                    <Nav.Link className="fontPhilosopher">
                        <Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/explore">EXPLORE</Link>
                    </Nav.Link>
                    <Nav.Link className="fontPhilosopher" href="#">
                        <Link style={{textDecoration:"none",color:" rgba(0,0,0,.55)"}} to="/blogs">BLOGS</Link>
                    </Nav.Link>
                </Nav>

                <div className='searchcontainer' >
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        className="searchinput"
                        />
                        {/* <input className="searchinput" placeholder='Search' /> */}
                        <Search style={{color:"black",fontSize:"25px",fontWeight:"bold"}} />
                    </Form>

                </div>

                <Image src={Cart} />
                <Image style={{width:"26px",marginRight:"5px"}} src={user} />

                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
        
    )
}
