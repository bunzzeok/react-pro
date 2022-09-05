import { useState } from "react";
import LeftBar from "../leftBar/LeftBar";
import MainBody from "../mainBody/MainBody";
import "./style.css";

const BaseBody = () => {
  const [sCloseButton, setCloseButton] = useState<boolean>(false);

  const handleCloseButton = () => {
    setCloseButton(!sCloseButton);
  };
  return (
    <div className="body-box">
      <div className="tw-flex">
        <LeftBar
          pCloseButton={sCloseButton}
          pHandleCloseButton={handleCloseButton}
        ></LeftBar>

        <MainBody pCloseButton={sCloseButton}></MainBody>
      </div>
    </div>
  );
};

export default BaseBody;
