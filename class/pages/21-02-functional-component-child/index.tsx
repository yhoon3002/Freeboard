// 자식 컴포넌트

// 매개변수 이름이 꼭 props일 필요는 없음.
// 그저 매개변수의 이름이기 때문에 aaa, bbb, ... 등 어떤 이름으로 설정해도 무관함
export default function FuncionalComponentChildPage(aaa: any) {
  return <div>나의 카운트는: {aaa.count}</div>;
}
