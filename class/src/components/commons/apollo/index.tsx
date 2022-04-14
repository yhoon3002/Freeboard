import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더이상 지원되지 않음
  // if(process.browser){

  // } else{
  //   // 프론트엔드 서버일때 (yarn dev)일 때
  // }

  //
  // 2. 두번째 방법!
  if (typeof window !== "undefined") {
    // window : browser
    // browser라면
    console.log("여기는 브라우저");

    // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstorageAccessToken || "");
  } else {
    // frontend 서버라면
    console.log("여기는 프론트엔드 서버 (yarn dev)");
  }

  // 3. 세번째 방법!
  // 새로고침 했을 때 accessToken이 날아가므로 localStorage에 있는 accessToken을 뽑아서 global State에 저장해줌
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}"); // 객체이므로 문자열로 바꿔주는 작업이 필요(JSON.parse : userInfo가 없으면 빈 객체로 만듦)
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  //
  //
  // 여기는 프리렌더링시 문제가 되는 코드
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // ///////////////////////////////////////////////////////////////////////////

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 이 부분이 실행되야 FETCH_USER_LOGGED_IN이 정상 작동됨
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
