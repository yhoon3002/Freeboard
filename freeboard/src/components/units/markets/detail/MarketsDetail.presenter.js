// This Is For Markets Detail Presenter Component
import * as S from "./MarketsDetail.styles";
import { Tooltip } from "antd";
import Dompurify from "dompurify";

export default function MarketsDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.Wrapper2>
        <S.Top>
          <S.SellerImage
            src={
              props.data?.fetchUseditem.seller.picture
                ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
                : "/image/profile/profile2.png"
            }
          />
          <S.SellerDate>
            <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller>
            <S.Date>
              Date : {props.data?.fetchUseditem?.createdAt.slice(0, 10) + " "}
              {props.data?.fetchUseditem?.createdAt.slice(11, 19)}
            </S.Date>
          </S.SellerDate>
          <S.TopRight>
            <S.ClipImage src="/image/clip/clip.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem?.useditemAddress?.address} ${props.data?.fetchUseditem?.useditemAddress?.addressDetail}`}
            >
              <S.LocationImage src="/image/location/location2.png" />
            </Tooltip>
          </S.TopRight>
        </S.Top>
        <S.Line />
        <S.MiddleFirst>
          <S.ItemInfo>
            <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
            <S.ItemName>{props.data?.fetchUseditem?.name}</S.ItemName>
            <S.ItemPrice>{props.data?.fetchUseditem?.price} 원</S.ItemPrice>
          </S.ItemInfo>
          <S.PickedCountWrapper>
            <S.PickedCountImage src="/image/yellowheart/yellowheart.png"></S.PickedCountImage>
            <S.PickedCount>0</S.PickedCount>
          </S.PickedCountWrapper>
        </S.MiddleFirst>
        <S.Carousel>캐러셀 들어갈 자리(라이브러리 써라)</S.Carousel>
        <S.MiddleSecond>
          <S.ItemImage>
            {props.data?.fetchUseditem?.images
              ?.filter((el) => el)
              .map((el) => (
                <S.ItemPhoto
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ItemImage>
        </S.MiddleSecond>
        <S.MiddleThird>
          <S.ContentsWrapper>
            {process.browser && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            )}
          </S.ContentsWrapper>
          <S.Tags>
            {props.data?.fetchUseditem?.tags[0] ? (
              props.data?.fetchUseditem?.tags.map((el) => (
                <S.ProductTags>{el}</S.ProductTags>
              ))
            ) : (
              <S.NoProductTags></S.NoProductTags>
            )}
          </S.Tags>
        </S.MiddleThird>
        <S.Line />
        <S.KakaoMap>
          <S.Map id="map"></S.Map>
        </S.KakaoMap>
        <S.Line />
        <S.ButtonList>
          <S.ToListbutton onClick={props.onClickMoveToMarketList}>
            목록으로
          </S.ToListbutton>
          <S.ToBuyButton>구매하기</S.ToBuyButton>
        </S.ButtonList>
      </S.Wrapper2>
      <S.LongLine />
    </S.Wrapper>
  );
}
