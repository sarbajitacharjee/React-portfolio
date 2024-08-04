import PropTypes from 'prop-types';  // Import PropTypes
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faNodeJs, faPhp, faGithub, faGitAlt,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faPuzzlePiece, faTerminal } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? '#000' : '#fff';

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList icon={faHtml5} color={iconColor} skill="HTML" />
        <SkillList icon={faCss3Alt} color={iconColor} skill="CSS" />
        <SkillList icon={faJs} color={iconColor} skill="JavaScript" />
        <SkillList icon={faCss3Alt} color={iconColor} skill="Tailwind CSS" />
        <SkillList icon={faReact} color={iconColor} skill="React" />
        <SkillList icon={faNodeJs} color={iconColor} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={faPhp} color={iconColor} skill="PHP" />
        <SkillList icon={faGithub} color={iconColor} skill="GitHub" />
        <SkillList icon={faGitAlt} color={iconColor} skill="Git" />
        <SkillList icon={faBootstrap} color={iconColor} skill="Bootstrap" />
        <SkillList icon={faJs} color={iconColor} skill="jQuery" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={faDatabase} color={iconColor} skill="API" />
        <SkillList icon={faTerminal} color={iconColor} skill="C++" />
        <SkillList icon={faCode} color={iconColor} skill="TypeScript" />
        <SkillList icon={faPuzzlePiece} color={iconColor} skill="Problem Solving" />
      </div>
      <hr />
    </section>
  );
}

function SkillList({ icon, color, skill }) {
  return (
    <div className={styles.skillItem}>
      <FontAwesomeIcon icon={icon} color={color} size="2x" />
      <span>{skill}</span>
    </div>
  );
}

// Adding PropTypes validation
SkillList.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default Skills;
