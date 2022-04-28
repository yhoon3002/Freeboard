import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      alert("파일이 없습니다 !!");
      return;
    }

    // ↓ 임시 URL 형태로 만들어준다, DB에 저장가능하지만,
    // ↓ size가 image size만큼 되기 때문에 엄청 크다.
    // ↓ 임시 미리보기 주소임
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </div>
  );
}
