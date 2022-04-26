// This Is For Markets Create Container Component

import MarketsCreatePresenter from "./MarketsCreate.presenter";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./MarketsCreate.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  remarks: yup.string().required("상품 한줄 요약을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
  tags: yup.string().required("태그를 입력해주세요."),
});

export default function MarketsCreateContainer() {
  const [latlng, setLatLng] = useState({ x: "", y: "" });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };

  // 카카오 맵
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성됨
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd&autoload=false"; // 쿼리 스트링
    document.head.appendChild(script); // <head>의 자식요소로 <script>를 추가하기

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);
        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <MarketsCreatePresenter
      schema={schema}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      latlng={latlng}
    />
  );
}
