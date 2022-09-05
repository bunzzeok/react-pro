const { kakao } = window;

type LATLNG = {
  pLngLat: number[];
};

export default function KakaoMapScript({ pLngLat }: LATLNG) {
  const sContainer = document.getElementById("myMap");
  const sOptions = {
    center: new kakao.maps.LatLng(pLngLat[0], pLngLat[1]),
    level: 3,
  };

  const map = new kakao.maps.Map(sContainer, sOptions);

  let markerPosition = new kakao.maps.LatLng(pLngLat[0], pLngLat[1]);

  // 마커를 생성
  let sMarker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커를 지도 위에 표시
  sMarker.setMap(map);
}
