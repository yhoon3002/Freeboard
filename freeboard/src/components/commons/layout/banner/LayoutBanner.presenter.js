// Banner Presenter

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";

const LayoutBannerPresenter = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10,
        autoplaySpeed: 10,
        pauseOnHover: true,
        fade: true,
        arrows: false,
    };

    return (
        <S.Wrapper>
            <S.SliderWrapper {...settings}>
                <S.SliderItem>
                    <S.A />
                </S.SliderItem>
                <S.SliderItem>
                    <S.B />
                </S.SliderItem>
                <S.SliderItem>
                    <S.C />
                </S.SliderItem>
                <S.SliderItem>
                    <S.D />
                </S.SliderItem>
                <S.SliderItem>
                    <S.E />
                </S.SliderItem>
                <S.SliderItem>
                    <S.F />
                </S.SliderItem>
                <S.SliderItem>
                    <S.G />
                </S.SliderItem>
            </S.SliderWrapper>
        </S.Wrapper>
    );
};

export default LayoutBannerPresenter;
