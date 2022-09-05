import { useEffect } from "react";
import KakaoMapScript from "./Map";

interface PropItem {
  pLngLat: number[];
}

const MapView = ({ pLngLat }: PropItem) => {
  useEffect(() => {
    KakaoMapScript({ pLngLat });
  }, [pLngLat]);

  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default MapView;
