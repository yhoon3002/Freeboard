import {
    WrapperParent,
    WrapperChild,
    WrapperHeader,
    StatusBar,
    HeaderImg,
    HeaderTitle,
    HeaderTitleText,
    My,
    Profile,
    Name,
    Nav,
    Notice,
    FaQ,
    Event,
    QaA,
    SectionParent,
    SectionChild,
    SectionQaA,
    SectionQaADetail,
    Q,
    Question,
    FooterParent,
    FooterChild,
    FooterNav,
} from "./indexcss";

export default function QuizThird() {
    // const Notice = styled.div(
    //     {
    //         fontSize: 30,
    //         color: "red",
    //     },
    //     (props) => ({ color: props.color })
    // );

    return (
        <WrapperParent>
            <WrapperChild>
                <WrapperHeader>
                    <StatusBar></StatusBar>
                    <HeaderImg>
                        <img src="/image/search/search.png" />
                    </HeaderImg>
                    <HeaderTitle>
                        <HeaderTitleText>
                            <My>마이</My>
                        </HeaderTitleText>
                        <Profile>
                            <img src="/image/profile/profile.png" />
                            <Name>임정아</Name>
                            <img src="/image/arrowRight/arrow-right.png" />
                        </Profile>
                    </HeaderTitle>
                    <Nav>
                        <Notice color="lightgreen">공지사항</Notice>
                        <Event>이벤트</Event>
                        <FaQ>FAQ</FaQ>
                        <QaA>Q&A</QaA>
                    </Nav>
                </WrapperHeader>
                <SectionParent>
                    <SectionChild>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.01</Q>
                                <Question>리뷰 작성은 어떻게 하나요?</Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.02</Q>
                                <Question>
                                    리뷰 수정/삭제는 어떻게 하나요?
                                </Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.03</Q>
                                <Question>
                                    아이디/비밀번호를 잊어버렸어요.
                                </Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.04</Q>
                                <Question>회원탈퇴를 하고싶어요.</Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.05</Q>
                                <Question>
                                    출발지 설정은 어떻게 하나요?
                                </Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                        <SectionQaA>
                            <SectionQaADetail>
                                <Q>Q.06</Q>
                                <Question>비밀번호를 변경하고 싶어요.</Question>
                            </SectionQaADetail>
                            <div>
                                <img src="/image/arrowUnder/arrow-under.png" />
                            </div>
                        </SectionQaA>
                    </SectionChild>
                    <FooterParent>
                        <FooterChild>
                            <FooterNav>
                                <img src="/image/home/home.png" />
                                <span>홈</span>
                            </FooterNav>
                            <FooterNav>
                                <img src="/image/location/location.png" />
                                <span>잇츠로드</span>
                            </FooterNav>
                            <FooterNav>
                                <img src="/image/heart/heart.png" />
                                <span>마이찜</span>
                            </FooterNav>
                            <FooterNav>
                                <img src="/image/my/my.png" />
                                <span>마이</span>
                            </FooterNav>
                        </FooterChild>
                    </FooterParent>
                </SectionParent>
            </WrapperChild>
        </WrapperParent>
    );
}
