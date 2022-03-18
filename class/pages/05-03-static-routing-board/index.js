import { useRouter } from "next/router";

const staticRoutingPage = () => {
    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/05-04-static-routed-board/2");
    };

    const onClickMove2 = () => {
        router.push("/05-04-static-routed-board/3");
    };

    const onClickMove3 = () => {
        router.push("/05-04-static-routed-board/7");
    };

    return (
        <div>
            <button onClick={onClickMove1}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>3번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>7번 게시글로 이동하기</button>
        </div>
    );
};

export default staticRoutingPage;
