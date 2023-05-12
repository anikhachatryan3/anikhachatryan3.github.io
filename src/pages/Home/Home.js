import React from 'react';
import styles from './Home.module.css';
import AniImage from '../../assets/Ani.jpg';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const Home = () => (
  <>
  {/* Header */}
    <head>
      <meta charset="UTF-8" />
      <title>Ani Khachatryan</title>
    </head>
    {/* Body */}
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
              <h1 className={styles.experienceImage} alt='experience image'>Experience</h1>
            </div>
            {/* Flowductive */}
            <div className={styles.work}>
              <div className={styles.workTitle}>
                <h2>Flowductive</h2>
              </div>
              <div className={styles.workDate}>
                <p>July 2022 - Present</p>
              </div>
              <div className={styles.workPosition}>
                <p>Software Development Engineer</p>
              </div>
              <div className={`${styles.workDescription} ${styles.flowductiveDescription}`}>
                <p>I am working as a Software Development Engineer for Flowductive, which is an application 
                  that allows the user to commit their time to being productive in a fun and unique way. I am 
                  working on the development of the web application of Flowductive, such as the login page, 
                  create account page, creating and adding the functionality for certain buttons, etc. The 
                  technologies being used are React.js, TypeScript, and Firebase.</p>
              </div>
              <div className={`${styles.workTechnologies} ${styles.flowductiveTechnologies}`}>
                <ul>
                  <li><b><i>Languages and Frameworks:</i></b>&ensp;React.js, TypeScript, Firebase</li>
                </ul>
              </div>
            </div>
            {/* META+LAB */}
            <div className={styles.work}>
              <div className={styles.workTitle}>
                <h2>META+LAB</h2>
              </div>
              <div className={styles.workDate}>
                <p>September 2018 - June 2019</p>
              </div>
              <div className={styles.workPosition}>
                <p>Bootcamp Participant</p>
              </div>
              <div className={`${styles.workDescription} ${styles.metalabDescription}`}>
                <p>I attended both the Pathfinder and Summer Immersive Boot Camps where I learned how to use PHP, 
                  Laravel, Git, Docker, and MySQL. I challenged myself to learn Vue.js during this boot camp and 
                  created a full stack forum web application, where the user is able to create posts, delete their 
                  own posts, log in with their existing account, create a new account, etc.</p>
              </div>
              <div className={`${styles.workTechnologies} ${styles.metalabTechnologies}`}>
                <ul>
                  <li><b><i>Languages and Frameworks:</i></b>&ensp;Vue.js, JavaScript, Laravel, PHP, Git, Github, 
                  Docker, MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section className={styles.projectsWrapper} alt='projects'>
          <div>
            <h1 className={styles.projectsImage} alt='projects image'>Projects</h1>
          </div>
          {/* Project 1 - SAN Distance Learning */}
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>SAN Distance Learning</h2>
            </div>
            <div className={styles.projectDescription}>
              <p>My team members and I created a Learning Management System similar to Canvas, but for children 
                K-5. I worked on the backend and database portion of this project where I created the functionality 
                of logging in, creating an account, submitting assignments, making sure the data was being sent to 
                the database correctly, etc. I also assisted my team members in the frontend with resolving bugs 
                and creating/improving features.</p>
            </div>
            <div className={styles.projectTechnologies}>
              <ul>
                <li><b><i>Technologies Used:</i></b>&ensp;Laravel, PHP, Vue.js, JavaScript, MySQL,
                AWS, GitHub</li>
              </ul>
            </div>
          </div>
          {/* Project 2 - Full Stack Forum */}
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>Full Stack Forum</h2>
            </div>
            <div className={styles.projectDescription}>
              <p>I created a Full Stack Single Page Application (SPA) blog website that uses Object-Relational 
                Mapping, Authentication, Dependency Injection, and follows the Model-View-Controller design 
                pattern.</p>
            </div>
            <div className={styles.projectTechnologies}>
              <ul>
                <li><b><i>Technologies Used:</i></b>&ensp;Laravel, PHP, Vue.js, JavaScript, MySQL, AWS, Heroku, 
                Bootstrap, GitHub</li>
              </ul>
            </div>
          </div>
          {/* Project 3 - You-Til */}
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>You-Til</h2>
            </div>
            <div className={styles.projectDescription}>
              <p> My team members and I created an Android mobile application with multiple utility apps, where 
                the user can make unwanted utilities invisible in the settings. I worked on creating some of 
                these utilities, along with creating the settings portion of the application.</p>
            </div>
            <div className={styles.projectTechnologies}>
              <ul>
                <li><b><i>Technologies Used:</i></b>&ensp;Java, Android Studio, GitHub</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className={styles.educationWrapper} alt="education">
          <div>
            <div>
              <h1 className={styles.educationImage} alt="education image">Education</h1>
            </div>
            {/* CSUN */}
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
                <ul>
                  <li><b><i>Achievements:</i></b>&ensp;Graduated with Honors, Dean's List for multiple semesters</li>
                  <li><b><i>Courses:</i></b>&ensp;Senior Design Project, Object-Oriented Software Development, Algorithm 
                  Design and Analysis, Advanced Web Engineering, Database Design, Web Engineering, Graphical User Interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className={styles.skillsWrapper} alt='skills'>
          <div>
            <div>
              <h1 className={styles.skillsImage} alt='skills image'>Skills</h1>
            </div>
            <div className={styles.skillsList}>
              <div className={styles.skillsTitle}>Languages:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>JavaScript</div>
                  <div className={styles.skillsItems}>TypeScript</div>
                  <div className={styles.skillsItems}>Java</div>
                  <div className={styles.skillsItems}>C</div>
                  <div className={styles.skillsItems}>Go</div>
                  <div className={styles.skillsItems}>PHP</div>
                </div>
              <div className={styles.skillsTitle}>Frontend:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>React.js</div>
                  <div className={styles.skillsItems}>Vue.js</div>
                  <div className={styles.skillsItems}>jQuery</div>
                  <div className={styles.skillsItems}>Bootstrap</div>
                  <div className={styles.skillsItems}>HTML</div>
                  <div className={styles.skillsItems}>CSS</div>
                </div>
              <div className={styles.skillsTitle}>Backend:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>Node.js</div>
                  <div className={styles.skillsItems}>SQL</div>
                  <div className={styles.skillsItems}>Docker</div>
                  <div className={styles.skillsItems}>Laravel</div>
                </div>
              <div className={styles.skillsTitle}>Database:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>MySQL</div>
                  <div className={styles.skillsItems}>PostgreSQL</div>
                </div>
              <div className={styles.skillsTitle}>Cloud Tech:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>AWS</div>
                  <div className={styles.skillsItems}>Firebase</div>
                  <div className={styles.skillsItems}>Heroku</div>
                </div>
              <div className={styles.skillsTitle}>Processes:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>Agile methodology</div>
                  <div className={styles.skillsItems}>Scrum</div>
                </div>
              <div className={styles.skillsTitle}>Testing:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>Unit testing</div>
                  <div className={styles.skillsItems}>JUnit</div>
                  <div className={styles.skillsItems}>PHPUnit</div>
                </div>
              <div className={styles.skillsTitle}>Other:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>RESTful APIs</div>
                  <div className={styles.skillsItems}>Git</div>
                  <div className={styles.skillsItems}>GitHub</div>
                  <div className={styles.skillsItems}>Linux</div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    {/* Footer */}
    <footer>
      <hr />
      <div className={styles.footerTitle}>
        <p>Technologies Used:</p>
      </div>
      <div className={styles.footerLinks}>
        <a href='https://react.dev/' rel='noreferrer' target="_blank"><FaReact /></a>
        <a href='https://github.com/' rel='noreferrer' target="_blank" className={styles.github}><GoMarkGithub /></a>
      </div>
    </footer>
  </>

);

export default Home;
