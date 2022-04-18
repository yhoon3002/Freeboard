import { atom } from "recoil";

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
