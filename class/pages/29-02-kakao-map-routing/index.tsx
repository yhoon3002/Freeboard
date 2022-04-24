import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage() {
  // const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    <div>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      {/* Link 태그를 사용하게 되면, router.push를 했던 것을 tag로 사용할 수 있음 */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
    </div>
    // <a href="/29-03-kakao-map-routed">맵으로 이동하기</a>
  );
}
