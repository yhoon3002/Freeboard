import { atom } from "recoil";

// class - pages - 21-06-global-state에서 사용하는 것
// global State : 공용으로 사용가능
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

// class - pages - 22-01-login에서 사용하는 것
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
