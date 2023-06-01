import styles from "./PreLoader.module.css";

function PreLoader() {
  return (
    <div className={styles.preLoaderContent}>
      <div className={styles.image}></div>
    </div>
  );
}

export default PreLoader;
