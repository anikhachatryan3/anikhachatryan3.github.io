import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className={styles.Home}>
    <h1>Home Page</h1>
    <Link to="/">Home</Link>
  </div>
);

// Home.propTypes = {};

// Home.defaultProps = {};

export default Home;
