// This Is For Markets Create Container Component

import { CREATE_USED_ITEM, UPLOAD_FILE } from "./MarketsCreate.queries";
import MarketsCreatePresenter from "./MarketsCreate.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  remarks: yup.string().required("상품 한줄 요약을 입력해주세요."),
  price: yup.number().required("가격을 입력해주세요."),
});

export default function MarketsCreateContainer() {
  const router = useRouter();

  // 주소용 state
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [coordToAddress, setCoordToAddress] = useState("");

  // 사진
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // 해시태그
  const [hashArr, setHashArr] = useState([]);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  // form
  const { register, handleSubmit, formState, setValue, getValues, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  // 카카오 맵
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성됨
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd&autoload=false&libraries=services"; // 쿼리 스트링
    document.head.appendChild(script); // <head>의 자식요소로 <script>를 추가하기

    script.onload = () => {
      window.kakao.maps.load(function () {
        const geocoder = new kakao.maps.services.Geocoder();

        const mapContainer = document.getElementById("map"); // 지도를 표시할 div

        const mapOption = {
          center: new window.kakao.maps.LatLng(
            37.50156462400385,
            126.76828035033718
          ), // 지도의 중심좌표
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

        geocoder.addressSearch(
          // 지도에 클릭 이벤트를 등록합니다
          // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
          window.kakao.maps.event.addListener(
            map,
            "click",
            function (mouseEvent) {
              // 클릭한 위도, 경도 정보를 가져옵니다
              const latlng = mouseEvent.latLng;

              setLatitude(latlng.Ma);
              setLongitude(latlng.La);
              // 마커 위치를 클릭한 위치로 옮깁니다
              marker.setPosition(latlng);
            }
          )
        );
      });
    };
    // console.log(coordToAddress);
  }, []);

  // 상품 설명
  const handleChange = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

  // 게시글 등록 버튼에 사용되는 함수
  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            tags: hashArr,
            images: fileUrls,
            // useditemAddress: {
            //   zipcode,
            //   address,
            //   addressDetail,
            // },
          },
        },
      });
      console.log(result);
      Modal.success({ content: "상품 등록에 성공했습니다! " });
      router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error) Modal.error({ content: error.message });
    }
  };

  // 모달
  const handleOk = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCancel = () => {
    setIsOpen((prev) => !prev);
  };

  // 태그
  const onKeyUpHashTag = (event) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  // 태그 삭제
  const deleteHashTag = (index) => () => {
    hashArr.splice(index, 1);
    setHashArr([...hashArr]);
  };

  return (
    <MarketsCreatePresenter
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      latitude={latitude}
      longitude={longitude}
      fileUrls={fileUrls}
      getValues={getValues}
      handleChange={handleChange}
      onClickSubmit={onClickSubmit}
      handleOk={handleOk}
      handleCancel={handleCancel}
      hashArr={hashArr}
      setHashArr={setHashArr}
      onKeyUpHashTag={onKeyUpHashTag}
      deleteHashTag={deleteHashTag}
    />
  );
}
