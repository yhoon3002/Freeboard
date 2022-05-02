// This Is For Markets Create Presenter Component

import * as S from "./MarketsCreate.styles";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import Uploads01Container from "../../../commons/uploads/01/Uploads01.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketsCreatePresenter(props) {
  return (
    <S.Wrapper>
      <S.RegisterProduct>
        상품 {props.isEdit ? "수정하기" : "등록하기"}
      </S.RegisterProduct>
      <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.ProductNameWrapper>
          <S.ProductName>상품평</S.ProductName>
          <S.ProductNameInput
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.isEdit && props.data?.fetchUseditem.name}
            {...props.register("name")}
          />
        </S.ProductNameWrapper>
        <S.Error>{props.formState.errors.name?.message}</S.Error>
        <S.RemarksWrapper>
          <S.Remarks>한줄요약</S.Remarks>
          <S.RemarksInput
            type="text"
            placeholder="상품 한줄요약을 작성해주세요."
            defaultValue={props.isEdit && props.data?.fetchUseditem.remarks}
            {...props.register("remarks")}
          />
        </S.RemarksWrapper>
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>
        <S.ProductContentsWrapper>
          <S.ProductContents>상품설명</S.ProductContents>
          {props.isEdit ? (
            <ReactQuill
              onChange={props.handleChange}
              value={
                props.getValues("contents") ||
                // props.data?.fetchUseditem.contents ||
                ""
              }
            />
          ) : (
            <ReactQuill onChange={props.handleChange} />
          )}
        </S.ProductContentsWrapper>
        <S.Error>{props.formState.errors.contents?.message}</S.Error>
        <S.ProductPriceWrapper>
          <S.ProductPrice>판매가격</S.ProductPrice>
          <S.ProductPriceInput
            type="text"
            placeholder="판매 가격을 입력해주세요."
            defaultValue={props.isEdit && props.data?.fetchUseditem.price}
            {...props.register("price")}
          />
        </S.ProductPriceWrapper>
        <S.ProductTagsWrapper>
          <S.ProductTags>태그입력</S.ProductTags>
          {props.isEdit ? (
            <>
              <div>{props.data?.fetchUseditem.tags}</div>
            </>
          ) : (
            <div>
              {props.hashArr?.map((el, index) => (
                <span key={index} onClick={props.deleteHashTag(index)}>
                  {el}
                </span>
              ))}
              <input type="text" onKeyUp={props.onKeyUpHashTag} />
            </div>
          )}
        </S.ProductTagsWrapper>
        <S.Error>{props.formState.errors.tags?.message}</S.Error>
        <S.ProductLocationWrapper>
          <S.ProductMap>
            <S.ProductLocation>거래위치</S.ProductLocation>
            <S.ProductLocationMap id="map"></S.ProductLocationMap>
          </S.ProductMap>
          <S.ProductLocationRight>
            <S.ProductGPSWrapper>
              <S.ProductGPS>GPS</S.ProductGPS>
              <S.ProductLngLat>
                <S.ProductLAT
                  placeholder="위도(LAT)"
                  value={props.latitude}
                ></S.ProductLAT>
                <S.ProductLocationImage src="/image/location/location2.png" />
                <S.ProductLNG
                  placeholder="경도(LNG)"
                  value={props.longitude}
                ></S.ProductLNG>
              </S.ProductLngLat>
            </S.ProductGPSWrapper>
            <S.ProductAddressWrapper>
              <S.ProductAddress>주소</S.ProductAddress>
              <S.ProductAddressInput01 type="text" />
              <S.ProductAddressInput02 type="text" />
            </S.ProductAddressWrapper>
          </S.ProductLocationRight>
        </S.ProductLocationWrapper>
        <S.ProductImageWrapper>
          <S.ProductImageUpload>사진 첨부</S.ProductImageUpload>
          {props.fileUrls?.map((el, index) => (
            <Uploads01Container
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ProductImageWrapper>
        <S.ProductMainImageSetWrapper>
          <S.ProductMainImageSet>메인사진 설정</S.ProductMainImageSet>
          <S.Radio>
            <S.Radio1 type="radio" name="setCheck" id="set" />
            <S.Label htmlFor="set">사진 1</S.Label>
            <S.Radio2 type="radio" name="setCheck" id="set2" />
            <S.Label htmlFor="set2">사진 2</S.Label>
          </S.Radio>
        </S.ProductMainImageSetWrapper>
        <S.ProductRegisterButton>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.ProductRegisterButton>
      </S.Form>
    </S.Wrapper>
  );
}
