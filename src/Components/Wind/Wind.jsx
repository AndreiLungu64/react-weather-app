import styles from "./wind.module.css";
import sharedStyles from "../Temperature/temperature.module.css";
import sharedStylesText from "../Clouds/clouds.module.css";
import stylesIcon from "../Temperature/temperature.module.css";

function PressHum({data}){
    return (
        <div className={sharedStyles.box}>
          <div className={stylesIcon.subtitleIcon}><h2>Wind speed </h2> <ion-icon name="flag"></ion-icon></div>
          <div className={sharedStyles.centerer}>
            <p className={sharedStylesText.value}>{data?.wind.speed}km/h</p>
            <meter className={sharedStylesText.meterStyle} value={data?.wind.speed} min="0" max="50"></meter>
            <div>
                {data?.wind.speed && (
                <>
                    {data.wind.speed > 30 ? (<p className={sharedStylesText.message}>Strong Gale/Storm 🌪️</p>) : 
                    data.wind.speed > 10 ? (<p className={sharedStylesText.message}>Moderate Wind 💨</p>) : 
                    (<p className={sharedStylesText.message}>Light Breeze 🌬️</p>)}
                </>
                )}
            </div>
          </div>
        </div>
      );
}

export default PressHum;