// Layout Navigation Presenter
import * as S from "./LayoutNavigation.styles";

const NavigationMenus = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/myPage" },
  { name: "영화검색", page: "/" },
];

const LayoutNavigationPresenter = (props) => {
  return (
    <S.Wrapper>
      {NavigationMenus.map((el) => (
        <div key={el.page}>
          <S.NavigationMenuList
            id={el.page}
            onClick={props.onClickNavigationMenuList}
          >
            {el.name}
          </S.NavigationMenuList>
        </div>
      ))}
    </S.Wrapper>
  );
};

export default LayoutNavigationPresenter;
