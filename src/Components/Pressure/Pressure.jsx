import styles from "./pressure.module.css";
import sharedStyles from "../Temperature/temperature.module.css";
import sharedStylesText from "../Clouds/clouds.module.css";
import stylesIcon from "../Temperature/temperature.module.css";

function Pressure({data}){
    return (
        <div className={sharedStyles.box}>
          <div className={stylesIcon.subtitleIcon}><h2>Pressure </h2> <ion-icon name="balloon"></ion-icon></div>
          <div className={sharedStyles.centerer}>
            <p className={sharedStylesText.value}>{data?.main.pressure}hPa</p>
            <meter className={sharedStylesText.meterStyle} value={data?.main.pressure} min="950" max="1030"></meter>
            <div>
                {data?.main.pressure && (
                <>
                    {data.main.pressure > 1000 ? (<p className={sharedStylesText.message}>Stable ⛅</p>) : 
                    data.main.pressure > 970 ? (<p className={sharedStylesText.message}>Changing 🌦️</p>) : 
                    (<p className={sharedStylesText.message}>Extreme 🌩️</p>)}
                </>
                )}
            </div>
          </div>
        </div>
      );
}

export default Pressure;