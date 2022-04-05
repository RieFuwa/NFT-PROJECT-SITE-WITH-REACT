import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Styles.css';
import aaa from '../assets/aaa.png'
function Header() {
    return <div >
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" sticky="top">
            <Container id="home" >
                <Navbar.Brand> <img src={aaa} class="logo" alt="SMILINFT LOGO" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Nav.Link class="nav-link " style={{ color: "white" }} href="/#about">ABOUT</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " style={{ color: "white" }} href="/#roadmap">ROADMAP</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " style={{ color: "white" }} href="/#teampage">TEAM</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " style={{ color: "white" }} href="/#faq">FAQ</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " style={{ color: "white" }} href="/rarity">Rarity</Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

}

export default React.memo(Header);


