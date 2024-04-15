import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./features/Weather/Weather";
import styles from "./app.module.css";

// ../features/Weather/Weather.jsx

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather/>}/>
          <Route path="*" element={<h1></h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export {App};
