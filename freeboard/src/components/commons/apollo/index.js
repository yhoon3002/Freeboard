import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(), //어디에 저장할지 = 메모리
    });

    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
