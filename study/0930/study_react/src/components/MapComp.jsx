import React, { useEffect, useState } from 'react'

const MapComp = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      console.log('kakao maps already loaded');
      getLocation();
    } else {
      console.log('??');
      loadScript();
    }
  }, []);

  // 환경 변수 파일 가져오기
  const kakaoKey = import.meta.env.VITE_KAKAO_KEY;

  // loadScript
  const loadScript = () => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
    script.onload = () => window.kakao.maps.load(getLocation());
    document.head.appendChild(script);
  }

  const getLocation = () => {
    // HTML5 API : Geolocation (위치 정보)
    navigator.geolocation.getCurrentPosition((position) => {
      // 위도
      const lat = position.coords.latitude;
      // 경도
      const lon = position.coords.longitude;
      console.log('lat : ', lat);
      console.log('lon : ', lon);

      const mapContainer = document.querySelector('#map');
      const mapPosition = new window.kakao.maps.LatLng(lat, lon);

      const options = {
        center: mapPosition,
        level: 2
      };

      setMapData(new window.kakao.maps.Map(mapContainer, options));
      // vue
      // const map = ref(null);
      // this.map = new window.kakao.maps.Map(mapContainer, options);
      // map.value = new window.kakao.maps.Map(mapContainer, options);

      const marker = new window.kakao.maps.Marker({
        position: mapPosition // 마커의 위치를 설정
      });

      // 지도에 마커를 표시
      marker.setMap(mapData);
    }, (error) => {
      console.error('Error Code : ', error.code);
    });
  }

  return (
    <div>
      <h1>MapComp</h1>
      <div id='map' style={{ width: '100vw', height: '400px' }}></div>
      { mapData && <p>Map is loaded</p> }
    </div>
  )
}

export default MapComp