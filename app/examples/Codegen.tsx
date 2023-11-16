import React from "react";
import {
  Client,
  createRequest,
  fetchExchange,
  gql,
} from "@urql/core";
import { graphql } from "../../lib/apis/gql";
import { GetUserDataQuery } from "../../lib/apis/graphql";

const API_URL = "https://x.co";

const client = new Client({
  url: API_URL,
  exchanges: [fetchExchange],
});

const UserInfoQuery = gql`
  query GetUserData {
    getUserInfo {
      id
      email
      firstName
      lastName
    }
  }
`;

const fetchUserInfo = async () => {
  const response =
    await client.executeQuery<GetUserDataQuery>(
      createRequest(UserInfoQuery, {})
    );
  const body = response.data;
  const firstName = body?.getUserInfo.firstName;
};
