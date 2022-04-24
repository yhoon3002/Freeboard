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

    script.onload = () => {
      window.kakao.maps.load(function () {
        //
        //
        //
        // 5-1) 5번 : 카카오 지도에 마커를 표시해 주세요
        // const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        // const options = {
        //   // 지도를 생성할 때 필요한 기본 옵션
        //   center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
        //   level: 3, // 지도의 레벨(확대, 축소 정도)
        // };
        // const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // const markerPosition = new window.kakao.maps.LatLng(
        //   33.450701,
        //   126.570667
        // );
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });
        // marker.setMap(map);

        //
        //
        //
        // 5-1) 6번 : 클릭한 위치에 따라 마커가 이동되도록 만들기
        // const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        // const mapOption = {
        //   center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        //   level: 3, // 지도의 확대 레벨
        // };
        // const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        // // 지도를 클릭한 위치에 표출할 마커입니다
        // const marker = new window.kakao.maps.Marker({
        //   // 지도 중심좌표에 마커를 생성합니다
        //   position: map.getCenter(),
        // });
        // // 지도에 마커를 표시합니다
        // marker.setMap(map);
        // // 지도에 클릭 이벤트를 등록합니다
        // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent) {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     const latlng = mouseEvent.latLng;
        //     // 마커 위치를 클릭한 위치로 옮깁니다
        //     marker.setPosition(latlng);
        //     // let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        //     // message += "경도는 " + latlng.getLng() + " 입니다";
        //     // const resultDiv = document.getElementById("clickLatlng");
        //     // resultDiv.innerHTML = message;
        //   }
        // );

        //
        //
        //
        // 5-1) 7번 : 자신이 좋아하는 이미지로 변경 & 클릭한 위치에 따라 마커가 이동되도록 만들기
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        const imageSrc =
          "data:image/jpeg;base64,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"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
          image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlang = mouseEvent.latLng;

            marker.setPosition(latlang);
          }
        );
      });
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: 500, height: 500 }}></div>
    </div>
  );
}
