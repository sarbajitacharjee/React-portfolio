import styles from './ProjectsStyles.module.css';
import logo from '../../assets/Hogwarts-bg.png';
import freedom from '../../assets/freedom.png';
import Weather from '../../assets/weather.png';
// import Calc from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logo}
          link="https://sarbajitacharjee.github.io/Hogwarts-School/"
          h3="Hogwarts"
          p="Ancient-website"
        />
        <ProjectCard
          src={freedom}
          link="https://freedom-fighters-opal.vercel.app/"
          h3="FreeDom Fighters"
          p="Tribute To Freedom Fighters"
        />
        <ProjectCard
          src={Weather}
          link="https://weather-forecast-site.vercel.app/"
          h3="Weather App"
          p="Get 5 days Forecast"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
