// This Is For Board Comment List Queries

import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!) {
        fetchBoardComments(page: $page, boardId: $boardId) {
            _id
            writer
            comments
            rating
            user {
                _id
                email
                name
                picture
                userPoint
            }
            createdAt
            updatedAt
            deletedAt
        }
    }
`;
