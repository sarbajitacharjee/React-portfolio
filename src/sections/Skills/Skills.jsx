import PropTypes from 'prop-types';
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
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <section id="skills" className={styles.container}>
      <h1 className={`sectionTitle ${textColor}`}>Skills</h1>

      <div className={styles.skillList}>
        <SkillList icon={faHtml5} color={iconColor} skill="HTML" textColor={textColor} />
        <SkillList icon={faCss3Alt} color={iconColor} skill="CSS" textColor={textColor} />
        <SkillList icon={faJs} color={iconColor} skill="JavaScript" textColor={textColor} />
        <SkillList icon={faReact} color={iconColor} skill="React" textColor={textColor} />
        <SkillList icon={faCss3Alt} color={iconColor} skill="Tailwind CSS" textColor={textColor} />
        <SkillList icon={faNodeJs} color={iconColor} skill="Node" textColor={textColor} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={faPhp} color={iconColor} skill="PHP" textColor={textColor} />
        <SkillList icon={faGithub} color={iconColor} skill="GitHub" textColor={textColor} />
        <SkillList icon={faGitAlt} color={iconColor} skill="Git" textColor={textColor} />
        <SkillList icon={faBootstrap} color={iconColor} skill="Bootstrap" textColor={textColor} />
        <SkillList icon={faJs} color={iconColor} skill="jQuery" textColor={textColor} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={faDatabase} color={iconColor} skill="API" textColor={textColor} />
        <SkillList icon={faTerminal} color={iconColor} skill="C++" textColor={textColor} />
        <SkillList icon={faCode} color={iconColor} skill="TypeScript" textColor={textColor} />
        <SkillList icon={faPuzzlePiece} color={iconColor} skill="Problem Solving" textColor={textColor} />
      </div>
      <hr />
    </section>
  );
}

function SkillList({ icon, color, skill, textColor }) {
  return (
    <div className={styles.skillItem}>
      <FontAwesomeIcon icon={icon} color={color} size="2x" />
      <span className={`${textColor}`}>{skill}</span>
    </div>
  );
}

// Adding PropTypes validation
SkillList.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Skills;
