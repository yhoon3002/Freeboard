import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";

const Layout = (props) => {
    return (
        <>
            <LayoutHeaderContainer />
            <LayoutBannerContainer />
            <LayoutNavigationContainer />
            <div>{props.children}</div>
        </>
    );
};

export default Layout;
