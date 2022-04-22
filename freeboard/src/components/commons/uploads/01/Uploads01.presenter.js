import * as S from "./Uploads01.styles";

export default function Uploads01Presenter(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com./${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>+</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
