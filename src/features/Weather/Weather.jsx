import { useEffect, useMemo, useState } from "react";
import styles from "./weather.module.css";
import Temperature from "../../Components/Temperature/Temperature";
import Clouds from "../../Components/Clouds/Clouds";
import Pressure from "../../Components/Pressure/Pressure.jsx";
import Wind from "../../Components/Wind/Wind.jsx";
import Humidity from "../../Components/Humidity/Humidity.jsx";
import Visibility from "../../Components/Visibility/Visibility.jsx";

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "f4493b06fc0cc397c97b7a2e55a33c38";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  // https://api.openweathermap.org/data/2.5/weather?lat=45.649490&lon=25.606550&appid=${apiKey}
  // useEffect(() => {
  //     const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  //     promise.then((res) => res.json()).then((data) => setWeather(data));
  // }, []);

  useEffect(() => {
    if (lat && lon) {
      const promise = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      promise.then((res) => res.json()).then((data) => setWeather(data));
    }
  }, [lat, lon]);

  const imageID = useMemo(() => weather?.weather?.[0]?.icon || "", [weather]);
  const currentTemp = weather ? (weather.main.temp - 273.15).toFixed(1) : "";
  const dataObject = weather ? weather : null;
  console.log(imageID);

  if (!weather) {
    return <strong>Loading Data...</strong>; // Cu acest if intrerupem randarea functiei si returnam
  }

  return (
    <>
      <div className={styles.weatherContainer}>
        <div className={styles.weatherCard}>
          <h1>
            The current temperature <br className={styles.titleBr} />
            in {weather.name} is {currentTemp}&deg;C
          </h1>
          <div className={styles.weatherIcon}>
            <img
              src={`http://openweathermap.org/img/wn/${imageID}.png`}
              alt="Weather Icon"
              width="50px"
            />
          </div>
        </div>
        <div className={styles.statisticsContainer}>
          <Temperature
            className={styles.statisticsBoxes}
            data={dataObject}
          ></Temperature>
          <Clouds className={styles.statisticsBoxes} data={dataObject} />
          <Pressure className={styles.statisticsBoxes} data={dataObject} />
          <Wind className={styles.statisticsBoxes} data={dataObject} />
          <Humidity className={styles.statisticsBoxes} data={dataObject} />
          <Visibility className={styles.statisticsBoxes} data={dataObject} />
        </div>
      </div>
    </>
  );
}
export { Weather };
