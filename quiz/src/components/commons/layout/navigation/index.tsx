import styled from "@emotion/styled";

const Wrapper = styled.div`
  @font-face {
    font-family: "myfont";
    src: url(/fonts/scifibit.ttf);
  }
  width: 1520px;
  height: 50px;
  background-color: yellow;
  font-family: "myfont";
`;

export default function NavigationUI() {
  return <Wrapper>This is Navigation Area</Wrapper>;
}
