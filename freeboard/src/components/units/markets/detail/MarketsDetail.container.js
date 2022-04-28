// This Is For Markets Detail Container Component
import MarketsDetailPresenter from "./MarketsDetail.presenter";
import { FETCH_USED_ITEM } from "./MarketsDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Modal } from "antd";

export default function MarketsDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  console.log(data?.fetchUseditem);

  const onClickMoveToMarketList = () => {
    router.push("/markets");
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          data?.fetchUseditem?.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const options = {
                // 지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(result[0].y, result[0].x), // 지도의 중심좌표.
                level: 3, // 지도의 레벨(확대, 축소 정도)
              };

              const map = new window.kakao.maps.Map(container, options);

              // const marker = new window.kakao.maps.Marker({
              //   // 지도 중심좌표에 마커를 생성합니다
              //   position: map.getCenter(),
              // });

              const markerPosition = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
              });

              marker.setMap(map);
            }
            // 위치 지정 안해줬을 때!
            else {
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
            }
          }
        );
      });
    };
  });
  return (
    <MarketsDetailPresenter
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
    />
  );
}
