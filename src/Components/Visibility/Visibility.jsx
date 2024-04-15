import styles from "./visibility.module.css";
import sharedStyles from "../Temperature/temperature.module.css";
import sharedStylesText from "../Clouds/clouds.module.css";
import stylesIcon from "../Temperature/temperature.module.css";

function Visibility({data}){

    function timestampToTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }
    
    const sunrise = timestampToTime(data?.sys.sunrise);
    const sunset = timestampToTime(data?.sys.sunset);

    return (
        <div className={sharedStyles.box}>
            <div className={stylesIcon.subtitleIcon}><h2>Sunrise & Sunset </h2> <ion-icon name="sunny"></ion-icon></div>
          <div className={sharedStyles.centerer}>

            <div className={styles.sunrise}>
                <div className={styles.arrowContainer}><ion-icon  name="arrow-up"></ion-icon></div>
                <p className={`${sharedStylesText.value}  ${styles.hours}`}>{sunrise}</p>
            </div>

            <div className={styles.sunset}>
                <div className={styles.arrowContainer}><ion-icon name="arrow-down"></ion-icon></div>
                <p className={`${sharedStylesText.value}  ${styles.hours}`}>{sunset}</p>
            </div>
          </div>
        </div>
      );
}

export default Visibility;