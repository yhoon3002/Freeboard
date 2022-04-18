// 21-02-functional-component-child와 연결
// 자식 컴포넌트 import
import FunctionalComponentChildPage from "../21-02-functional-component-child";

// 부모 컴포넌트
// 함수형이기 때문에 가능한 결과
// export default function FuncionalComponentParentPage() {
//   return <>{FunctionalComponentChildPage({ count: 123 })}</>;
// }

export default function FuncionalComponentParentPage() {
  return <FunctionalComponentChildPage count={123} />;
}
