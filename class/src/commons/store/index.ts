import { atom } from "recoil";

// 게시판 관련
// class - pages - 21-06-global-state에서 사용
// global State : 공용으로 사용가능
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

// 로그인 관련
// class - pages - 22-01-login에서 사용
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// class - pages - 24-01-login-use-apollo-clinet에서 사용
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});
