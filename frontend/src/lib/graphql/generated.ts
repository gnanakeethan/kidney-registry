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

export enum ComparisonType {
  Between = 'BETWEEN',
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  Icontains = 'ICONTAINS',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotContains = 'NOT_CONTAINS',
  StartsWith = 'STARTS_WITH'
}

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

export type FloatFilter = {
  and?: InputMaybe<FloatFilter>;
  comparison: ComparisonType;
  or?: InputMaybe<FloatFilter>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FollowUp = {
  __typename?: 'FollowUp';
  CaseStatus?: Maybe<Scalars['String']>;
  ClinicNo?: Maybe<Scalars['String']>;
  Complaints?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['ID']>;
  Person?: Maybe<Person>;
  RenalBiopsies?: Maybe<Scalars['String']>;
};

export type FollowUpList = {
  __typename?: 'FollowUpList';
  followUps?: Maybe<Array<Maybe<FollowUp>>>;
  pagination?: Maybe<Pagination>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type IntFilter = {
  and?: InputMaybe<IntFilter>;
  comparison: ComparisonType;
  or?: InputMaybe<IntFilter>;
  value?: InputMaybe<Scalars['Int']>;
};

export enum MaritalStatus {
  Divorced = 'DIVORCED',
  Married = 'MARRIED',
  Single = 'SINGLE'
}

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
  newPatient: Person;
  updatePatient: Person;
  userLogin: UserToken;
};


export type MutationUpdatePatientArgs = {
  input?: InputMaybe<PatientInput>;
};


export type MutationUserLoginArgs = {
  userLogin: UserLogin;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  nextPage: Scalars['Int'];
  prevPage: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type PatientFilter = {
  Address?: InputMaybe<StringFilter>;
  ContactNo?: InputMaybe<StringFilter>;
  DateOfBirth?: InputMaybe<StringFilter>;
  Ethnicity?: InputMaybe<StringFilter>;
  FirstName?: InputMaybe<StringFilter>;
  Gender?: InputMaybe<StringFilter>;
  Height?: InputMaybe<FloatFilter>;
  ID?: InputMaybe<Scalars['ID']>;
  LastName?: InputMaybe<StringFilter>;
  MaritalStatus?: InputMaybe<StringFilter>;
  PersonType?: InputMaybe<StringFilter>;
  Phn?: InputMaybe<StringFilter>;
  PrimaryRenalDisease?: InputMaybe<StringFilter>;
  Weight?: InputMaybe<FloatFilter>;
  and?: InputMaybe<PatientFilter>;
  andNot?: InputMaybe<PatientFilter>;
  or?: InputMaybe<PatientFilter>;
  orNot?: InputMaybe<PatientFilter>;
};

export type PatientInput = {
  Address: Scalars['String'];
  ContactNo: Scalars['String'];
  DateOfBirth: Scalars['String'];
  Ethnicity: Scalars['String'];
  FirstName: Scalars['String'];
  Gender: Gender;
  Height: Scalars['Float'];
  ID: Scalars['ID'];
  LastName: Scalars['String'];
  MaritalStatus: MaritalStatus;
  PersonType: PatientType;
  Phn: Scalars['String'];
  PrimaryRenalDisease: Scalars['String'];
  RecordStatus: RecordStatus;
  Status: PatientStatus;
  Weight: Scalars['Float'];
};

export enum PatientStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum PatientType {
  Donor = 'DONOR',
  Recipient = 'RECIPIENT'
}

export type Person = {
  __typename?: 'Person';
  Address?: Maybe<Scalars['String']>;
  ContactNo?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['String']>;
  Ethnicity?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Gender>;
  Height?: Maybe<Scalars['Float']>;
  ID?: Maybe<Scalars['ID']>;
  LastName?: Maybe<Scalars['String']>;
  MaritalStatus?: Maybe<MaritalStatus>;
  PersonType?: Maybe<PatientType>;
  Phn?: Maybe<Scalars['String']>;
  PrimaryRenalDisease?: Maybe<Scalars['String']>;
  RecordStatus?: Maybe<RecordStatus>;
  Status?: Maybe<PatientStatus>;
  Weight?: Maybe<Scalars['Float']>;
  followUps?: Maybe<FollowUpList>;
};

export type PersonList = {
  __typename?: 'PersonList';
  pagination?: Maybe<Pagination>;
  persons: Array<Person>;
};

export type Query = {
  __typename?: 'Query';
  error?: Maybe<Error>;
  listPatients?: Maybe<PersonList>;
  users?: Maybe<UserList>;
};


export type QueryListPatientsArgs = {
  filter?: InputMaybe<PatientFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export enum RecordStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Removed = 'REMOVED'
}

export type StringFilter = {
  and?: InputMaybe<StringFilter>;
  comparison: ComparisonType;
  or?: InputMaybe<StringFilter>;
  value?: InputMaybe<Scalars['String']>;
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
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserToken = {
  __typename?: 'UserToken';
  error?: Maybe<Error>;
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type UserLoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserToken', token: string, user?: { __typename: 'User', name: string, id: string } | null, error?: { __typename?: 'Error', status: number, string: string } | null } };

export type NewPatientMutationVariables = Exact<{ [key: string]: never; }>;


export type NewPatientMutation = { __typename?: 'Mutation', newPatient: { __typename?: 'Person', ID?: string | null, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } };

export type UpdatePatientMutationVariables = Exact<{
  patientInput: PatientInput;
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient: { __typename?: 'Person', ID?: string | null, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } };

export type ListUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type ListUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', users: Array<{ __typename?: 'User', name: string, id: string }>, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };

export type ListPatientsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ListPatientsQuery = { __typename?: 'Query', listPatients?: { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', totalItems: number, prevPage: number, currentPage: number, itemsPerPage: number } | null, persons: Array<{ __typename?: 'Person', ID?: string | null, DateOfBirth?: string | null, FirstName?: string | null, LastName?: string | null }> } | null };

export type ListPeopleQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type ListPeopleQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', users: Array<{ __typename?: 'User', name: string, id: string }>, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };


export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const NewPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryRenalDisease"}},{"kind":"Field","name":{"kind":"Name","value":"Weight"}},{"kind":"Field","name":{"kind":"Name","value":"Height"}},{"kind":"Field","name":{"kind":"Name","value":"Gender"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"ContactNo"}},{"kind":"Field","name":{"kind":"Name","value":"PersonType"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"RecordStatus"}}]}}]}}]} as unknown as DocumentNode<NewPatientMutation, NewPatientMutationVariables>;
export const UpdatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryRenalDisease"}},{"kind":"Field","name":{"kind":"Name","value":"Weight"}},{"kind":"Field","name":{"kind":"Name","value":"Height"}},{"kind":"Field","name":{"kind":"Name","value":"Gender"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"ContactNo"}},{"kind":"Field","name":{"kind":"Name","value":"PersonType"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"RecordStatus"}}]}}]}}]} as unknown as DocumentNode<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export const ListPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPatients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPatients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}}]}}]}}]}}]} as unknown as DocumentNode<ListPatientsQuery, ListPatientsQueryVariables>;
export const ListPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPeople"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListPeopleQuery, ListPeopleQueryVariables>;
export type UserLoginMutationStore = OperationStore<UserLoginMutation, UserLoginMutationVariables>;
export type NewPatientMutationStore = OperationStore<NewPatientMutation, NewPatientMutationVariables>;
export type UpdatePatientMutationStore = OperationStore<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type ListUsersQueryStore = OperationStore<ListUsersQuery, ListUsersQueryVariables>;
export type ListPatientsQueryStore = OperationStore<ListPatientsQuery, ListPatientsQueryVariables>;
export type ListPeopleQueryStore = OperationStore<ListPeopleQuery, ListPeopleQueryVariables>;