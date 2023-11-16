import React from "react";
import {
  Client,
  createRequest,
  fetchExchange,
  gql,
} from "@urql/core";

const API_URL = "https://x.co";

const client = new Client({
  url: API_URL,
  exchanges: [fetchExchange],
});

const UserInfoQueryManual = gql`
  query GetUserInfo {
    getUserInfo {
      id
      email
      firstName
      lastName
    }
  }
`;

type UserInfoResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

const fetchUserInfo = async () => {
  const response =
    await client.executeQuery<UserInfoResponse>(
      createRequest(UserInfoQueryManual, {})
    );
  const body = response.data;
};
