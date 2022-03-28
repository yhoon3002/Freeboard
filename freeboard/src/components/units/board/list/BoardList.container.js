// This Is For Board List Container Component
import { useQuery } from "@apollo/client";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

const BoardListContainer = () => {
    const { data } = useQuery(FETCH_BOARDS);

    // console.log(data);

    return <BoardListPresenter data={data} />;
};

export default BoardListContainer;
