import React, { useEffect } from "react";
import BaseHeader from "./component/baseHeader/BaseHeader";
import BaseBody from "./component/baseBody/BaseBody";
import "./assets/globalStyle.css";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className="default-jost-font">
      <div className="tw-fixed tw-w-full tw-z-10">
        <BaseHeader />
      </div>
      <div className="tw-pt-16">
        <BaseBody />
      </div>
    </div>
  );
}

export default App;
