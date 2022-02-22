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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Na = 'NA',
  Other = 'OTHER'
}

export enum HistoryType {
  Complaint = 'COMPLAINT',
  Medical = 'MEDICAL',
  Social = 'SOCIAL',
  Surgical = 'SURGICAL'
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
  Na = 'NA',
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
  createPersonFollowUp?: Maybe<PersonFollowUp>;
  createPersonMedicalHistory?: Maybe<PersonMedicalHistory>;
  deletePersonFollowUp?: Maybe<PersonFollowUp>;
  deletePersonMedicalHistory?: Maybe<Scalars['ID']>;
  error?: Maybe<Error>;
  newPatient?: Maybe<Person>;
  updatePatient?: Maybe<Person>;
  updatePersonFollowUp?: Maybe<PersonFollowUp>;
  updatePersonMedicalHistory?: Maybe<PersonMedicalHistory>;
  userLogin: UserToken;
};


export type MutationCreatePersonFollowUpArgs = {
  input: PersonFollowUpInput;
};


export type MutationCreatePersonMedicalHistoryArgs = {
  input: PersonMedicalHistoryInput;
};


export type MutationDeletePersonFollowUpArgs = {
  ID: Scalars['ID'];
};


export type MutationDeletePersonMedicalHistoryArgs = {
  ID: Scalars['ID'];
};


export type MutationUpdatePatientArgs = {
  input?: InputMaybe<PersonInput>;
};


export type MutationUpdatePersonFollowUpArgs = {
  input: PersonFollowUpInput;
};


export type MutationUpdatePersonMedicalHistoryArgs = {
  input: PersonMedicalHistoryInput;
};


export type MutationUserLoginArgs = {
  userLogin: UserLogin;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  nextPage: Scalars['Int'];
  prevPage: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export enum PatientStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Na = 'NA'
}

export enum PatientType {
  Donor = 'DONOR',
  Na = 'NA',
  Recipient = 'RECIPIENT'
}

export type Person = {
  __typename?: 'Person';
  Address?: Maybe<Scalars['String']>;
  Age?: Maybe<Scalars['String']>;
  ContactNo?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['String']>;
  Ethnicity?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  Gender?: Maybe<Gender>;
  Height?: Maybe<Scalars['Float']>;
  ID: Scalars['ID'];
  LastName?: Maybe<Scalars['String']>;
  MaritalStatus?: Maybe<MaritalStatus>;
  PersonType?: Maybe<PatientType>;
  Phn?: Maybe<Scalars['String']>;
  PrimaryRenalDisease?: Maybe<Scalars['String']>;
  RecordStatus?: Maybe<RecordStatus>;
  Status?: Maybe<PatientStatus>;
  UpdatedAt?: Maybe<Scalars['String']>;
  Weight?: Maybe<Scalars['Float']>;
  followUps?: Maybe<PersonFollowUpList>;
  histories?: Maybe<PersonMedicalHistoryList>;
};


