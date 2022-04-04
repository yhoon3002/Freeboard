// This Is For Board List Queries Component

import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            title
            writer
            createdAt
        }
    }
`;

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search: String) {
        fetchBoardsCount(search: $search)
    }
`;
