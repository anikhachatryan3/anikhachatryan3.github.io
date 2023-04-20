import React from 'react';
import styles from './Home.module.css';
import AniImage from '../../assets/Ani.jpg';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
// import { Link } from "react-router-dom";

const Home = () => (
  <>
    <head>
      <meta charset="UTF-8" />
      <title>Ani Khachatryan</title>
    </head>
    <body>
      <main>
        {/* About Section */}
        <section className={styles.aboutWrapper} alt="about" >
          <div className={styles.narrow}>
            <img className={styles.image} src={AniImage} alt='Ani' />
          </div>
          <div className={styles.wide}>
            <p className={styles.about}>
              Welcome to my website! My name is Ani Khachatryan, and I am a computer science graduate from California 
              State University, Northridge who is currently seeking a job. I have experience in building web 
              applications from internships, bootcamps, hackathons, and personal projects. I am a dedicated and 
              hardworking person who is both an independent learner and a team player, and can quickly adapt to 
              different environments and situations.
            </p>
            <div className={styles.contact}>
              <a href="mailto:anikhachatryan3@gmail.com"><GoMail /> Email</a>
              <a href="https://www.linkedin.com/in/anikhachatryan3/" rel='noreferrer' target="_blank"><BsLinkedin /> LinkedIn</a>
              <a href="https://github.com/anikhachatryan3" rel='noreferrer' target="_blank"><GoMarkGithub /> Github</a>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section className={styles.experienceWrapper} alt="experience">
          <div>
            <div>
              <h1 className={styles.experienceImage}>Experience</h1>
            </div>
            <div className={styles.flowductive}>
              <div className={styles.flowductiveTitle}>
                <h2>Flowductive</h2>
              </div>
              <div className={styles.flowductiveDate}>
                <p>July 2022 - Present</p>
              </div>
              <div className={styles.flowductivePosition}>
                <p>Software Development Engineer</p>
              </div>

            </div>
            <div className={styles.metalab}>
              <div className={styles.metalabTitle}>
                <h2>META+LAB</h2>
              </div>
              <div className={styles.metalabDate}>
                <p>September 2018 - June 2019</p>
              </div>
              <div className={styles.metalabPosition}>
                <p>Bootcamp Participant</p>
              </div>

            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className={styles.educationWrapper} alt="education">
          <div>
            <div>
              <h1 className={styles.educationImage} alt="education image">Education</h1>
            </div>
            <div className={styles.csun}>
              <div className={styles.csunTitle}>
                <h2>California State University, Northridge</h2>
              </div>
              <div className={styles.csunDate}>
                <p>August 2017 - December 2021</p>
              </div>
              <div className={styles.csunDegree}>
                <p>Bachelor of Science in Computer Science</p>
              </div>
              <div className={styles.csunAchievements}>
                <p><i>Achievements:</i> Graduated with Honors, Dean's List for multiple semesters</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  </>

);

export default Home;
