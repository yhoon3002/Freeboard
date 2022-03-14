import {
    Container,
    Head,
    Info,
    WriterContainer,
    PassWordContainer,
    PassWord,
    PassWordInput,
    Writer,
    NameInput,
    TitleContainer,
    Title,
    TitleInput,
    ContextContainer,
    Context,
    ContextInput,
    AddressContainer,
    Address,
    AddressInput,
    AddressSearchContainer,
    AddressInputContainer,
    AddressSearchInput,
    AddressFirst,
    AddressSecond,
    YoutubeContainer,
    Youtube,
    YoutubeInput,
    PhotoContainer,
    Photo,
    PhotoInputContainer,
    PhotoInput1,
    PhotoInput2,
    PhotoInput3,
    SetContainer,
    Set,
    Radio,
    Radio1,
    Radio2,
    Label,
    RegisterContainer,
    Register,
} from "../../../styles/index";
export default function FreeBoard() {
    return (
        <Container>
            <Head>게시물 등록</Head>
            <Info>
                <WriterContainer>
                    <Writer>작성자</Writer>
                    <NameInput
                        type="text"
                        placeholder="이름을 적어주세요."
                    ></NameInput>
                </WriterContainer>
                <PassWordContainer>
                    <PassWord>비밀번호</PassWord>
                    <PassWordInput
                        type="text"
                        placeholder="비밀번호를 입력해주세요."
                    ></PassWordInput>
                </PassWordContainer>
            </Info>
            <TitleContainer>
                <Title>제목</Title>
                <TitleInput
                    type="text"
                    placeholder="제목을 작성해주세요."
                ></TitleInput>
            </TitleContainer>
            <ContextContainer>
                <Context>내용</Context>
                <ContextInput
                    type="text"
                    placeholder="내용을 작성해주세요."
                ></ContextInput>
            </ContextContainer>
            <AddressContainer>
                <Address>주소</Address>
                <AddressInputContainer>
                    <AddressInput
                        type="text"
                        placeholder="07250"
                    ></AddressInput>
                    <AddressSearchInput
                        type="text"
                        placeholder="우편번호 검색"
                    ></AddressSearchInput>
                </AddressInputContainer>
                <AddressSearchContainer>
                    <AddressFirst type="text"></AddressFirst>
                    <AddressSecond type="text"></AddressSecond>
                </AddressSearchContainer>
            </AddressContainer>
            <YoutubeContainer>
                <Youtube>유튜브</Youtube>
                <YoutubeInput
                    type="text"
                    placeholder="링크를 복사해주세요."
                ></YoutubeInput>
            </YoutubeContainer>
            <PhotoContainer>
                <Photo>사진 첨부</Photo>
                <PhotoInputContainer>
                    <PhotoInput1></PhotoInput1>
                    <PhotoInput2></PhotoInput2>
                    <PhotoInput3></PhotoInput3>
                </PhotoInputContainer>
            </PhotoContainer>
            <SetContainer>
                <Set>메인 설정</Set>
                <Radio>
                    <Radio1
                        type="radio"
                        name="setCheck"
                        id="set"
                        checked="checked"
                    />
                    <Label htmlFor="set">유튜브</Label>
                    <Radio2 type="radio" name="setCheck" id="set2" />
                    <Label htmlFor="set2">사진</Label>
                </Radio>
            </SetContainer>
            <RegisterContainer>
                <Register type="button">등록하기</Register>
            </RegisterContainer>
        </Container>
    );
}
