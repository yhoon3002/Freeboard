export default function MapElPage() {
  // 1. 기본 방법
  // map은 각각을 실행하고 나서 return함
  // ["철수", "영희", "훈이"].map((el) => el + "어린이");
  // forEach는 return은 안되고 실행되고 끝남, forEach가 map보다는 빠름
  console.log("1번 방법 : 기본 방법");
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el :", el);
    console.log("index :", index);
  });

  // 2. 매개변수 변경한 방법
  console.log(" ");
  console.log("2번 방법 : 매개변수 변경한 방법");
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el :", asdf);
    console.log("index :", qwer);
  });

  // 3. 함수선언식 방법
  console.log(" ");
  console.log("3번 방법: 함수선언식 방법");
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el :", asdf);
    console.log("index :", qwer);
  });

  // 4. el과 index 바꾸기
  console.log(" ");
  console.log("4번 방법: el과 index 바꾸기");
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el :", el);
    console.log("index :", index);
  });
  // 결과로 index에는 "철수", "영희", "훈이"가 나오게 되고,
  // el에는 0, 1, 2가 나오게 됨

  return <div>el 알아보기!!</div>;
}
