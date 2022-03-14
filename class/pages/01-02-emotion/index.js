import { MyTitle, MyEmail } from "../../styles/emotion";

export default function AAA() {
    // JavaScript 쓰는 곳

    return (
        // Html 쓰는 곳

        <MyTitle>
            안녕하세요
            <MyEmail type="text" />
            <img src="./lotto.png" />
        </MyTitle>
    );
}

// import styled from "@emotion/styled";

// export default function AAA() {
//     // JavaScript 쓰는 곳
//     const Head = styled.div`
//         text-align: center;
//     `;

//     return (
//         // Html 쓰는 곳
//         <Head>
//             로그인
//             <br />
//             아이디
//             <input type="text"></input>
//             <br />
//             비밀번호
//             <input type="text"></input>
//         </Head>
//     );
// }
