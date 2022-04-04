import { useRouter } from "next/router";
import LayoutHeaderPresenter from "./LayoutHeader.presenter";

const LayoutHeaderContainer = () => {
    const router = useRouter();

    const onClickLogo = () => {
        router.push("/boards");
    };

    const onClickLogin = () => {
        router.push("/login");
    };

    const onClickSignup = () => {
        router.push("/singup");
    };

    return (
        <LayoutHeaderPresenter
            onClickLogo={onClickLogo}
            onClickLogin={onClickLogin}
            onClickSignup={onClickSignup}
        />
    );
};

export default LayoutHeaderContainer;
