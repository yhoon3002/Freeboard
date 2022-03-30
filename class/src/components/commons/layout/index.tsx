import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSideBar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  "/12-03-modal-refactoring",
  // ...
  // ...
  // ...
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSideBar>여기는 사이드바입니다</LayoutSideBar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
