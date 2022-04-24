import Head from "next/head";
import { useEffect } from "react";

// API KEY : f2ae65aca9d9d21663976f5a914840cd;
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    // map에 담아도 되고, 안담아도 됨
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (
    <div>
      {/* Head에 script를 넣어주게 되면 body보다 먼저 실행됨 / <Script></Script> 안에 넣어주게 되면 body가 실행될 때 실행됨 */}
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd"
        ></script>
      </Head>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
