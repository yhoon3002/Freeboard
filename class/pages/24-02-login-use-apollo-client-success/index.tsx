// import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userInfo] = useRecoilState(userInfoState); // const [userInfo, setUserInfo]이지만, setUserInfo를 사용하지 않으므로, 지워주게 된 결과

  return (
    <>
      <div>{userInfo.name}님 환영합니다.</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
