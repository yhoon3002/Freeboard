import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Layout = (props) => {
    return (
        <Wrapper>
            <LayoutHeaderContainer />
            <LayoutBannerContainer />
            <LayoutNavigationContainer />
            <div>{props.children}</div>
        </Wrapper>
    );
};

export default Layout;
