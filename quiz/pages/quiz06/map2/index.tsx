import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage() {
  return (
    <div>
      <Link href="/quiz06/map1">
        <a>이동하기</a>
      </Link>
    </div>
  );
}
