// This is Login Queries Component
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;
