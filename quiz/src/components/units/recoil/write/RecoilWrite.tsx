import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { isEditState } from "../../../../../pages/homework/quiz-21-03-recoil/edit/index";

export default function RecoilWirtePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
    </>
  );
}
