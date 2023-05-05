import { React, useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import FaceSection from "./Face-section";
import PageSection from "./Page-section";
import ScrollDowmArrow from "./scrolldown-arrow";

function App() {
  const location = useLocation();
  const [locationChanged, setLocationChanged] = useState(null);

  useEffect(() => {
    setLocationChanged(false);

    const timeOut = setTimeout(() => {
      setLocationChanged(true);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [location]);

  return (
    <body>
      <div className="app-outermost-container">
        <div className="nav-and-facesection-wrap">
          <Nav />
          <FaceSection />
        </div>
        <PageSection />
      </div>
      {locationChanged || <ScrollDowmArrow />}
    </body>
  );
}

export default App;
