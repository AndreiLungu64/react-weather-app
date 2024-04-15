import styles from "./temperature.module.css";

function Temperature({data}) {
  return (
    <div className={styles.box}>
       <div className={styles.subtitleIcon}><h2>Current status </h2> <ion-icon name="stats-chart"></ion-icon></div>
      <div className={styles.centerer}>
        <div className={styles.minMaxGroup}>
          <p className={styles.content}>Min <br /> <strong>{(data?.main.temp_min - 273.15).toFixed(1)}&deg;C</strong></p>
          <div className={styles.verticalLine}> </div>
          <p className={styles.content}>Max <br /><strong>{(data?.main.temp_max - 273.15).toFixed(1)}&deg;C</strong></p>
        </div>
        <div className={styles.horizontallLine}> </div>
        <p className={styles.content}>Percieved <strong>{(data?.main.feels_like - 273.15).toFixed(1)}&deg;C</strong></p>
      </div>
    </div>
  );
}

export default Temperature;
