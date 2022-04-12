// class - pages - 21-06-global-state와 연결

import { atom } from "recoil";

// global State : 공용으로 사용가능
export const isEditState = atom({
  key: "isEditState",
  default: false,
});
