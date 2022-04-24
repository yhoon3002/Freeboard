import "antd/dist/antd.css";
// import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Head from "next/head";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import ApolloSetting from "../src/components/commons/apollo";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgiX_96w9Q6MFav0V3Ju0FIEa2wSvqaw",
  authDomain: "hoonisite.firebaseapp.com",
  projectId: "hoonisite",
  storageBucket: "hoonisite.appspot.com",
  messagingSenderId: "725072399216",
  appId: "1:725072399216:web:4dab94aa354e420e88ddb5",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* 모든 페이지에서 map을 다운받기 때문에 비효율적임 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f2ae65aca9d9d21663976f5a914840cd"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
