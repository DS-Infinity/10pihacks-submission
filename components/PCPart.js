import styles from '../styles/PCPart.module.css';

export default function PCPart({ url, heading, text }) {
  return (
    <div className={styles.pcpartcontainer}>
      <div className={styles.partechoar}>
        <iframe className={styles.partframe} src={url}></iframe>
      </div>
      <div className={styles.information}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
