import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 1520px;
  height: 400px;
  background-color: pink;
  padding: 100px 100px 100px 100px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Pomeranian = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 560px;
`;

export default function BannerUI() {
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Pomeranian src="/image/dog1.png" />
        </div>
        <div>
          <Pomeranian src="/image/dog2.png" />
        </div>
        <div>
          <Pomeranian src="/image/dog3.png" />
        </div>
        <div>
          <Pomeranian src="/image/dog4.png" />
        </div>
        <div>
          <Pomeranian src="/image/dog5.png" />
        </div>
        <div>
          <Pomeranian src="/image/dog6.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
