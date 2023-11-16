/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<
  T,
  K
> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends
        | " $fragmentName"
        | "__typename"
        ? T[P]
        : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  addFriend: User;
};

export type MutationAddFriendArgs = {
  userId: Scalars["Float"]["input"];
};

export type Query = {
  __typename?: "Query";
  getFriendsSuggestions: Array<User>;
  getUserInfo: User;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  friends: Array<Maybe<User>>;
  id: Scalars["Float"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
};

export type GetUserDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserDataQuery = {
  __typename?: "Query";
  getUserInfo: {
    __typename?: "User";
    id: number;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
  };
};

export type GetUserDataManualQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserDataManualQuery = {
  __typename?: "Query";
  getUserInfo: {
    __typename?: "User";
    id: number;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
  };
};

export const GetUserDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserData" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "firstName",
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastName" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserDataQuery,
  GetUserDataQueryVariables
>;
export const GetUserDataManualDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserDataManual" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "firstName",
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastName" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserDataManualQuery,
  GetUserDataManualQueryVariables
>;
