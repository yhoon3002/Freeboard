// @ts-ignore
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { accessTokenState } from "../store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다 !");

      router.push("/login");
    }
  });

  // 새로고침 1번방법 : 비효율적
  // useEffect(() => {
  //   if (!accessToken) {
  //     getAccessToken().then((newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //       if (!newAccessToken) {
  //         alert("로그인 후 이용 가능합니다 !");

  //         router.push("/login");
  //       }
  //     });
  //   }
  // });

  // 새로고침 2번방법
  // useEffect(() => {
  //   if (!isLoaded && !accessToken) {
  //     alert("로그인 후 이용 가능합니다 !");

  //     router.push("/login");
  //   }
  // });

  return <Component {...props} />;
};
