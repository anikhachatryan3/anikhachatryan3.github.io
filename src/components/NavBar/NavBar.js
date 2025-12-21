import React, {useState} from 'react';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import resume from '../../assets/AniKhachatryan_Resume.pdf';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

  const [activeTheme, setActiveTheme] = useState('lightTheme');

  const toggleThemeColor = (event) => {
    // Get the ID of the clicked item
    const selectedId = event.target.id;
    
    // Update state
    setActiveTheme(selectedId);
    
    // Update the class of the body element to the selected theme
    document.documentElement.className = selectedId;
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [closing, setClosing] = useState(false);

  // This is used for trying to add a smooth transition to the dropdown items
  const handleToggle = (isOpen) => {
    if (!isOpen) {
      setClosing(true);
      setTimeout(() => {
        setShowDropdown(false);
        setClosing(false);
      }, 300);
    } else {
      setShowDropdown(true);
    }
  };

  return (
    <Navbar sticky='top' expand='lg' className={styles.navBar}>
      <Container fluid>
        <Navbar.Brand href='/' className={styles.navTitle}>Ani Khachatryan</Navbar.Brand>
        <NavbarToggle aria-controls='responsive-navbar-nav' className={`${styles.navBarToggle}`} />
        <NavbarCollapse id='responsive-navbar-nav'>
          <Nav className={`${styles.navItems} ms-auto`}>
            <Nav.Link className={`${styles.navBarLink}`} href='/'>Home</Nav.Link>
            <Nav.Link className={`${styles.navBarLink}`} href={resume} rel='noreferrer' target='_blank'>Resume</Nav.Link>
            <NavDropdown align="end" title="Themes" id="themeDropdown" show={showDropdown || closing} onToggle={handleToggle} className={`${styles.navDropdownMenu} ${closing ? styles.closing : ''}`} renderMenuOnMount={true}>
              <NavDropdown.Item id="lightTheme" onClick={toggleThemeColor} active={activeTheme === 'lightTheme'} className={`${styles.navDropdownItem}`}>Light</NavDropdown.Item>
              <NavDropdown.Item id="darkTheme" onClick={toggleThemeColor} active={activeTheme === 'darkTheme'} className={`${styles.navDropdownItem}`}>Dark</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
