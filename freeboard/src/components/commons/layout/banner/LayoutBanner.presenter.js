// Banner Presenter

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";

const LayoutBannerPresenter = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <S.Wrapper>
            <S.SliderWrapper {...settings}>
                <div>
                    <S.SliderItem>안녕하세요1</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>안녕하세요2</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>안녕하세요3</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>안녕하세요4</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>안녕하세요5</S.SliderItem>
                </div>
            </S.SliderWrapper>
        </S.Wrapper>
    );
};

export default LayoutBannerPresenter;
