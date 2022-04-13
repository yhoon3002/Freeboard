import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 더이상 지원되지 않음
  // if(process.browser){

  // } else{
  //   // 프론트엔드 서버일때 (yarn dev)일 때
  // }

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
  useEffect(() => {
    const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(mylocalstorageAccessToken || "");
  }, []);

  // 여기는 프리렌더링시 문제가 되는 코드
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // ///////////////////////////////////////////////////////////////////////////

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
