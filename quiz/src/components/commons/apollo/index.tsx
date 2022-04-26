import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}"); // 객체이므로 문자열로 바꿔주는 작업이 필요(JSON.parse : userInfo가 없으면 빈 객체로 만듦)
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  //
  //
  // 여기는 프리렌더링시 문제가 되는 코드
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // ///////////////////////////////////////////////////////////////////////////

  // operation : 방금 실패했던 query
  // forward : 전송
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    // 만약에 graphQLError가 있다면
    if (graphQLErrors) {
      // 에러 한개씩한개씩 반복문을 돌린다.
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크 (UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          // useMutation을 쓸 수 없음 : apollo 세팅이 안되있기 때문
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 요청하기
            // header는 스프레드 연산자로 그대로 가져오고, Authorization만 변경
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 이 부분이 실행되야 FETCH_USER_LOGGED_IN이 정상 작동됨
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
