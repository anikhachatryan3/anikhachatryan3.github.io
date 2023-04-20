import React from 'react';
import styles from './Home.module.css';
import AniImage from '../../assets/Ani.jpg';
// import educationImage from '../../assets/education.jpeg';
// import { Link } from "react-router-dom";

const Home = () => (
  <>
    <head>
      <meta charset="UTF-8" />
      <title>Ani Khachatryan</title>
    </head>
    <body>
      <main>
        <section className={styles.aboutWrapper} alt="about" >
          <div className={styles.narrow}>
            <img className={styles.image} src={AniImage} alt='Ani' />
          </div>
          <div className={styles.wide}>
            <p className={styles.about}>
              Welcome to my website! My name is Ani Khachatryan, and I am a computer science graduate at California 
              State University, Northridge who is currently seeking a job. I have experience in building web 
              applications from internships, bootcamps, hackathons, and personal projects. I am a dedicated and 
              hardworking person who is both an independent learner and a team player, and can quickly adapt to 
              different environments and situations.
            </p>
            <div className={styles.contact}>
              <a href="mailto:anikhachatryan3@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/anikhachatryan3/" rel='noreferrer' target="_blank">LinkedIn</a>
              <a href="https://github.com/anikhachatryan3" rel='noreferrer' target="_blank">Github</a>
            </div>
          </div>
        </section>
        <section className={styles.educationWrapper} alt="education">
          <div>
            <div>
              <h1 className={styles.educationImage}>Education</h1>
            </div>
            <div>
              <h2>California State University, Northridge</h2>
            </div>
          </div>
        </section>
      </main>
    </body>
  </>

);

export default Home;
