// This Is For Board Detail Queries Component

import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
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

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;

export const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;

export const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId: ID!) {
        dislikeBoard(boardId: $boardId)
    }
`;
