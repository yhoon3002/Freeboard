import { useEffect, useRef, useState } from "react";

export default function PreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://cdn.pixabay.com/photo/2022/04/21/22/50/animal-7148487_960_720.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    // document.getElementById("aaa")?.appendChild(imgTag)
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 보여주기</button>
    </>
  );
}
