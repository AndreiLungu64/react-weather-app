import styles from "./humidity.module.css";
import sharedStyles from "../Temperature/temperature.module.css";
import sharedStylesText from "../Clouds/clouds.module.css";

function Humidity({data}){
    return (
        <div className={sharedStyles.box}>
          <div className={sharedStyles.subtitleIcon}><h2>Humidity </h2> <ion-icon name="water"></ion-icon></div>
          <div className={styles.centerer}>
            <p className={sharedStylesText.value}>{data?.main.humidity}%</p>
            <meter className={sharedStylesText.meterStyle} value={data?.main.humidity} min="0" max="100"></meter>
            <div>
                {data?.main.humidity && (
                <>
                    {data.main.humidity > 70 ? (<p className={sharedStylesText.message}>High 😩</p>) : 
                    data.main.humidity > 50 ? (<p className={sharedStylesText.message}>Moderate 😓</p>) : 
                    (<p className={sharedStylesText.message}>Comfortable 😊</p>)}
                </>
                )}
            </div>
          </div>
        </div>
      );
}

export default Humidity;