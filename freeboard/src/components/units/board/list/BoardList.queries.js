// This Is For Board List Queries Component

import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            title
            writer
            createdAt
        }
    }
`;
