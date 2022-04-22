import * as S from "./MarketsCreate.styles";

export default function MarketsCreatePresenter() {
  return (
    <div>
      <div>상품등록하기</div>
      <div>
        <div>상품평</div>
        <input type="text" />
      </div>
      <div>
        <div>한줄요약</div>
        <input type="text" />
      </div>
      <div>
        <div>상품설명</div>
        <div>여기에 배운거 넣는부분</div>
      </div>
      <div>
        <div>판매가격</div>
        <input type="text" />
      </div>
      <div>
        <div>태그입력</div>
        <input type="text" />
      </div>
    </div>
  );
}
