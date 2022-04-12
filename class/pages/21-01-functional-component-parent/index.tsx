// 21-02-functional-component-child와 연결
// 자식 컴포넌트 import
import FuncionalComponentChildPage from "../21-02-functional-component-child";

// 부모 컴포넌트
export default function FuncionalComponentParentPage() {
  // return 윗줄과 아랫줄은 동일한 결과를 보임
  // 함수형이기 때문에 가능한 결과
  // return <FuncionalComponentChildPage count={123} />;
  return <>{FuncionalComponentChildPage({ count: 123 })}</>;
}
