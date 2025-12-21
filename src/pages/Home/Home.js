import React from 'react';
import styles from './Home.module.css';
import AniImage from '../../assets/Ani.jpg';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const Home = () => (
  <>
  {/* Header */}
    {/* <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Ani Khachatryan</title>
    </head> */}
    {/* Body */}
    {/* <body> */}
      <main>
        {/* About Section */}
        <section className={styles.aboutWrapper} alt="about" >
          <div className={styles.narrow}>
            <img className={styles.image} src={AniImage} alt='Ani' />
          </div>
          <div className={styles.wide}>
            <p className={styles.about}>
              Welcome to my website! My name is Ani Khachatryan, and I am a Software Engineer who is currently 
              seeking new job opportunities. I have 3 years of professional experience developing web applications, 
              and I have experience in Azure development. I also have experience in building web applications
              from internships, bootcamps, hackathons, and personal projects. I am a dedicated and hardworking
              person who is both an independent learner and a team player, and can quickly adapt to different
              environments and situations. I am also willing to learn any new languages, frameworks, and 
              technologies.
            </p>
            <div className={styles.contact}>
              <a href="mailto:anikhachatryan3@gmail.com"><GoMail className={styles.buttonIcon} /> Email</a>
              <a href="https://www.linkedin.com/in/anikhachatryan3/" rel='noreferrer' target="_blank"><BsLinkedin className={styles.buttonIcon} /> LinkedIn</a>
              <a href="https://github.com/anikhachatryan3" rel='noreferrer' target="_blank"><GoMarkGithub className={styles.buttonIcon} /> Github</a>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section className={styles.experienceWrapper} alt="experience">
          <div>
            <div>
              <h1 className={styles.experienceImage} alt='experience image'>Experience</h1>
            </div>
            {/* Houlihan Lokey */}
            <div className={styles.work}>
              <div className={styles.workTitle}>
                <h2>Houlihan Lokey</h2>
              </div>
              <div className={styles.workDate}>
                <p>July 2023 - Present</p>
              </div>
              <div className={styles.workPosition}>
                <p>Software Developer</p>
              </div>
              <div className={`${styles.workDescription} ${styles.hlDescription}`}>
                <p>I am working as a Software Developer I for Houlihan Lokey. I've worked on many different 
                  projects during my time here. Here are a couple notable ones:</p>
                <ul>
                  <li>
                    <b>VAULT:</b>
                    <p>
                      I've worked on a web application called VAULT, which is used by bankers for accessing and 
                      downloading company assets using RBAC. I've optimized the loading times of the pages by using 
                      background handlers to asynchronously load the images and cache them for 5 minutes after 
                      initial load. I utilized SSL for logging user activity to the on-premise database table for user 
                      analytics. I also created a tool that syncs SharePoint metadata to the respective on-premise 
                      database table for faster loading and filtering times. I have rewritten repetitive and 
                      redundant code into reusable functions that are used all throughout the project.</p>
                  </li>
                  <li>
                    <b>Logo Architect:</b>
                    <p>
                      I've also worked on a web application called Logo Architect, which was created in-house as a 
                      replacement for Logo Intern, a web application created by an outside vendor. It allows users to 
                      directly work with company-specific assets, and has allowed the company to save $250,000 USD 
                      annually. I optimized the loading time for over 10,000 records from 2 minutes down to 15 seconds, 
                      using lazy loading and a background handler to asynchronously load the images and cache them for 
                      5 minutes.
                    </p>
                  </li>
                  <li>
                    <b>SharePointToBlobMigrator:</b>
                    <p>
                      I've worked on an Azure Function App called SharePointToBlobMigrator, which is used for syncing 
                      SharePoint metadata to the Azure SQL Managed Instance and uploads the assets to the specified 
                      Azure Blob Storage Container with 50 MB chunking. I also worked on the CI/CD pipeline for 
                      continuous deployment of the Azure Function App whenever we update the master branch.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={`${styles.workTechnologies} ${styles.hlTechnologies}`}>
                <ul>
                  <li><b><i>Languages and Frameworks:</i></b>&ensp;C#, ASP.NET, JavaScript, SQL, MySQL, Microsoft SQL Server, VB.NET, SharePoint Online, Microsoft Graph API, Azure, Git, GitHub, Bitbucket</li>
                </ul>
              </div>
            </div>
            {/* Flowductive */}
            <div className={styles.work}>
              <div className={styles.workTitle}>
                <h2>Flowductive</h2>
              </div>
              <div className={styles.workDate}>
                <p>July 2022 - July 2023</p>
              </div>
              <div className={styles.workPosition}>
                <p>Software Development Engineer</p>
              </div>
              <div className={`${styles.workDescription} ${styles.flowductiveDescription}`}>
                <p>I worked as a Software Development Engineer for Flowductive, which is an application 
                  that allows the user to commit their time to being productive in a fun and unique way. I 
                  worked on the development of the web application of Flowductive, such as the login page, 
                  create account page, creating and adding the functionality for certain buttons, etc. The 
                  technologies being used are React.js, TypeScript, and Firebase.</p>
              </div>
              <div className={`${styles.workTechnologies} ${styles.flowductiveTechnologies}`}>
                <ul>
                  <li><b><i>Languages and Frameworks:</i></b>&ensp;React.js, TypeScript, Firebase, Git, GitHub</li>
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
                  <li><b><i>Achievements:</i></b>&ensp;Graduated with Honors, Dean's List for multiple semesters for good academic achievements/performance</li>
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
                  <div className={styles.skillsItems}>C#</div>
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
                  <div className={styles.skillsItems}>ASP.NET</div>
                  <div className={styles.skillsItems}>Node.js</div>
                  <div className={styles.skillsItems}>SQL</div>
                  <div className={styles.skillsItems}>Docker</div>
                  <div className={styles.skillsItems}>Laravel</div>
                </div>
              <div className={styles.skillsTitle}>Database:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>MySQL</div>
                  <div className={styles.skillsItems}>PostgreSQL</div>
                  <div className={styles.skillsItems}>Microsoft SQL Server</div>
                  <div className={styles.skillsItems}>Azure SQL Managed Instance</div>
                </div>
              <div className={styles.skillsTitle}>Cloud Tech:</div>
                <div className={styles.skillsItemsPadding}>
                  <div className={styles.skillsItems}>Azure</div>
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
                  <div className={styles.skillsItems}>Bitbucket</div>
                  <div className={styles.skillsItems}>Linux</div>
                </div>
            </div>
          </div>
        </section>
      </main>
    {/* </body> */}
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
