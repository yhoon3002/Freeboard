import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo/index";

export default function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <ApolloSetting>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
        </RecoilRoot>
    );
}
