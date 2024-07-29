import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p className={styles.p}>
        &copy; 2024 Sarbajit Acharjee <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
