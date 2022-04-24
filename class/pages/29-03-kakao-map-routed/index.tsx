import Head from "next/head";
import { useEffect } from "react";

// API KEY : f2ae65aca9d9d21663976f5a914840cd;
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성됨
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd&autoload=false"; // 쿼리 스트링
    document.head.appendChild(script); // <head>의 자식요소로 <script>를 추가하기

    // script가 load가 되면 !
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스

        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // map에 담아도 되고, 안담아도 됨
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <div>
      {/* Head에 script를 넣어주게 되면 body보다 먼저 실행됨 / <Script></Script> 안에 넣어주게 되면 body가 실행될 때 실행됨 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
