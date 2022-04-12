import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default function MyApp({ Component, pageProps }) {
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(), //어디에 저장할지 = 메모리
    });

    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />;
            </Layout>
        </ApolloProvider>
    );
}
