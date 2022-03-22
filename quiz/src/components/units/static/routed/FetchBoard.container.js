import FetchBoardUI from "./FetchBoard.presenter";
import { FETCH_BOARD } from "./FetchBoard.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function FetchBoard() {
    const router = useRouter();
    console.log(router);

    // 요로코롱 하면 data를 요청하고 받을 때까지 기다려주지 않기 때문에
    // data에는 undefined가 들어와짐!
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });

    console.log(data);

    return <FetchBoardUI data={data} />;
}
