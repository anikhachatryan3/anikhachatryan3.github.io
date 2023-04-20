import React from 'react';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import resume from '../../assets/AniKhachatryan_Resume.pdf';

const NavBar = () => (
    <Navbar sticky='top' expand='lg' className={styles.navBar}>
      <Container fluid>
        <Navbar.Brand href='/' className={styles.navTitle}>Ani Khachatryan</Navbar.Brand>
        <Nav className={styles.navItems}>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href={resume} without rel='noreferrer' target='_blank'>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
);

export default NavBar;
