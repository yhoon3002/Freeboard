// Pagination 01 Presenter
import * as S from "./Pagination01.styles";

const Pagination01Presenter = (props) => {
    return (
        <S.Wrapper>
            <S.Arrow onClick={props.onClickPrevArrow}>{`< 이전페이지`}</S.Arrow>
            {new Array(10).fill(1).map(
                (_, index) =>
                    props.startPage + index <= props.lastPage && (
                        <S.PageNumber
                            key={props.startPage + index}
                            onClick={props.onClickPageNumber}
                            id={String(props.startPage + index)}
                            isActive={
                                props.startPage + index === props.currentPage
                            }
                        >
                            {props.startPage + index}
                        </S.PageNumber>
                    )
            )}
            <S.Arrow onClick={props.onClickNextArrow}>{`다음페이지 >`}</S.Arrow>
        </S.Wrapper>
    );
};

export default Pagination01Presenter;
