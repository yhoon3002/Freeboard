import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function MyApp({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
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
