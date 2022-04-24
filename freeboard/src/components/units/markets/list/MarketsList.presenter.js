import * as S from "./MarketsList.styles";

export default function MarketListPresenter(props) {
  return (
    <S.Wrapper>
      <S.MenuBar>
        <S.SoldingProduct>판매중상품</S.SoldingProduct>
        <S.SoldProduct>판매된상품</S.SoldProduct>
        <S.SearchProduct
          type="text"
          placeholder="제품을 검색해주세요."
        ></S.SearchProduct>
        <S.DateSelectBox>
          할 거 : 날짜 선택 박스 넣기(라이브러리)
        </S.DateSelectBox>
        <S.SearchProductButton>검색</S.SearchProductButton>
      </S.MenuBar>
      <S.Line></S.Line>
      <S.ItemList>
        {props?.data?.fetchUseditems.map((el) => (
          <S.ProductKey
            onClick={props.onClickProduct(el)}
            id={el._id}
            key={el._id}
          >
            <S.ProductImage
              src={
                el.images[0]
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "./image/noimg/noimg.png"
              }
            ></S.ProductImage>
            <S.ProductWrapper>
              <S.ProductInfo>
                <S.ProductName>{el.name}</S.ProductName>
                {el?.remarks ? (
                  <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
                ) : (
                  <S.NoProductRemakrs></S.NoProductRemakrs>
                )}
                <S.TagsWrapper>
                  {el.tags[0] ? (
                    el.tags.map((el) => <S.ProductTags>{el}</S.ProductTags>)
                  ) : (
                    <S.NoProductTags></S.NoProductTags>
                  )}
                </S.TagsWrapper>
                <S.ProductSellerPickedCount>
                  <S.ProductSeller>
                    <S.ProductSellerImage src="./image/grayprofile/grayprofile.png" />
                    {el.seller.name}
                  </S.ProductSeller>
                  <S.ProductPickedCount>
                    <S.ProductPickedCountImage src="./image/yellowheart/yellowheart.png" />
                    {el.pickedCount}
                  </S.ProductPickedCount>
                </S.ProductSellerPickedCount>
              </S.ProductInfo>
            </S.ProductWrapper>
            <S.ProductPrice>
              <S.ProductPriceImage src="./image/price/price2.png" />
              {el.price} 원
            </S.ProductPrice>
          </S.ProductKey>
        ))}
      </S.ItemList>
    </S.Wrapper>
  );
}
