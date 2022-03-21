import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import {
    WrapperParent,
    WrapperChild,
    Profile,
    ProfileLeft,
    ProfileImg,
    ProfileDetail,
    ProfileName,
    ProfileDate,
    ProfileRight,
    ClipImg,
    LocationImg,
    Line,
    Context,
    Title,
    TitleImg,
    Contents,
    Youtube,
    LikeOrNot,
    Like,
    LikeImg,
    LikeCount,
    Dislike,
    DislikeImg,
    DislikeCount,
    LocationDetail,
    LocationDetailContainer,
    IconImg,
} from "../../../../styles/boardId";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
            createdAt
        }
    }
`;

const FreeBoardDetail = () => {
    const router = useRouter();
    // console.log("boardId router 출력 : " + router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    console.log("boardId data 출력 : " + data);

    const [isOpen, setAddressDetail] = useState(false);

    const onClickLocationImg = () => {
        setAddressDetail((isOpen) => !isOpen);
    };

    return (
        <WrapperParent>
            <WrapperChild>
                <Profile>
                    <ProfileLeft>
                        <ProfileImg src="/image/my/my.png"></ProfileImg>
                        <ProfileDetail>
                            <ProfileName>
                                {data?.fetchBoard?.writer}
                            </ProfileName>
                            <ProfileDate>
                                Date : {data?.fetchBoard?.createdAt.slice(0, 4)}
                                .{data?.fetchBoard?.createdAt.slice(5, 7)}.
                                {data?.fetchBoard?.createdAt.slice(8, 10)}
                            </ProfileDate>
                        </ProfileDetail>
                    </ProfileLeft>

                    <ProfileRight>
                        <LocationDetailContainer>
                            <ClipImg src="/image/search/search.png"></ClipImg>
                        </LocationDetailContainer>
                        <IconImg>
                            {isOpen
                                ? `${data.fetchBoard.boardAddress.address}
                            ${data.fetchBoard.boardAddress.addressDetail}`
                                : null}

                            <LocationImg
                                src="/image/location/location.png"
                                onClick={onClickLocationImg}
                            ></LocationImg>
                        </IconImg>
                    </ProfileRight>
                </Profile>
                <Line></Line>
                <Context>
                    <Title>{data?.fetchBoard?.title}</Title>
                    <TitleImg></TitleImg>
                    <Contents>{data?.fetchBoard?.contents}</Contents>
                    <Youtube
                        url={data?.fetchBoard?.youtubeUrl}
                        width={486}
                        height={240}
                    ></Youtube>
                    <LikeOrNot>
                        <Like>
                            <LikeImg src="/image/heart/heart.png"></LikeImg>
                            <LikeCount>{data?.fetchBoard?.likeCount}</LikeCount>
                        </Like>
                        <Dislike>
                            <DislikeImg src="/image/arrowUnder/arrow-under.png"></DislikeImg>
                            <DislikeCount>
                                {data?.fetchBoard?.dislikeCount}
                            </DislikeCount>
                        </Dislike>
                    </LikeOrNot>
                </Context>
            </WrapperChild>
        </WrapperParent>
    );
};

export default FreeBoardDetail;
