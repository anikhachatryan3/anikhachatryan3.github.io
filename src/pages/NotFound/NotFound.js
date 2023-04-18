import React from 'react';
// import PropTypes from 'prop-types';
import styles from './NotFound.module.css';
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className={styles.NotFound}>
    <h1>Page Not Found</h1>
    <Link to="/">Return to home page</Link>
  </div>
);

// NotFound.propTypes = {};

// NotFound.defaultProps = {};

export default NotFound;
