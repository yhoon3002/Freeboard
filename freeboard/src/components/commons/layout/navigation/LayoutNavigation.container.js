// Layout Navigation Container

import { useRouter } from "next/router";
import LayoutNavigationPresenter from "./LayoutNavigation.presenter";

const LayoutNavigationContainer = () => {
    const router = useRouter();

    const onClickNavigationMenuList = (e) => {
        if (e.target) router.push(e.target.id);
    };

    return (
        <LayoutNavigationPresenter
            onClickNavigationMenuList={onClickNavigationMenuList}
        />
    );
};

export default LayoutNavigationContainer;
