import React, { Suspense } from 'react';
import styles from './ProjectsStyles.module.css';
import logo from '../../assets/Hogwarts-bg.png';
import freedom from '../../assets/Net.webp';
import Weather from '../../assets/weather.png';
import Calc from '../../assets/Convert.png';
import Word from '../../assets/words.jpg';
import Quote from '../../assets/Quote.png';

const ProjectCard = React.lazy(() => import('../../common/ProjectCard'));

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <span style={{color:"red", fontSize:"24px"}}>Click Icon To View</span><br/><br/>
      <div className={styles.projectsContainer}>
        <Suspense fallback={<div>Loading projects...</div>}>
          <ProjectCard
            src={logo}
            link="https://sarbajitacharjee.github.io/Hogwarts-School/"
            h3="Hogwarts"
            p="Ancient-website"
            loading="lazy"
          />
          <ProjectCard
            src={freedom}
            link="https://sarbajitacharjee.github.io/Netflix_Clone/"
            h3="Netflix Clone"
            p="Responsive Netflix Website Clone"
            loading="lazy"
          />
          <ProjectCard
            src={Weather}
            link="https://weather-forecast-site.vercel.app/"
            h3="Weather App"
            p="Get 5 days Forecast"
            loading="lazy"
          />
          <ProjectCard
            src={Calc}
            link="https://online-converter-calculator.vercel.app/"
            h3="Converter"
            p="Convert Unit and Calculator App"
            loading="lazy"
          />
          <ProjectCard
            src={Word}
            link="https://dictionary-phi-three.vercel.app/"
            h3="Dictionary"
            p="Word Galaxy Dictionary"
            loading="lazy"
          />
          <ProjectCard
            src={Quote}
            link="https://quote-generator-gilt-beta.vercel.app/"
            h3="Quote Generator"
            p="Get Quote For any Category"
            loading="lazy"
          />
        </Suspense>
      </div>
    </section>
  );
}

export default Projects;
