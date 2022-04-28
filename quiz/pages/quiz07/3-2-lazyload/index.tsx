import LazyLoad from "react-lazyload";
import { lazy } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 500px;
`;

export default function LazyLoadPage() {
  return (
    <Wrapper>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/21/22/50/animal-7148487_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/06/20/29/airplane-7116299_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/21/19/47/lion-7148207_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2021/09/30/11/47/african-lily-6669925_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/24/09/34/blackbird-7153234_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2021/11/22/04/21/drink-6815800_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2021/12/02/18/38/seagulls-6841129_960_720.jpg" />
      </LazyLoad>
      <LazyLoad width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/23/17/16/cascade-7152189_960_720.jpg" />
      </LazyLoad>
    </Wrapper>
  );
}
