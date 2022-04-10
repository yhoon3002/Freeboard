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
            <Slider {...settings}>
                <div>
                    <S.SliderItem>1</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>3</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>4</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>5</S.SliderItem>
                </div>
                <div>
                    <S.SliderItem>6</S.SliderItem>
                </div>
            </Slider>
        </S.Wrapper>
    );
};

export default LayoutBannerPresenter;
