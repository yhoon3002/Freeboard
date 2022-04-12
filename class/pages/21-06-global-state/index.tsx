// src - components - units - board - 21-global-container와 연결

import { useEffect, useState } from "react";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContainer />;
}
