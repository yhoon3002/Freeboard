import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const SoldingProduct = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  cursor: pointer;
`;

export const SoldProduct = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  margin-left: 20px;
  cursor: pointer;
`;

export const SearchImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const SearchProduct = styled.input`
  width: 300px;
  height: 41px;
  background-image: url("./image/scope/scope.png");
  background-position: 7px center;
  background-repeat: no-repeat;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;

  padding-left: 30px;
  margin-left: 300px;
`;

export const DateSelectBox = styled.div`
  margin-left: 25px;
`;

export const SearchProductButton = styled.button`
  width: 80px;
  margin-left: auto;
  background: #000000;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  border: none;
  cursor: pointer;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  /* border-top: 1px solid black;
  border-bottom: 1px solid black; */
`;

export const ProductKey = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

export const ProductWrapper = styled.div``;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 40px;
`;

export const Line = styled.div`
  width: 1200px;
  border-top: 1px solid black;
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductRemarks = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const NoProductRemakrs = styled.div`
  height: 35.141px;
`;

export const TagsWrapper = styled.div`
  display: flex;
`;

export const ProductTags = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  margin-bottom: 25px;
  margin-right: 20px;
`;

export const NoProductTags = styled.div`
  height: 50.141px;
  background-color: red;
`;

export const ProductSellerPickedCount = styled.div`
  display: flex;
`;

export const ProductSeller = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  margin-right: 22px;
`;

export const ProductSellerImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const ProductPickedCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const ProductPickedCountImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const ProductPrice = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ProductPriceImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 11px;
`;
