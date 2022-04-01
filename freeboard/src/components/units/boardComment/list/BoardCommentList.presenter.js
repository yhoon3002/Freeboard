// This Is For Board Comment List Presenter

import * as S from "./BoardCommentList.styles";

const BoardCommentListPresenter = (props) => {
    return (
        <div>
            {props?.data?.fetchBoardComments?.map((el) => {
                <div key={el._id}>
                    <div> 나오나? </div>
                    <div>{el.writer}</div>
                    <div>{el.contents}</div>
                    <div>{el.createdAt}</div>
                </div>;
            })}
        </div>
    );
};

export default BoardCommentListPresenter;
