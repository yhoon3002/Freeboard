import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import Uploads01Presenter from "./Uploads01.presenter";
import { checkValidationImage } from "./Uploads01.validation";

export default function Uploads01Container(props) {
    const fileRef = useRef(null);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const onChangeFile = async (e) => {
        const file = checkValidationImage(e.target.files?.[0]);
        if (!file) return;

        try {
            const result = await uploadFile({ variables: { file } });
            props.onChangeFileUrls(result.data.uploadFile.url, props.index);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Uploads01Presenter
            fileRef={fileRef}
            fileUrl={props.fileUrl}
            defaultFileUrl={props.defaultFileUrl}
            onClickUpload={onClickUpload}
            onChangeFile={onChangeFile}
        />
    );
}
