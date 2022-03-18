import { useRouter } from "next/router";

const staticRoutingPage = () => {
    const router = useRouter();

    const onClickMove = () => {
        router.push("/05-02-static-routed");
    };

    return (
        <div>
            <button onClick={onClickMove}>페이지 이동하기</button>
        </div>
    );
};

export default staticRoutingPage;
