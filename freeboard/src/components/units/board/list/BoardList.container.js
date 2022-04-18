// This Is For Board List Container Component

import BoardListPresenter from "./BoardList.presenter";
import Pagination01Container from "../../../commons/pagination/01/Pagination01.conatiner";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const BoardListContainer = () => {
    const router = useRouter();

    const { data, refetch } = useQuery(FETCH_BOARDS);
    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

    const onClickMovetoDetail = (e) => {
        if (e.target) {
            router.push(`/boards/${e.target.id}`);
        }
    };

    return (
        <div>
            <BoardListPresenter
                data={data}
                onClickMovetoDetail={onClickMovetoDetail}
            />
            <Pagination01Container
                refetch={refetch}
                count={dataBoardsCount?.fetchBoardsCount}
                onClickMovetoDetail={onClickMovetoDetail}
            />
        </div>
    );
};

export default BoardListContainer;
