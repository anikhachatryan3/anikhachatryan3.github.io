import React from 'react';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import resume from '../../assets/AniKhachatryan_Resume.pdf';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const NavBar = () => (
    <Navbar sticky='top' expand='lg' className={styles.navBar}>
      <Container fluid>
        <Navbar.Brand href='/' className={styles.navTitle}>Ani Khachatryan</Navbar.Brand>
        <NavbarToggle aria-controls='responsive-navbar-nav' />
        <NavbarCollapse id='responsive-navbar-nav'>
        <Nav className={`${styles.navItems} ms-auto`}>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href={resume} without rel='noreferrer' target='_blank'>Resume</Nav.Link>
        </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
);

export default NavBar;
