import {
    WriterInput,
    TitleInput,
    ContentsInput,
    ApplyButton,
} from "./CreateBoard.styles";
export default function CreateBoardUI(props) {
    return (
        <>
            {/* <div>{data}</div> */}
            <WriterInput type="text" onChange={props.onChangeWriter} />
            <br />
            <TitleInput type="text" onChange={props.onChangeTitle} />
            <br />
            <ContentsInput type="text" onChange={props.onChangeContents} />
            <br />
            <ApplyButton
                onClick={props.callGraphqlApi}
                isActive={props.isActive}
            >
                GRAPHQL-API 요청하기
            </ApplyButton>
        </>
    );
}
