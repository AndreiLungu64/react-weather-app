import sharedStyles from "../Temperature/temperature.module.css";
import styles from "./clouds.module.css";
import stylesIcon from "../Temperature/temperature.module.css";

function Clouds({data}){
    return (
        <div className={sharedStyles.box}>
          <div className={stylesIcon.subtitleIcon}><h2>Cloudiness </h2> <ion-icon name="cloud"></ion-icon></div>
          <div className={sharedStyles.centerer}>
            <p className={styles.value}>{data?.clouds.all}%</p>
            <meter className={styles.meterStyle} value={data?.clouds.all} min="0" max="100"></meter>
            <div>
                {data?.clouds.all && (
                <>
                    {data.clouds.all > 70 ? (<p className={styles.message}>Very Cloudy ☁️☁️</p>) : 
                    data.clouds.all > 30 ? (<p className={styles.message}>Cloudy ☁️</p>) : 
                    (<p className={styles.message}>Clear Sky 🌅</p>)}
                </>
                )}
            </div>
          </div>
        </div>
      );
}

export default Clouds;