export type PersonFollowUpsArgs = {
  filter?: InputMaybe<PersonFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonHistoriesArgs = {
  filter?: InputMaybe<PersonMedicalHistoryFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonComparison = {
  comparison: ComparisonType;
  value?: InputMaybe<Scalars['String']>;
};

export type PersonFilter = {
  Address?: InputMaybe<StringFilter>;
  ContactNo?: InputMaybe<StringFilter>;
  DateOfBirth?: InputMaybe<StringFilter>;
  Ethnicity?: InputMaybe<StringFilter>;
  FirstName?: InputMaybe<StringFilter>;
  Gender?: InputMaybe<StringFilter>;
  Height?: InputMaybe<FloatFilter>;
  ID?: InputMaybe<StringFilter>;
  LastName?: InputMaybe<StringFilter>;
  MaritalStatus?: InputMaybe<StringFilter>;
  PersonType?: InputMaybe<StringFilter>;
  Phn?: InputMaybe<StringFilter>;
  PrimaryRenalDisease?: InputMaybe<StringFilter>;
  Weight?: InputMaybe<FloatFilter>;
  and?: InputMaybe<PersonFilter>;
  andNot?: InputMaybe<PersonFilter>;
  or?: InputMaybe<PersonFilter>;
  orNot?: InputMaybe<PersonFilter>;
};

export type PersonFollowUp = {
  __typename?: 'PersonFollowUp';
  CaseStatus?: Maybe<Scalars['String']>;
  ClinicNo?: Maybe<Scalars['String']>;
  Complaints?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  DonationId?: Maybe<PersonOrganDonation>;
  ID: Scalars['String'];
  Person?: Maybe<Person>;
  RenalBiopsies?: Maybe<Scalars['String']>;
};

export type PersonFollowUpInput = {
  CaseStatus?: InputMaybe<Scalars['String']>;
  ClinicNo?: InputMaybe<Scalars['String']>;
  Complaints?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  ID: Scalars['String'];
  Person: PersonInput;
  RenalBiopsies?: InputMaybe<Scalars['String']>;
};

export type PersonFollowUpList = {
  __typename?: 'PersonFollowUpList';
  followUps?: Maybe<Array<Maybe<PersonFollowUp>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonInput = {
  Address?: InputMaybe<Scalars['String']>;
  Age?: InputMaybe<Scalars['String']>;
  ContactNo?: InputMaybe<Scalars['String']>;
  DateOfBirth?: InputMaybe<Scalars['String']>;
  Ethnicity?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Gender>;
  Height?: InputMaybe<Scalars['Float']>;
  ID: Scalars['ID'];
  LastName?: InputMaybe<Scalars['String']>;
  MaritalStatus?: InputMaybe<MaritalStatus>;
  PersonType?: InputMaybe<PatientType>;
  Phn?: InputMaybe<Scalars['String']>;
  PrimaryRenalDisease?: InputMaybe<Scalars['String']>;
  RecordStatus?: InputMaybe<RecordStatus>;
  Status?: InputMaybe<PatientStatus>;
  Weight?: InputMaybe<Scalars['Float']>;
};

export type PersonList = {
  __typename?: 'PersonList';
  pagination?: Maybe<Pagination>;
  persons: Array<Person>;
};

export type PersonMedicalHistory = {
  __typename?: 'PersonMedicalHistory';
  CreatedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['ID']>;
  Medications?: Maybe<Scalars['String']>;
  Person: Person;
  Reason?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['String']>;
  Type?: Maybe<HistoryType>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type PersonMedicalHistoryFilter = {
  Description?: InputMaybe<StringFilter>;
  EndDate?: InputMaybe<StringFilter>;
  ID?: InputMaybe<StringFilter>;
  Medications?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonFilter>;
  Reason?: InputMaybe<StringFilter>;
  StartDate?: InputMaybe<StringFilter>;
  Type?: InputMaybe<StringFilter>;
  and?: InputMaybe<PersonMedicalHistoryFilter>;
  andNot?: InputMaybe<PersonMedicalHistoryFilter>;
  or?: InputMaybe<PersonMedicalHistoryFilter>;
  orNot?: InputMaybe<PersonMedicalHistoryFilter>;
};

export type PersonMedicalHistoryInput = {
  Description?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['ID']>;
  Medications?: InputMaybe<Scalars['String']>;
  Person: PersonInput;
  Reason?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['String']>;
  Type: HistoryType;
};

export type PersonMedicalHistoryList = {
  __typename?: 'PersonMedicalHistoryList';
  histories?: Maybe<Array<Maybe<PersonMedicalHistory>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonOrganDonation = {
  __typename?: 'PersonOrganDonation';
  AcuteRejection?: Maybe<Scalars['Boolean']>;
  DischargedDate?: Maybe<Scalars['String']>;
  DonationType?: Maybe<Scalars['String']>;
  Donor?: Maybe<Person>;
  FollowUps?: Maybe<Array<Maybe<FollowUp>>>;
  ID?: Maybe<Scalars['String']>;
  PerformedDate?: Maybe<Scalars['String']>;
  PlannedDate?: Maybe<Scalars['String']>;
  Recipient?: Maybe<Person>;
};

export type Query = {
  __typename?: 'Query';
  error?: Maybe<Error>;
  getPatient?: Maybe<Person>;
  listPatients?: Maybe<PersonList>;
  listPersonMedicalHistories?: Maybe<PersonMedicalHistoryList>;
  personFollowUp?: Maybe<PersonFollowUp>;
  personFollowUps?: Maybe<PersonFollowUpList>;
  personMedicalHistory?: Maybe<PersonMedicalHistory>;
  users?: Maybe<UserList>;
};


export type QueryGetPatientArgs = {
  ID: Scalars['ID'];
};


export type QueryListPatientsArgs = {
  filter?: InputMaybe<PersonFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListPersonMedicalHistoriesArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonMedicalHistoryFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonFollowUpArgs = {
  ID: Scalars['ID'];
};


export type QueryPersonFollowUpsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonMedicalHistoryArgs = {
  ID: Scalars['ID'];
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

export type PaginationFragment = { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number };

export type PersonFieldsFragment = { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, CreatedAt?: string | null, UpdatedAt?: string | null };

export type PersonMedicalHistoryFieldsFragment = { __typename?: 'PersonMedicalHistory', ID?: string | null, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', ID: string } };

export type UserLoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserToken', token: string, user?: { __typename: 'User', name: string, id: string } | null, error?: { __typename?: 'Error', status: number, string: string } | null } };

export type NewPatientMutationVariables = Exact<{ [key: string]: never; }>;


export type NewPatientMutation = { __typename?: 'Mutation', newPatient?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, CreatedAt?: string | null, UpdatedAt?: string | null } | null };

export type UpdatePatientMutationVariables = Exact<{
  patientInput: PersonInput;
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, CreatedAt?: string | null, UpdatedAt?: string | null } | null };

export type NewHistoryMutationVariables = Exact<{
  input: PersonMedicalHistoryInput;
}>;


export type NewHistoryMutation = { __typename?: 'Mutation', createPersonMedicalHistory?: { __typename?: 'PersonMedicalHistory', ID?: string | null, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', ID: string } } | null };

export type ListUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type ListUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', users: Array<{ __typename?: 'User', name: string, id: string }>, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };

export type ListPatientsQueryVariables = Exact<{
  filter?: InputMaybe<PersonFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPatientsQuery = { __typename?: 'Query', listPatients?: { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', totalItems: number, prevPage: number, currentPage: number, itemsPerPage: number } | null, persons: Array<{ __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, CreatedAt?: string | null, UpdatedAt?: string | null }> } | null };

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, CreatedAt?: string | null, UpdatedAt?: string | null } | null };

export type ListPeopleQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type ListPeopleQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', users: Array<{ __typename?: 'User', name: string, id: string }>, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };

export type ListPersonMedicalHistoryQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonMedicalHistoryFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonMedicalHistoryQuery = { __typename?: 'Query', listPersonMedicalHistories?: { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, histories?: Array<{ __typename?: 'PersonMedicalHistory', ID?: string | null, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', ID: string } } | null> | null } | null };

export const PaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}}]} as unknown as DocumentNode<PaginationFragment, unknown>;
export const PersonFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryRenalDisease"}},{"kind":"Field","name":{"kind":"Name","value":"Weight"}},{"kind":"Field","name":{"kind":"Name","value":"Height"}},{"kind":"Field","name":{"kind":"Name","value":"Gender"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"ContactNo"}},{"kind":"Field","name":{"kind":"Name","value":"PersonType"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"RecordStatus"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonFieldsFragment, unknown>;
export const PersonMedicalHistoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonMedicalHistoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Reason"}},{"kind":"Field","name":{"kind":"Name","value":"StartDate"}},{"kind":"Field","name":{"kind":"Name","value":"EndDate"}},{"kind":"Field","name":{"kind":"Name","value":"Medications"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonMedicalHistoryFieldsFragment, unknown>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const NewPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPatientMutation, NewPatientMutationVariables>;
export const UpdatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const NewHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonMedicalHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}},...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewHistoryMutation, NewHistoryMutationVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export const ListPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPatients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPatients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPatientsQuery, ListPatientsQueryVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const ListPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPeople"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListPeopleQuery, ListPeopleQueryVariables>;
export const ListPersonMedicalHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonMedicalHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonMedicalHistories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"histories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;
export type UserLoginMutationStore = OperationStore<UserLoginMutation, UserLoginMutationVariables>;
export type NewPatientMutationStore = OperationStore<NewPatientMutation, NewPatientMutationVariables>;
export type UpdatePatientMutationStore = OperationStore<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type NewHistoryMutationStore = OperationStore<NewHistoryMutation, NewHistoryMutationVariables>;
export type ListUsersQueryStore = OperationStore<ListUsersQuery, ListUsersQueryVariables>;
export type ListPatientsQueryStore = OperationStore<ListPatientsQuery, ListPatientsQueryVariables>;
export type GetPatientQueryStore = OperationStore<GetPatientQuery, GetPatientQueryVariables>;
export type ListPeopleQueryStore = OperationStore<ListPeopleQuery, ListPeopleQueryVariables>;
export type ListPersonMedicalHistoryQueryStore = OperationStore<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;