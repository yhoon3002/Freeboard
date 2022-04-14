import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
    width: 100%;
    margin: 0px auto;
`;

const HIDDEN = ["/login"];

const Layout = (props) => {
    const router = useRouter();
    const isHidden = HIDDEN.includes(router.asPath);

    return (
        <>
            <Wrapper>
                {!isHidden && <LayoutHeaderContainer />}
                {!isHidden && <LayoutBannerContainer />}
                {!isHidden && <LayoutNavigationContainer />}
                <div>{props.children}</div>
            </Wrapper>
        </>
    );
};

export default Layout;
