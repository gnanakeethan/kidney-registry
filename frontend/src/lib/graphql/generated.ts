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
  ExaminationResults: any;
  InvestigationResults: any;
  WorkupResults: any;
};

export type Attributes = {
  __typename?: 'Attributes';
  classes?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  fieldName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelClasses?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AttributesInput = {
  classes?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  step?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
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

export type DialysisPlan = {
  __typename?: 'DialysisPlan';
  Frequency?: Maybe<Scalars['String']>;
  Plan?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
};

export type DialysisPlanInput = {
  Frequency?: InputMaybe<Scalars['String']>;
  Plan?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type DynamicFormInterface = {
  Procedure?: Maybe<Procedure>;
};

export type Error = {
  __typename?: 'Error';
  status: Scalars['Int'];
  string: Scalars['String'];
};

export type Examination = DynamicFormInterface & {
  __typename?: 'Examination';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type ExaminationFilter = {
  Order?: InputMaybe<IntFilter>;
};

export type ExaminationInput = {
  CreatedAt?: InputMaybe<Scalars['String']>;
  DeletedAt?: InputMaybe<Scalars['String']>;
  Details?: InputMaybe<FormDetailsInput>;
  ID: Scalars['ID'];
  Order?: InputMaybe<Scalars['Int']>;
  Procedure?: InputMaybe<ProcedureInput>;
  UpdatedAt?: InputMaybe<Scalars['String']>;
};

export type ExaminationList = {
  __typename?: 'ExaminationList';
  items?: Maybe<Array<Maybe<Examination>>>;
  pagination?: Maybe<Pagination>;
};

export type Extra = {
  __typename?: 'Extra';
  items?: Maybe<Array<Maybe<Items>>>;
  options?: Maybe<Array<Maybe<Items>>>;
};

export type ExtraInput = {
  items?: InputMaybe<Array<InputMaybe<ItemsInput>>>;
};

export type Fields = {
  __typename?: 'Fields';
  attributes?: Maybe<Attributes>;
  extra?: Maybe<Extra>;
  name?: Maybe<Scalars['String']>;
  prefix?: Maybe<Prefix>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FieldsInput = {
  attributes?: InputMaybe<AttributesInput>;
  extra?: InputMaybe<ExtraInput>;
  name?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<PrefixInput>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  and?: InputMaybe<FloatFilter>;
  comparison: ComparisonType;
  or?: InputMaybe<FloatFilter>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FormDetails = {
  __typename?: 'FormDetails';
  Description?: Maybe<Scalars['String']>;
  Inline?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
};

export type FormDetailsInput = {
  Description?: InputMaybe<Scalars['String']>;
  Inline?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
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

export type Investigation = DynamicFormInterface & {
  __typename?: 'Investigation';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type InvestigationFilter = {
  Order?: InputMaybe<IntFilter>;
};

export type InvestigationInput = {
  CreatedAt?: InputMaybe<Scalars['String']>;
  DeletedAt?: InputMaybe<Scalars['String']>;
  Details?: InputMaybe<FormDetailsInput>;
  ID: Scalars['ID'];
  Order?: InputMaybe<Scalars['Int']>;
  Procedure?: InputMaybe<ProcedureInput>;
  UpdatedAt?: InputMaybe<Scalars['String']>;
};

export type InvestigationList = {
  __typename?: 'InvestigationList';
  items?: Maybe<Array<Maybe<Investigation>>>;
  pagination?: Maybe<Pagination>;
};

export type Items = {
  __typename?: 'Items';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ItemsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
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
  addPatient?: Maybe<Person>;
  createPersonExamination?: Maybe<PersonExamination>;
  createPersonFollowUp?: Maybe<PersonFollowUp>;
  createPersonInvestigation?: Maybe<PersonInvestigation>;
  createPersonMedicalHistory?: Maybe<PersonMedicalHistory>;
  createPersonWorkup?: Maybe<PersonWorkup>;
  deletePersonExamination?: Maybe<Scalars['ID']>;
  deletePersonInvestigation?: Maybe<Scalars['ID']>;
  deletePersonMedicalHistory?: Maybe<Scalars['ID']>;
  deletePersonWorkup?: Maybe<Scalars['ID']>;
  error?: Maybe<Error>;
  newPatient?: Maybe<Person>;
  updatePatient?: Maybe<Person>;
  updatePersonExamination?: Maybe<PersonExamination>;
  updatePersonFollowUp?: Maybe<PersonFollowUp>;
  updatePersonInvestigation?: Maybe<PersonInvestigation>;
  updatePersonMedicalHistory?: Maybe<PersonMedicalHistory>;
  updatePersonWorkup?: Maybe<PersonWorkup>;
  userLogin: UserToken;
};


export type MutationAddPatientArgs = {
  input?: InputMaybe<PersonInput>;
};


export type MutationCreatePersonExaminationArgs = {
  input: PersonExaminationInput;
};


export type MutationCreatePersonFollowUpArgs = {
  input: PersonFollowUpInput;
};


export type MutationCreatePersonInvestigationArgs = {
  input: PersonInvestigationInput;
};


export type MutationCreatePersonMedicalHistoryArgs = {
  input: PersonMedicalHistoryInput;
};


export type MutationCreatePersonWorkupArgs = {
  input: PersonWorkupInput;
};


export type MutationDeletePersonExaminationArgs = {
  ID: Scalars['ID'];
};


export type MutationDeletePersonInvestigationArgs = {
  ID: Scalars['ID'];
};


export type MutationDeletePersonMedicalHistoryArgs = {
  ID: Scalars['ID'];
};


export type MutationDeletePersonWorkupArgs = {
  ID: Scalars['ID'];
};


export type MutationUpdatePatientArgs = {
  input?: InputMaybe<PersonInput>;
};


export type MutationUpdatePersonExaminationArgs = {
  input: PersonExaminationInput;
};


export type MutationUpdatePersonFollowUpArgs = {
  input: PersonFollowUpInput;
};


export type MutationUpdatePersonInvestigationArgs = {
  input: PersonInvestigationInput;
};


export type MutationUpdatePersonMedicalHistoryArgs = {
  input: PersonMedicalHistoryInput;
};


export type MutationUpdatePersonWorkupArgs = {
  input: PersonWorkupInput;
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

export type PersonExamination = DynamicFormInterface & {
  __typename?: 'PersonExamination';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  Examination?: Maybe<Examination>;
  ID: Scalars['ID'];
  Person?: Maybe<Person>;
  Procedure?: Maybe<Procedure>;
  Results?: Maybe<Scalars['ExaminationResults']>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type PersonExaminationFilter = {
  CreatedAt?: InputMaybe<StringFilter>;
  DeletedAt?: InputMaybe<StringFilter>;
  Examination?: InputMaybe<ExaminationFilter>;
  FollowUpId?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonFilter>;
  UpdatedAt?: InputMaybe<StringFilter>;
};

export type PersonExaminationInput = {
  Description?: InputMaybe<Scalars['String']>;
  Examination?: InputMaybe<ExaminationInput>;
  ID?: InputMaybe<Scalars['ID']>;
  Person?: InputMaybe<PersonInput>;
  Results?: InputMaybe<Scalars['ExaminationResults']>;
};

export type PersonExaminationList = {
  __typename?: 'PersonExaminationList';
  items?: Maybe<Array<Maybe<PersonExamination>>>;
  pagination?: Maybe<Pagination>;
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
  Complaints?: Maybe<Scalars['String']>;
  ConsultantOpinion?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  DialysisPlan?: Maybe<DialysisPlan>;
  Donation?: Maybe<PersonOrganDonation>;
  ID: Scalars['String'];
  OtherFindings?: Maybe<Scalars['String']>;
  Person?: Maybe<Person>;
  Referrals?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type PersonFollowUpFilter = {
  CaseStatus?: InputMaybe<StringFilter>;
  Complaints?: InputMaybe<StringFilter>;
  ConsultantOpinion?: InputMaybe<StringFilter>;
  Description?: InputMaybe<StringFilter>;
  Donation?: InputMaybe<PersonOrganDonationInput>;
  ID?: InputMaybe<StringFilter>;
  OtherFindings?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonInput>;
  Referrals?: InputMaybe<StringFilter>;
};

export type PersonFollowUpInput = {
  CaseStatus?: InputMaybe<Scalars['String']>;
  Complaints?: InputMaybe<Scalars['String']>;
  ConsultantOpinion?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  DialysisPlan?: InputMaybe<DialysisPlanInput>;
  Donation?: InputMaybe<PersonOrganDonationInput>;
  ID: Scalars['String'];
  Medicines?: InputMaybe<Array<InputMaybe<PersonFollowUpMedicineInput>>>;
  OtherFindings?: InputMaybe<Scalars['String']>;
  Person: PersonInput;
  Referrals?: InputMaybe<Scalars['String']>;
};

export type PersonFollowUpList = {
  __typename?: 'PersonFollowUpList';
  items?: Maybe<Array<Maybe<PersonFollowUp>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonFollowUpMedicine = {
  __typename?: 'PersonFollowUpMedicine';
  Dosage?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['String']>;
  Frequency?: Maybe<Scalars['String']>;
  ID: Scalars['String'];
  MedicineCode?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['String']>;
};

export type PersonFollowUpMedicineInput = {
  Dosage?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['String']>;
  Frequency?: InputMaybe<Scalars['String']>;
  ID: Scalars['String'];
  MedicineCode?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['String']>;
};

export type PersonInput = {
  Address?: InputMaybe<Scalars['String']>;
  Age?: InputMaybe<Scalars['String']>;
  ContactNo?: InputMaybe<Scalars['String']>;
  CreatedAt?: InputMaybe<Scalars['String']>;
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
  UpdatedAt?: InputMaybe<Scalars['String']>;
  Weight?: InputMaybe<Scalars['Float']>;
};

export type PersonInvestigation = DynamicFormInterface & {
  __typename?: 'PersonInvestigation';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ExpectedDate?: Maybe<Scalars['String']>;
  ID: Scalars['ID'];
  Investigation?: Maybe<Investigation>;
  ObtainedDate?: Maybe<Scalars['String']>;
  Person?: Maybe<Person>;
  Procedure?: Maybe<Procedure>;
  Results?: Maybe<Scalars['InvestigationResults']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  ValidDays?: Maybe<Scalars['Int']>;
};

export type PersonInvestigationFilter = {
  CreatedAt?: InputMaybe<StringFilter>;
  DeletedAt?: InputMaybe<StringFilter>;
  InvestigationId?: InputMaybe<StringFilter>;
  UpdatedAt?: InputMaybe<StringFilter>;
};

export type PersonInvestigationInput = {
  Description?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['ID']>;
  Investigation?: InputMaybe<InvestigationInput>;
  Person?: InputMaybe<PersonInput>;
  Results?: InputMaybe<Scalars['InvestigationResults']>;
};

export type PersonInvestigationList = {
  __typename?: 'PersonInvestigationList';
  items?: Maybe<Array<Maybe<PersonInvestigation>>>;
  pagination?: Maybe<Pagination>;
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
  FollowUps?: Maybe<Array<Maybe<PersonFollowUp>>>;
  ID: Scalars['ID'];
  PerformedDate?: Maybe<Scalars['String']>;
  PlannedDate?: Maybe<Scalars['String']>;
  Recipient?: Maybe<Person>;
};

export type PersonOrganDonationInput = {
  AcuteRejection?: InputMaybe<Scalars['Boolean']>;
  DischargedDate?: InputMaybe<Scalars['String']>;
  DonationType?: InputMaybe<Scalars['String']>;
  Donor?: InputMaybe<PersonInput>;
  ID: Scalars['ID'];
  PerformedDate?: InputMaybe<Scalars['String']>;
  PlannedDate?: InputMaybe<Scalars['String']>;
  Recipient?: InputMaybe<PersonInput>;
};

export type PersonWorkup = DynamicFormInterface & {
  __typename?: 'PersonWorkup';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Person?: Maybe<Person>;
  Procedure?: Maybe<Procedure>;
  Results?: Maybe<Scalars['WorkupResults']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  Workup?: Maybe<Workup>;
};

export type PersonWorkupFilter = {
  CreatedAt?: InputMaybe<StringFilter>;
  DeletedAt?: InputMaybe<StringFilter>;
  UpdatedAt?: InputMaybe<StringFilter>;
  WorkupId?: InputMaybe<StringFilter>;
};

export type PersonWorkupInput = {
  Description?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['ID']>;
  Person?: InputMaybe<PersonInput>;
  Results?: InputMaybe<Scalars['WorkupResults']>;
  Workup?: InputMaybe<WorkupInput>;
};

export type PersonWorkupList = {
  __typename?: 'PersonWorkupList';
  items?: Maybe<Array<Maybe<PersonWorkup>>>;
  pagination?: Maybe<Pagination>;
};

export type Prefix = {
  __typename?: 'Prefix';
  classes?: Maybe<Scalars['String']>;
};

export type PrefixInput = {
  classes?: InputMaybe<Scalars['String']>;
};

export type Procedure = {
  __typename?: 'Procedure';
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type ProcedureInput = {
  fields?: InputMaybe<Array<InputMaybe<FieldsInput>>>;
};

export type Query = {
  __typename?: 'Query';
  error?: Maybe<Error>;
  getExamination?: Maybe<Examination>;
  getInvestigation?: Maybe<Investigation>;
  getPatient?: Maybe<Person>;
  getPersonExamination?: Maybe<PersonExamination>;
  getPersonFollowUp?: Maybe<PersonFollowUp>;
  getPersonInvestigation?: Maybe<PersonInvestigation>;
  getPersonWorkup?: Maybe<PersonWorkup>;
  getWorkup?: Maybe<Workup>;
  listExaminations?: Maybe<ExaminationList>;
  listInvestigations?: Maybe<InvestigationList>;
  listPatients?: Maybe<PersonList>;
  listPersonExaminations?: Maybe<PersonExaminationList>;
  listPersonFollowUps?: Maybe<PersonFollowUpList>;
  listPersonInvestigations?: Maybe<PersonInvestigationList>;
  listPersonMedicalHistories?: Maybe<PersonMedicalHistoryList>;
  listPersonWorkups?: Maybe<PersonWorkupList>;
  listWorkups?: Maybe<WorkupList>;
  personMedicalHistory?: Maybe<PersonMedicalHistory>;
  users?: Maybe<UserList>;
};


export type QueryGetExaminationArgs = {
  id: Scalars['ID'];
};


export type QueryGetInvestigationArgs = {
  id: Scalars['ID'];
};


export type QueryGetPatientArgs = {
  ID: Scalars['ID'];
};


export type QueryGetPersonExaminationArgs = {
  ID: Scalars['ID'];
};


export type QueryGetPersonFollowUpArgs = {
  ID: Scalars['ID'];
};


export type QueryGetPersonInvestigationArgs = {
  ID: Scalars['ID'];
};


export type QueryGetPersonWorkupArgs = {
  ID: Scalars['ID'];
};


export type QueryGetWorkupArgs = {
  id: Scalars['ID'];
};


export type QueryListExaminationsArgs = {
  filter?: InputMaybe<ExaminationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListInvestigationsArgs = {
  filter?: InputMaybe<InvestigationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListPatientsArgs = {
  filter?: InputMaybe<PersonFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListPersonExaminationsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonExaminationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListPersonFollowUpsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonFollowUpFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListPersonInvestigationsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonInvestigationFilter>;
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


export type QueryListPersonWorkupsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonWorkupFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListWorkupsArgs = {
  filter?: InputMaybe<WorkupFilter>;
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

export type Workup = DynamicFormInterface & {
  __typename?: 'Workup';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type WorkupFilter = {
  Order?: InputMaybe<IntFilter>;
};

export type WorkupInput = {
  CreatedAt?: InputMaybe<Scalars['String']>;
  DeletedAt?: InputMaybe<Scalars['String']>;
  Details?: InputMaybe<FormDetailsInput>;
  ID: Scalars['ID'];
  Order?: InputMaybe<Scalars['Int']>;
  Procedure?: InputMaybe<ProcedureInput>;
  UpdatedAt?: InputMaybe<Scalars['String']>;
};

export type WorkupList = {
  __typename?: 'WorkupList';
  items?: Maybe<Array<Maybe<Workup>>>;
  pagination?: Maybe<Pagination>;
};

export type PaginationFragment = { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number };

export type PersonFollowUpFieldsFragment = { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string } | null };

export type PersonExaminationFieldsFragment = { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null };

type ProcedureFragment_Examination_Fragment = { __typename?: 'Examination', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_Investigation_Fragment = { __typename?: 'Investigation', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonExamination_Fragment = { __typename?: 'PersonExamination', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonInvestigation_Fragment = { __typename?: 'PersonInvestigation', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonWorkup_Fragment = { __typename?: 'PersonWorkup', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_Workup_Fragment = { __typename?: 'Workup', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

export type ProcedureFragmentFragment = ProcedureFragment_Examination_Fragment | ProcedureFragment_Investigation_Fragment | ProcedureFragment_PersonExamination_Fragment | ProcedureFragment_PersonInvestigation_Fragment | ProcedureFragment_PersonWorkup_Fragment | ProcedureFragment_Workup_Fragment;

export type PersonFieldsFragment = { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null };

export type PersonMedicalHistoryFieldsFragment = { __typename?: 'PersonMedicalHistory', ID?: string | null, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', ID: string } };

export type PersonInvestigationFieldsFragment = { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, Results?: any | null, ValidDays?: number | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null };

export type UserLoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserToken', token: string, user?: { __typename: 'User', name: string, id: string } | null, error?: { __typename?: 'Error', status: number, string: string } | null } };

export type NewPatientMutationVariables = Exact<{ [key: string]: never; }>;


export type NewPatientMutation = { __typename?: 'Mutation', newPatient?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } | null };

export type NewPersonFollowUpMutationVariables = Exact<{
  input: PersonFollowUpInput;
}>;


export type NewPersonFollowUpMutation = { __typename?: 'Mutation', createPersonFollowUp?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string } | null } | null };

export type UpdatePersonFollowUpMutationVariables = Exact<{
  input: PersonFollowUpInput;
}>;


export type UpdatePersonFollowUpMutation = { __typename?: 'Mutation', updatePersonFollowUp?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string } | null } | null };

export type UpdatePatientMutationVariables = Exact<{
  patientInput: PersonInput;
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } | null };

export type AddPatientMutationVariables = Exact<{
  patientInput: PersonInput;
}>;


export type AddPatientMutation = { __typename?: 'Mutation', addPatient?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } | null };

export type NewHistoryMutationVariables = Exact<{
  input: PersonMedicalHistoryInput;
}>;


export type NewHistoryMutation = { __typename?: 'Mutation', createPersonMedicalHistory?: { __typename?: 'PersonMedicalHistory', ID?: string | null, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', ID: string } } | null };

export type NewPersonExaminationMutationVariables = Exact<{
  input: PersonExaminationInput;
}>;


export type NewPersonExaminationMutation = { __typename?: 'Mutation', createPersonExamination?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null };

export type NewPersonInvestigationMutationVariables = Exact<{
  input: PersonInvestigationInput;
}>;


export type NewPersonInvestigationMutation = { __typename?: 'Mutation', createPersonInvestigation?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, Results?: any | null, ValidDays?: number | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null };

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


export type ListPatientsQuery = { __typename?: 'Query', listPatients?: { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', totalItems: number, prevPage: number, currentPage: number, itemsPerPage: number } | null, persons: Array<{ __typename?: 'Person', CreatedAt?: string | null, UpdatedAt?: string | null, Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null }> } | null };

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null } | null };

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

export type ListPersonFollowUpQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonFollowUpFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonFollowUpQuery = { __typename?: 'Query', listPersonFollowUps?: { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string } | null } | null> | null } | null };

export type ListExaminationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListExaminationsQuery = { __typename?: 'Query', listExaminations?: { __typename?: 'ExaminationList', items?: Array<{ __typename?: 'Examination', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null } | null> | null } | null };

export type GetExaminationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExaminationQuery = { __typename?: 'Query', getExamination?: { __typename?: 'Examination', ID: string, Details?: { __typename?: 'FormDetails', Name?: string | null, Inline?: boolean | null, Description?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null };

export type ListInvestigationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListInvestigationsQuery = { __typename?: 'Query', listInvestigations?: { __typename?: 'InvestigationList', items?: Array<{ __typename?: 'Investigation', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null } | null> | null } | null };

export type GetInvestigationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetInvestigationQuery = { __typename?: 'Query', getInvestigation?: { __typename?: 'Investigation', ID: string, Details?: { __typename?: 'FormDetails', Name?: string | null, Inline?: boolean | null, Description?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null };

export type ListPersonExaminationQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonExaminationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonExaminationQuery = { __typename?: 'Query', listPersonExaminations?: { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null> | null } | null };

export type GetPersonExaminationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonExaminationQuery = { __typename?: 'Query', getPersonExamination?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null };

export type ListPersonInvestigationQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonInvestigationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonInvestigationQuery = { __typename?: 'Query', listPersonInvestigations?: { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigation', ID: string, Description?: string | null, Results?: any | null, ValidDays?: number | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null> | null } | null };

export type GetPersonInvestigationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonInvestigationQuery = { __typename?: 'Query', getPersonInvestigation?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, Results?: any | null, ValidDays?: number | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null };

export const PaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}}]} as unknown as DocumentNode<PaginationFragment, unknown>;
export const PersonFollowUpFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonFollowUpFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Complaints"}},{"kind":"Field","name":{"kind":"Name","value":"CaseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"DialysisPlan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"Plan"}},{"kind":"Field","name":{"kind":"Name","value":"Frequency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"OtherFindings"}},{"kind":"Field","name":{"kind":"Name","value":"Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"ConsultantOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonFollowUpFieldsFragment, unknown>;
export const PersonExaminationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonExaminationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExamination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Examination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Results"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"DeletedAt"}}]}}]} as unknown as DocumentNode<PersonExaminationFieldsFragment, unknown>;
export const ProcedureFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProcedureFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DynamicFormInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Procedure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classes"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"step"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"labelClasses"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"extra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProcedureFragmentFragment, unknown>;
export const PersonFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryRenalDisease"}},{"kind":"Field","name":{"kind":"Name","value":"Weight"}},{"kind":"Field","name":{"kind":"Name","value":"Height"}},{"kind":"Field","name":{"kind":"Name","value":"Gender"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"ContactNo"}},{"kind":"Field","name":{"kind":"Name","value":"PersonType"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"RecordStatus"}}]}}]} as unknown as DocumentNode<PersonFieldsFragment, unknown>;
export const PersonMedicalHistoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonMedicalHistoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Reason"}},{"kind":"Field","name":{"kind":"Name","value":"StartDate"}},{"kind":"Field","name":{"kind":"Name","value":"EndDate"}},{"kind":"Field","name":{"kind":"Name","value":"Medications"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonMedicalHistoryFieldsFragment, unknown>;
export const PersonInvestigationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonInvestigationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Investigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Inline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Results"}},{"kind":"Field","name":{"kind":"Name","value":"ValidDays"}},{"kind":"Field","name":{"kind":"Name","value":"ObtainedDate"}},{"kind":"Field","name":{"kind":"Name","value":"ExpectedDate"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"DeletedAt"}}]}}]} as unknown as DocumentNode<PersonInvestigationFieldsFragment, unknown>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const NewPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPatientMutation, NewPatientMutationVariables>;
export const NewPersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonFollowUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}},...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonFollowUpMutation, NewPersonFollowUpMutationVariables>;
export const UpdatePersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonFollowUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}},...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePersonFollowUpMutation, UpdatePersonFollowUpMutationVariables>;
export const UpdatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const AddPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;
export const NewHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonMedicalHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}},...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewHistoryMutation, NewHistoryMutationVariables>;
export const NewPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExaminationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}},...PersonExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonExaminationMutation, NewPersonExaminationMutationVariables>;
export const NewPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}},...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonInvestigationMutation, NewPersonInvestigationMutationVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export const ListPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPatients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPatients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPatientsQuery, ListPatientsQueryVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const ListPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPeople"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}}]} as unknown as DocumentNode<ListPeopleQuery, ListPeopleQueryVariables>;
export const ListPersonMedicalHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonMedicalHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonMedicalHistories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"histories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;
export const ListPersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonFollowUps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonFollowUpQuery, ListPersonFollowUpQueryVariables>;
export const ListExaminationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListExaminations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listExaminations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Order"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListExaminationsQuery, ListExaminationsQueryVariables>;
export const GetExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Inline"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}},...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetExaminationQuery, GetExaminationQueryVariables>;
export const ListInvestigationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListInvestigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listInvestigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Order"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListInvestigationsQuery, ListInvestigationsQueryVariables>;
export const GetInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Inline"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}},...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetInvestigationQuery, GetInvestigationQueryVariables>;
export const ListPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExaminationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonExaminations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonExaminationQuery, ListPersonExaminationQueryVariables>;
export const GetPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}},...PersonExaminationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonExaminationQuery, GetPersonExaminationQueryVariables>;
export const ListPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonInvestigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonInvestigationQuery, ListPersonInvestigationQueryVariables>;
export const GetPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}},...PersonInvestigationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonInvestigationQuery, GetPersonInvestigationQueryVariables>;
export type UserLoginMutationStore = OperationStore<UserLoginMutation, UserLoginMutationVariables>;
export type NewPatientMutationStore = OperationStore<NewPatientMutation, NewPatientMutationVariables>;
export type NewPersonFollowUpMutationStore = OperationStore<NewPersonFollowUpMutation, NewPersonFollowUpMutationVariables>;
export type UpdatePersonFollowUpMutationStore = OperationStore<UpdatePersonFollowUpMutation, UpdatePersonFollowUpMutationVariables>;
export type UpdatePatientMutationStore = OperationStore<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type AddPatientMutationStore = OperationStore<AddPatientMutation, AddPatientMutationVariables>;
export type NewHistoryMutationStore = OperationStore<NewHistoryMutation, NewHistoryMutationVariables>;
export type NewPersonExaminationMutationStore = OperationStore<NewPersonExaminationMutation, NewPersonExaminationMutationVariables>;
export type NewPersonInvestigationMutationStore = OperationStore<NewPersonInvestigationMutation, NewPersonInvestigationMutationVariables>;
export type ListUsersQueryStore = OperationStore<ListUsersQuery, ListUsersQueryVariables>;
export type ListPatientsQueryStore = OperationStore<ListPatientsQuery, ListPatientsQueryVariables>;
export type GetPatientQueryStore = OperationStore<GetPatientQuery, GetPatientQueryVariables>;
export type ListPeopleQueryStore = OperationStore<ListPeopleQuery, ListPeopleQueryVariables>;
export type ListPersonMedicalHistoryQueryStore = OperationStore<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;
export type ListPersonFollowUpQueryStore = OperationStore<ListPersonFollowUpQuery, ListPersonFollowUpQueryVariables>;
export type ListExaminationsQueryStore = OperationStore<ListExaminationsQuery, ListExaminationsQueryVariables>;
export type GetExaminationQueryStore = OperationStore<GetExaminationQuery, GetExaminationQueryVariables>;
export type ListInvestigationsQueryStore = OperationStore<ListInvestigationsQuery, ListInvestigationsQueryVariables>;
export type GetInvestigationQueryStore = OperationStore<GetInvestigationQuery, GetInvestigationQueryVariables>;
export type ListPersonExaminationQueryStore = OperationStore<ListPersonExaminationQuery, ListPersonExaminationQueryVariables>;
export type GetPersonExaminationQueryStore = OperationStore<GetPersonExaminationQuery, GetPersonExaminationQueryVariables>;
export type ListPersonInvestigationQueryStore = OperationStore<ListPersonInvestigationQuery, ListPersonInvestigationQueryVariables>;
export type GetPersonInvestigationQueryStore = OperationStore<GetPersonInvestigationQuery, GetPersonInvestigationQueryVariables>;