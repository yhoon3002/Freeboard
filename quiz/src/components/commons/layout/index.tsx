import BannerUI from "./banner";
import NavigationUI from "./navigation";
import SidebarUI from "./sidebar";
import HeaderUI from "./header";
import FooterUI from "./footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  height: 500px;
`;

const Wrapper = styled.div`
  @font-face {
    font-family: "myfont";
    src: url(/fonts/scifibit.ttf);
  }
  width: 1520px;

  /* 전체 스타일 지정해줄때 */
  font-family: "myfont";
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <Wrapper>
      <HeaderUI />
      <BannerUI />
      <NavigationUI />
      <BodyWrapper>
        <SidebarUI />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <FooterUI />
    </Wrapper>
  );
}
