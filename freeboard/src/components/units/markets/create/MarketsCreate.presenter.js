// This Is For Markets Create Presenter Component

import * as S from "./MarketsCreate.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function MarketsCreatePresenter(props) {
  return (
    <S.Wrapper>
      <S.RegisterProduct>상품등록하기</S.RegisterProduct>
      <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.ProductNameWrapper>
          <S.ProductName>상품평</S.ProductName>
          <S.ProductNameInput
            type="text"
            placeholder="상품명을 작성해주세요."
            {...props.register("name")}
          />
        </S.ProductNameWrapper>
        <S.Error>{props.formState.errors.name?.message}</S.Error>
        <S.RemarksWrapper>
          <S.Remarks>한줄요약</S.Remarks>
          <S.RemarksInput
            type="text"
            placeholder="상품 한줄요약을 작성해주세요."
            {...props.register("remarks")}
          />
        </S.RemarksWrapper>
        <S.ProductContentsWrapper>
          <S.ProductContents>상품설명</S.ProductContents>
          <S.ProductContentsInput
            type="text"
            {...props.register("contents")}
          ></S.ProductContentsInput>
        </S.ProductContentsWrapper>
        <S.Error>{props.formState.errors.contents?.message}</S.Error>
        <S.ProductPriceWrapper>
          <S.ProductPrice>판매가격</S.ProductPrice>
          <S.ProductPriceInput
            type="text"
            placeholder="판매 가격을 입력해주세요."
          />
        </S.ProductPriceWrapper>
        <S.ProductTagsWrapper>
          <S.ProductTags>태그입력</S.ProductTags>
          <S.ProductTagsInput
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
          />
        </S.ProductTagsWrapper>
        <S.Error>{props.formState.errors.tags?.message}</S.Error>
        <S.ProductLocationWrapper>
          <S.ProductMap>
            <S.ProductLocation>거래위치</S.ProductLocation>
            <S.ProductLocationMap id="map">지도 핑찍기</S.ProductLocationMap>
          </S.ProductMap>
          <S.ProductLocationRight>
            <S.ProductGPSWrapper>
              <S.ProductGPS>GPS</S.ProductGPS>
              <S.ProductLngLat>
                <S.ProductLAT placeholder="위도(LAT)"></S.ProductLAT>
                <S.ProductLocationImage src="/image/location/location2.png" />
                <S.ProductLNG placeholder="경도(LNG)"></S.ProductLNG>
              </S.ProductLngLat>
            </S.ProductGPSWrapper>
            <S.ProductAddressWrapper>
              <S.ProductAddress>주소</S.ProductAddress>
              <S.ProductAddressInput01
                type="text"
                onClick={props.onClickProductAddressInput01}
              />
              {props.isClickedAddress && (
                <Modal
                  visible={true}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
              <S.ProductAddressInput02 type="text" />
            </S.ProductAddressWrapper>
          </S.ProductLocationRight>
        </S.ProductLocationWrapper>
        <S.ProductImageWrapper>
          <S.ProductImageUpload>사진 첨부</S.ProductImageUpload>
          <S.ProductImages>
            <S.ProductImage type="file"></S.ProductImage>
          </S.ProductImages>
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
        <S.ProductRegisterButton isActive={props.formState.isValid}>
          등록하기
        </S.ProductRegisterButton>
      </S.Form>
    </S.Wrapper>
  );
}
