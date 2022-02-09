import type { OperationStore } from '@urql/svelte';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DashboardMenus = {
  __typename?: 'DashboardMenus';
  sidebarBottom?: Maybe<Menu>;
  sidebarTop?: Maybe<Menu>;
};

export type Error = {
  __typename?: 'Error';
  status: Scalars['Int'];
  string: Scalars['String'];
};

export type IntFilter = {
  and?: InputMaybe<IntFilter>;
  beginsWith?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<IntFilter>;
};

export type Menu = {
  __typename?: 'Menu';
  items?: Maybe<Array<Maybe<MenuItem>>>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  error?: Maybe<Error>;
  userLogin?: Maybe<UserToken>;
};


export type MutationUserLoginArgs = {
  userLogin?: InputMaybe<UserLogin>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage?: Maybe<Scalars['Int']>;
  itemsPerPage?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalItems?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  error?: Maybe<Error>;
  users?: Maybe<UserList>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserListFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type StringFilter = {
  and?: InputMaybe<StringFilter>;
  beginsWith?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<StringFilter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  error: Error;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserList = {
  __typename?: 'UserList';
  pagination?: Maybe<Pagination>;
  users: Array<User>;
};

export type UserListFilter = {
  and?: InputMaybe<UserListFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<UserListFilter>;
};

export type UserLogin = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserToken = {
  __typename?: 'UserToken';
  error?: Maybe<Error>;
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type ListUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type ListUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', users: Array<{ __typename?: 'User', name: string, id: string }>, pagination?: { __typename?: 'Pagination', itemsPerPage?: number | null, totalItems?: number | null } | null } | null };


export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export type ListUsersQueryStore = OperationStore<ListUsersQuery, ListUsersQueryVariables>;