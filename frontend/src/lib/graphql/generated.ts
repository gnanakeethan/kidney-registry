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

export enum BloodGroup {
  AbNeg = 'AB_NEG',
  AbPos = 'AB_POS',
  ANeg = 'A_NEG',
  APos = 'A_POS',
  BNeg = 'B_NEG',
  BPos = 'B_POS',
  Na = 'NA',
  ONeg = 'O_NEG',
  OPos = 'O_POS'
}

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

export type Component = {
  __typename?: 'Component';
  component: Scalars['String'];
  component_id: Scalars['String'];
  name: Scalars['String'];
};

export type ComponentInput = {
  component: Scalars['String'];
  component_id: Scalars['String'];
};

export type Configuration = {
  __typename?: 'Configuration';
  components: Array<Component>;
};

export type ConfigurationInput = {
  components: Array<ComponentInput>;
};

export type Connection = {
  items?: Maybe<Array<Maybe<Edge>>>;
  pagination?: Maybe<Pagination>;
};

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

export type Edge = {
  node?: Maybe<Node>;
};

export type Error = {
  __typename?: 'Error';
  status: Scalars['Int'];
  string: Scalars['String'];
};

export type Examination = DynamicFormInterface & Node & {
  __typename?: 'Examination';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type ExaminationEdge = Edge & {
  __typename?: 'ExaminationEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<Examination>;
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

export type ExaminationList = Connection & {
  __typename?: 'ExaminationList';
  items?: Maybe<Array<Maybe<ExaminationEdge>>>;
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
  ValidDays?: Maybe<Scalars['Int']>;
};

export type FormDetailsInput = {
  Description?: InputMaybe<Scalars['String']>;
  Inline?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  ValidDays?: InputMaybe<Scalars['Int']>;
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

export type Investigation = DynamicFormInterface & Node & {
  __typename?: 'Investigation';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type InvestigationEdge = Edge & {
  __typename?: 'InvestigationEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<Investigation>;
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

export type InvestigationList = Connection & {
  __typename?: 'InvestigationList';
  items?: Maybe<Array<Maybe<InvestigationEdge>>>;
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
  addPatient?: Maybe<PersonEdge>;
  addWorkflow?: Maybe<WorkflowEdge>;
  createPersonExamination?: Maybe<PersonExaminationEdge>;
  createPersonFollowUp?: Maybe<PersonFollowUpEdge>;
  createPersonInvestigation?: Maybe<PersonInvestigationEdge>;
  createPersonMedicalHistory?: Maybe<PersonMedicalHistoryEdge>;
  createPersonOrganDonation?: Maybe<PersonOrganDonationEdge>;
  createPersonWorkup?: Maybe<PersonWorkupEdge>;
  deletePersonExamination?: Maybe<Scalars['ID']>;
  deletePersonInvestigation?: Maybe<Scalars['ID']>;
  deletePersonMedicalHistory?: Maybe<Scalars['ID']>;
  deletePersonOrganDonation?: Maybe<Scalars['ID']>;
  deletePersonWorkup?: Maybe<Scalars['ID']>;
  error?: Maybe<Error>;
  newPatient?: Maybe<PersonEdge>;
  updatePatient?: Maybe<PersonEdge>;
  updatePersonExamination?: Maybe<PersonExaminationEdge>;
  updatePersonFollowUp?: Maybe<PersonFollowUpEdge>;
  updatePersonInvestigation?: Maybe<PersonInvestigationEdge>;
  updatePersonMedicalHistory?: Maybe<PersonMedicalHistoryEdge>;
  updatePersonOrganDonation?: Maybe<PersonOrganDonationEdge>;
  updatePersonWorkup?: Maybe<PersonWorkupEdge>;
  userLogin: UserToken;
};


export type MutationAddPatientArgs = {
  input?: InputMaybe<PersonInput>;
};


export type MutationAddWorkflowArgs = {
  input?: InputMaybe<WorkflowInput>;
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


export type MutationCreatePersonOrganDonationArgs = {
  input: PersonOrganDonationInput;
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


export type MutationDeletePersonOrganDonationArgs = {
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


export type MutationUpdatePersonOrganDonationArgs = {
  input: PersonOrganDonationInput;
};


export type MutationUpdatePersonWorkupArgs = {
  input: PersonWorkupInput;
};


export type MutationUserLoginArgs = {
  userLogin: UserLogin;
};

export type Node = {
  ID: Scalars['ID'];
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
  CadavericDonor = 'CADAVERIC_DONOR',
  DeceasedPostCadavericTransplant = 'DECEASED_POST_CADAVERIC_TRANSPLANT',
  DeceasedWillAwaitingTransplant = 'DECEASED_WILL_AWAITING_TRANSPLANT',
  Inactive = 'INACTIVE',
  LiveDonor = 'LIVE_DONOR',
  Na = 'NA',
  PermanentlyUnfit = 'PERMANENTLY_UNFIT',
  ReceivedLiveTransplant = 'RECEIVED_LIVE_TRANSPLANT',
  Suspended = 'SUSPENDED',
  WorkingUp = 'WORKING_UP'
}

export enum PatientType {
  Donor = 'DONOR',
  Na = 'NA',
  Recipient = 'RECIPIENT'
}

export type Person = Node & {
  __typename?: 'Person';
  Address?: Maybe<Scalars['String']>;
  Age?: Maybe<Scalars['String']>;
  BloodGroup?: Maybe<BloodGroup>;
  ContactNo?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['String']>;
  Ethnicity?: Maybe<Scalars['String']>;
  Examinations?: Maybe<Connection>;
  FirstName?: Maybe<Scalars['String']>;
  FollowUps?: Maybe<Connection>;
  Gender?: Maybe<Gender>;
  Height?: Maybe<Scalars['Float']>;
  ID: Scalars['ID'];
  Investigations?: Maybe<Connection>;
  LastName?: Maybe<Scalars['String']>;
  MaritalStatus?: Maybe<MaritalStatus>;
  MedicalHistory?: Maybe<Connection>;
  OrganDonations?: Maybe<Connection>;
  PersonType?: Maybe<PatientType>;
  Phn?: Maybe<Scalars['String']>;
  PrimaryRenalDisease?: Maybe<Scalars['String']>;
  RecordStatus?: Maybe<RecordStatus>;
  Status?: Maybe<PatientStatus>;
  UpdatedAt?: Maybe<Scalars['String']>;
  Weight?: Maybe<Scalars['Float']>;
  Workup?: Maybe<Connection>;
  histories?: Maybe<Connection>;
};


export type PersonExaminationsArgs = {
  filter?: InputMaybe<PersonExaminationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonFollowUpsArgs = {
  filter?: InputMaybe<PersonFollowUpFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonInvestigationsArgs = {
  filter?: InputMaybe<PersonInvestigationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonMedicalHistoryArgs = {
  filter?: InputMaybe<PersonMedicalHistoryFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonOrganDonationsArgs = {
  filter?: InputMaybe<PersonOrganDonationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PersonWorkupArgs = {
  filter?: InputMaybe<PersonWorkupFilter>;
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

export type PersonEdge = Edge & {
  __typename?: 'PersonEdge';
  node?: Maybe<Person>;
};

export type PersonExamination = DynamicFormInterface & Node & {
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

export type PersonExaminationEdge = Edge & {
  __typename?: 'PersonExaminationEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonExamination>;
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

export type PersonExaminationList = Connection & {
  __typename?: 'PersonExaminationList';
  items?: Maybe<Array<Maybe<PersonExaminationEdge>>>;
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
  Status?: InputMaybe<StringFilter>;
  Weight?: InputMaybe<FloatFilter>;
  and?: InputMaybe<PersonFilter>;
  andNot?: InputMaybe<PersonFilter>;
  or?: InputMaybe<PersonFilter>;
  orNot?: InputMaybe<PersonFilter>;
};

export type PersonFollowUp = Node & {
  __typename?: 'PersonFollowUp';
  CaseStatus?: Maybe<Scalars['String']>;
  Complaints?: Maybe<Scalars['String']>;
  ConsultantOpinion?: Maybe<Scalars['String']>;
  CreatedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  DialysisPlan?: Maybe<DialysisPlan>;
  Donation?: Maybe<PersonOrganDonation>;
  ID: Scalars['ID'];
  OtherFindings?: Maybe<Scalars['String']>;
  Person?: Maybe<Person>;
  Referrals?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type PersonFollowUpEdge = Edge & {
  __typename?: 'PersonFollowUpEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonFollowUp>;
};

export type PersonFollowUpFilter = {
  CaseStatus?: InputMaybe<StringFilter>;
  Complaints?: InputMaybe<StringFilter>;
  ConsultantOpinion?: InputMaybe<StringFilter>;
  Description?: InputMaybe<StringFilter>;
  Donation?: InputMaybe<PersonOrganDonationFilter>;
  ID?: InputMaybe<StringFilter>;
  OtherFindings?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonFilter>;
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

export type PersonFollowUpList = Connection & {
  __typename?: 'PersonFollowUpList';
  items?: Maybe<Array<Maybe<PersonFollowUpEdge>>>;
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
  BloodGroup?: InputMaybe<BloodGroup>;
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

export type PersonInvestigation = DynamicFormInterface & Node & {
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

export type PersonInvestigationEdge = Edge & {
  __typename?: 'PersonInvestigationEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonInvestigation>;
};

export type PersonInvestigationFilter = {
  CreatedAt?: InputMaybe<StringFilter>;
  DeletedAt?: InputMaybe<StringFilter>;
  InvestigationId?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonFilter>;
  UpdatedAt?: InputMaybe<StringFilter>;
};

export type PersonInvestigationInput = {
  CreatedAt?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  ExpectedDate?: InputMaybe<Scalars['String']>;
  ID?: InputMaybe<Scalars['ID']>;
  Investigation?: InputMaybe<InvestigationInput>;
  ObtainedDate?: InputMaybe<Scalars['String']>;
  Person?: InputMaybe<PersonInput>;
  Results?: InputMaybe<Scalars['InvestigationResults']>;
  ValidDays?: InputMaybe<Scalars['Int']>;
};

export type PersonInvestigationList = Connection & {
  __typename?: 'PersonInvestigationList';
  items?: Maybe<Array<Maybe<PersonInvestigationEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonList = Connection & {
  __typename?: 'PersonList';
  items?: Maybe<Array<Maybe<PersonEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonMedicalHistory = Node & {
  __typename?: 'PersonMedicalHistory';
  CreatedAt?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['String']>;
  ID: Scalars['ID'];
  Medications?: Maybe<Scalars['String']>;
  Person: Person;
  Reason?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['String']>;
  Type?: Maybe<HistoryType>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type PersonMedicalHistoryEdge = Edge & {
  __typename?: 'PersonMedicalHistoryEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonMedicalHistory>;
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

export type PersonMedicalHistoryList = Connection & {
  __typename?: 'PersonMedicalHistoryList';
  items?: Maybe<Array<Maybe<PersonMedicalHistoryEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonOrganDonation = Node & {
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

export type PersonOrganDonationEdge = Edge & {
  __typename?: 'PersonOrganDonationEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonOrganDonation>;
};

export type PersonOrganDonationFilter = {
  AcuteRejection?: InputMaybe<Scalars['Boolean']>;
  DischargedDate?: InputMaybe<Scalars['String']>;
  DonationType?: InputMaybe<Scalars['String']>;
  Donor?: InputMaybe<PersonFilter>;
  ID?: InputMaybe<Scalars['ID']>;
  PerformedDate?: InputMaybe<Scalars['String']>;
  PlannedDate?: InputMaybe<Scalars['String']>;
  Recipient?: InputMaybe<PersonFilter>;
};

export type PersonOrganDonationInput = {
  AcuteRejection?: InputMaybe<Scalars['Boolean']>;
  DischargedDate?: InputMaybe<Scalars['String']>;
  DonationType?: InputMaybe<Scalars['String']>;
  Donor?: InputMaybe<PersonInput>;
  ID?: InputMaybe<Scalars['ID']>;
  PerformedDate?: InputMaybe<Scalars['String']>;
  PlannedDate?: InputMaybe<Scalars['String']>;
  Recipient?: InputMaybe<PersonInput>;
};

export type PersonOrganDonationList = Connection & {
  __typename?: 'PersonOrganDonationList';
  items?: Maybe<Array<Maybe<PersonOrganDonationEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type PersonWorkup = DynamicFormInterface & Node & {
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

export type PersonWorkupEdge = Edge & {
  __typename?: 'PersonWorkupEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<PersonWorkup>;
};

export type PersonWorkupFilter = {
  CreatedAt?: InputMaybe<StringFilter>;
  DeletedAt?: InputMaybe<StringFilter>;
  Person?: InputMaybe<PersonFilter>;
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

export type PersonWorkupList = Connection & {
  __typename?: 'PersonWorkupList';
  items?: Maybe<Array<Maybe<PersonWorkupEdge>>>;
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
  getExamination?: Maybe<ExaminationEdge>;
  getInvestigation?: Maybe<InvestigationEdge>;
  getPatient?: Maybe<PersonEdge>;
  getPersonExamination?: Maybe<PersonExaminationEdge>;
  getPersonFollowUp?: Maybe<PersonFollowUpEdge>;
  getPersonInvestigation?: Maybe<PersonInvestigationEdge>;
  getPersonOrganDonation?: Maybe<PersonOrganDonationEdge>;
  getPersonWorkup?: Maybe<PersonWorkupEdge>;
  getWorkflow?: Maybe<WorkflowEdge>;
  getWorkup?: Maybe<WorkupEdge>;
  listAllPersonExaminations?: Maybe<Connection>;
  listAllPersonFollowUps?: Maybe<Connection>;
  listAllPersonInvestigations?: Maybe<Connection>;
  listExaminations?: Maybe<Connection>;
  listInvestigations?: Maybe<Connection>;
  listPatients?: Maybe<PersonList>;
  listPersonExaminations?: Maybe<Connection>;
  listPersonFollowUps?: Maybe<Connection>;
  listPersonInvestigations?: Maybe<Connection>;
  listPersonMedicalHistories?: Maybe<Connection>;
  listPersonOrganDonations?: Maybe<Connection>;
  listPersonWorkups?: Maybe<Connection>;
  listWorkflows?: Maybe<Connection>;
  listWorkups?: Maybe<Connection>;
  personMedicalHistory?: Maybe<PersonMedicalHistoryEdge>;
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


export type QueryGetPersonOrganDonationArgs = {
  ID: Scalars['ID'];
};


export type QueryGetPersonWorkupArgs = {
  ID: Scalars['ID'];
};


export type QueryGetWorkflowArgs = {
  id: Scalars['ID'];
};


export type QueryGetWorkupArgs = {
  id: Scalars['ID'];
};


export type QueryListAllPersonExaminationsArgs = {
  filter?: InputMaybe<PersonExaminationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListAllPersonFollowUpsArgs = {
  filter?: InputMaybe<PersonFollowUpFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListAllPersonInvestigationsArgs = {
  filter?: InputMaybe<PersonInvestigationFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type QueryListPersonOrganDonationsArgs = {
  PersonID: Scalars['ID'];
  filter?: InputMaybe<PersonOrganDonationFilter>;
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


export type QueryListWorkflowsArgs = {
  filter?: InputMaybe<WorkflowFilter>;
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
  filter?: InputMaybe<UserFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum RecordStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Removed = 'REMOVED'
}

export type Role = {
  __typename?: 'Role';
  ID: Scalars['ID'];
  name: Scalars['String'];
};

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

export type User = Node & {
  __typename?: 'User';
  ID: Scalars['ID'];
  Roles: Array<Role>;
  name: Scalars['String'];
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor?: Maybe<Pagination>;
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<UserFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  or?: InputMaybe<UserFilter>;
};

export type UserInput = {
  ID: Scalars['ID'];
};

export type UserList = Connection & {
  __typename?: 'UserList';
  items?: Maybe<Array<Maybe<UserEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type UserLogin = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRole = {
  __typename?: 'UserRole';
  role: Role;
  user: User;
};

export type UserToken = {
  __typename?: 'UserToken';
  error?: Maybe<Error>;
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type Workflow = Node & {
  __typename?: 'Workflow';
  Configuration: Configuration;
  ID: Scalars['ID'];
  Name: Scalars['String'];
  User: User;
};

export type WorkflowEdge = Edge & {
  __typename?: 'WorkflowEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<Workflow>;
};

export type WorkflowFilter = {
  User?: InputMaybe<UserFilter>;
};

export type WorkflowInput = {
  Configuration: ConfigurationInput;
  ID: Scalars['ID'];
  Name: Scalars['String'];
  User: UserInput;
};

export type WorkflowList = Connection & {
  __typename?: 'WorkflowList';
  items?: Maybe<Array<Maybe<WorkflowEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type Workup = DynamicFormInterface & Node & {
  __typename?: 'Workup';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  Details?: Maybe<FormDetails>;
  ID: Scalars['ID'];
  Order?: Maybe<Scalars['Int']>;
  Procedure?: Maybe<Procedure>;
  UpdatedAt?: Maybe<Scalars['String']>;
};

export type WorkupEdge = Edge & {
  __typename?: 'WorkupEdge';
  cursor?: Maybe<Pagination>;
  node?: Maybe<Workup>;
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

export type WorkupList = Connection & {
  __typename?: 'WorkupList';
  items?: Maybe<Array<Maybe<WorkupEdge>>>;
  pagination?: Maybe<Pagination>;
};

export type PaginationFragment = { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number };

export type PersonWorkupFieldsFragment = { __typename?: 'PersonWorkup', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Workup?: { __typename?: 'Workup', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null };

export type PersonFollowUpFieldsFragment = { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null };

export type PersonExaminationFieldsFragment = { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null };

type ProcedureFragment_Examination_Fragment = { __typename?: 'Examination', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_Investigation_Fragment = { __typename?: 'Investigation', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonExamination_Fragment = { __typename?: 'PersonExamination', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonInvestigation_Fragment = { __typename?: 'PersonInvestigation', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_PersonWorkup_Fragment = { __typename?: 'PersonWorkup', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

type ProcedureFragment_Workup_Fragment = { __typename?: 'Workup', Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null };

export type ProcedureFragmentFragment = ProcedureFragment_Examination_Fragment | ProcedureFragment_Investigation_Fragment | ProcedureFragment_PersonExamination_Fragment | ProcedureFragment_PersonInvestigation_Fragment | ProcedureFragment_PersonWorkup_Fragment | ProcedureFragment_Workup_Fragment;

export type PersonFieldsFragment = { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null };

export type PersonMedicalHistoryFieldsFragment = { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } };

export type PersonInvestigationFieldsFragment = { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null };

export type PersonOrganDonationFieldsFragment = { __typename?: 'PersonOrganDonation', ID: string, DonationType?: string | null, PlannedDate?: string | null, PerformedDate?: string | null, DischargedDate?: string | null, AcuteRejection?: boolean | null, Donor?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null, Recipient?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null };

export type UserLoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserToken', token: string, user?: { __typename: 'User', name: string, ID: string, Roles: Array<{ __typename?: 'Role', ID: string, name: string }> } | null, error?: { __typename?: 'Error', status: number, string: string } | null } };

export type NewPatientMutationVariables = Exact<{ [key: string]: never; }>;


export type NewPatientMutation = { __typename?: 'Mutation', newPatient?: { __typename?: 'PersonEdge', node?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null } | null } | null };

export type NewPersonFollowUpMutationVariables = Exact<{
  input: PersonFollowUpInput;
}>;


export type NewPersonFollowUpMutation = { __typename?: 'Mutation', createPersonFollowUp?: { __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null };

export type UpdatePersonFollowUpMutationVariables = Exact<{
  input: PersonFollowUpInput;
}>;


export type UpdatePersonFollowUpMutation = { __typename?: 'Mutation', updatePersonFollowUp?: { __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null };

export type UpdatePatientMutationVariables = Exact<{
  patientInput: PersonInput;
}>;


export type UpdatePatientMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'PersonEdge', node?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null, Age?: string | null, UpdatedAt?: string | null, MedicalHistory?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Investigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Examinations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, FollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null } | null } | null };

export type AddPatientMutationVariables = Exact<{
  patientInput: PersonInput;
}>;


export type AddPatientMutation = { __typename?: 'Mutation', addPatient?: { __typename?: 'PersonEdge', node?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null, Age?: string | null, UpdatedAt?: string | null, MedicalHistory?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Investigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Examinations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, FollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null } | null } | null };

export type AddWorkflowMutationVariables = Exact<{
  workflowInput: WorkflowInput;
}>;


export type AddWorkflowMutation = { __typename?: 'Mutation', addWorkflow?: { __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow', ID: string, Name: string, Configuration: { __typename?: 'Configuration', components: Array<{ __typename?: 'Component', name: string, component: string, component_id: string }> } } | null } | null };

export type NewHistoryMutationVariables = Exact<{
  input: PersonMedicalHistoryInput;
}>;


export type NewHistoryMutation = { __typename?: 'Mutation', createPersonMedicalHistory?: { __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null };

export type NewPersonExaminationMutationVariables = Exact<{
  input: PersonExaminationInput;
}>;


export type NewPersonExaminationMutation = { __typename?: 'Mutation', createPersonExamination?: { __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null };

export type NewPersonInvestigationMutationVariables = Exact<{
  input: PersonInvestigationInput;
}>;


export type NewPersonInvestigationMutation = { __typename?: 'Mutation', createPersonInvestigation?: { __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null };

export type UpdatePersonInvestigationMutationVariables = Exact<{
  input: PersonInvestigationInput;
}>;


export type UpdatePersonInvestigationMutation = { __typename?: 'Mutation', updatePersonInvestigation?: { __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null };

export type NewPersonWorkupMutationVariables = Exact<{
  input: PersonWorkupInput;
}>;


export type NewPersonWorkupMutation = { __typename?: 'Mutation', createPersonWorkup?: { __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Workup?: { __typename?: 'Workup', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null };

export type UpdatePersonWorkupMutationVariables = Exact<{
  input: PersonWorkupInput;
}>;


export type UpdatePersonWorkupMutation = { __typename?: 'Mutation', updatePersonWorkup?: { __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Workup?: { __typename?: 'Workup', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null };

export type CreatePersonOrganDonationMutationVariables = Exact<{
  input: PersonOrganDonationInput;
}>;


export type CreatePersonOrganDonationMutation = { __typename?: 'Mutation', createPersonOrganDonation?: { __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation', ID: string, DonationType?: string | null, PlannedDate?: string | null, PerformedDate?: string | null, DischargedDate?: string | null, AcuteRejection?: boolean | null, Donor?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null, Recipient?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null } | null } | null };

export type UpdatePersonOrganDonationMutationVariables = Exact<{
  input: PersonOrganDonationInput;
}>;


export type UpdatePersonOrganDonationMutation = { __typename?: 'Mutation', updatePersonOrganDonation?: { __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation', ID: string, DonationType?: string | null, PlannedDate?: string | null, PerformedDate?: string | null, DischargedDate?: string | null, AcuteRejection?: boolean | null, Donor?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null, Recipient?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null } | null } | null };

export type ListUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;


export type ListUsersQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', ID: string, name: string } } | null> | null, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };

export type UserFieldsFragment = { __typename?: 'User', ID: string, name: string };

export type ListPatientsQueryVariables = Exact<{
  filter?: InputMaybe<PersonFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPatientsQuery = { __typename?: 'Query', listPatients?: { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', totalItems: number, prevPage: number, currentPage: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person', Age?: string | null, ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null } | null } | null> | null } | null };

export type PersonExtendedFragment = { __typename?: 'Person', Age?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, MedicalHistory?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Investigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Examinations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, FollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetPatientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPatientQuery = { __typename?: 'Query', getPatient?: { __typename?: 'PersonEdge', node?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null, Age?: string | null, UpdatedAt?: string | null, MedicalHistory?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Investigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Examinations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, FollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null } | null } | null };

export type GetPatientOverviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPatientOverviewQuery = { __typename?: 'Query', getPatient?: { __typename?: 'PersonEdge', node?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Address?: string | null, DateOfBirth?: string | null, Ethnicity?: string | null, Phn?: string | null, PrimaryRenalDisease?: string | null, Weight?: number | null, Height?: number | null, Gender?: Gender | null, MaritalStatus?: MaritalStatus | null, ContactNo?: string | null, PersonType?: PatientType | null, Status?: PatientStatus | null, RecordStatus?: RecordStatus | null, BloodGroup?: BloodGroup | null, CreatedAt?: string | null, Age?: string | null, UpdatedAt?: string | null, MedicalHistory?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Investigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, Examinations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null, FollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null } | null } | null };

export type ListPeopleQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;


export type ListPeopleQuery = { __typename?: 'Query', users?: { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', ID: string, name: string } } | null> | null, pagination?: { __typename?: 'Pagination', itemsPerPage: number, totalItems: number } | null } | null };

export type ListPersonMedicalHistoryQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonMedicalHistoryFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonMedicalHistoryQuery = { __typename?: 'Query', listPersonMedicalHistories?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory', ID: string, Description?: string | null, Reason?: string | null, StartDate?: string | null, EndDate?: string | null, Medications?: string | null, Type?: HistoryType | null, CreatedAt?: string | null, UpdatedAt?: string | null, Person: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ListPersonFollowUpQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonFollowUpFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonFollowUpQuery = { __typename?: 'Query', listPersonFollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ListAllPersonFollowUpQueryVariables = Exact<{
  filter?: InputMaybe<PersonFollowUpFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListAllPersonFollowUpQuery = { __typename?: 'Query', listAllPersonFollowUps?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp', ID: string, Description?: string | null, Complaints?: string | null, CaseStatus?: string | null, OtherFindings?: string | null, Referrals?: string | null, ConsultantOpinion?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DialysisPlan?: { __typename?: 'DialysisPlan', Type?: string | null, Plan?: string | null, Frequency?: string | null } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, Phn?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ListExaminationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListExaminationsQuery = { __typename?: 'Query', listExaminations?: { __typename?: 'ExaminationList', items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null } | null } | null> | null } | { __typename?: 'InvestigationList', items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ExaminationFieldsFragment = { __typename?: 'Examination', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null };

export type InvestigationFieldsFragment = { __typename?: 'Investigation', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null };

export type GetExaminationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExaminationQuery = { __typename?: 'Query', getExamination?: { __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type ListInvestigationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListInvestigationsQuery = { __typename?: 'Query', listInvestigations?: { __typename?: 'ExaminationList', items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonExaminationList', items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetInvestigationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetInvestigationQuery = { __typename?: 'Query', getInvestigation?: { __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type ListPersonExaminationQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonExaminationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonExaminationQuery = { __typename?: 'Query', listPersonExaminations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ListAllPersonExaminationQueryVariables = Exact<{
  filter?: InputMaybe<PersonExaminationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListAllPersonExaminationQuery = { __typename?: 'Query', listAllPersonExaminations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetPersonExaminationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonExaminationQuery = { __typename?: 'Query', getPersonExamination?: { __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Examination?: { __typename?: 'Examination', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type ListPersonInvestigationQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonInvestigationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonInvestigationQuery = { __typename?: 'Query', listPersonInvestigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type ListAllPersonInvestigationQueryVariables = Exact<{
  filter?: InputMaybe<PersonInvestigationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListAllPersonInvestigationQuery = { __typename?: 'Query', listAllPersonInvestigations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetPersonInvestigationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonInvestigationQuery = { __typename?: 'Query', getPersonInvestigation?: { __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation', ID: string, Description?: string | null, ValidDays?: number | null, Results?: any | null, ObtainedDate?: string | null, ExpectedDate?: string | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Investigation?: { __typename?: 'Investigation', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null, Inline?: boolean | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type ListPersonWorkupQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonWorkupFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonWorkupQuery = { __typename?: 'Query', listPersonWorkups?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Workup?: { __typename?: 'Workup', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetPersonWorkupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonWorkupQuery = { __typename?: 'Query', getPersonWorkup?: { __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup', ID: string, Description?: string | null, Results?: any | null, CreatedAt?: string | null, UpdatedAt?: string | null, DeletedAt?: string | null, Workup?: { __typename?: 'Workup', ID: string } | null, Person?: { __typename?: 'Person', ID: string, FirstName?: string | null, LastName?: string | null, Phn?: string | null } | null, Details?: { __typename?: 'FormDetails', Name?: string | null, Description?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type ListPersonOrganDonationQueryVariables = Exact<{
  ID: Scalars['ID'];
  filter?: InputMaybe<PersonOrganDonationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListPersonOrganDonationQuery = { __typename?: 'Query', listPersonOrganDonations?: { __typename?: 'ExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation', ID: string, DonationType?: string | null, PlannedDate?: string | null, PerformedDate?: string | null, DischargedDate?: string | null, AcuteRejection?: boolean | null, Donor?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null, Recipient?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null } | null } | null> | null } | { __typename?: 'PersonWorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', pagination?: { __typename?: 'Pagination', currentPage: number, prevPage: number, nextPage: number, totalItems: number, itemsPerPage: number } | null, items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetPersonOrganDonationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPersonOrganDonationQuery = { __typename?: 'Query', getPersonOrganDonation?: { __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation', ID: string, DonationType?: string | null, PlannedDate?: string | null, PerformedDate?: string | null, DischargedDate?: string | null, AcuteRejection?: boolean | null, Donor?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null, Recipient?: { __typename?: 'Person', FirstName?: string | null, LastName?: string | null, Phn?: string | null, ID: string } | null } | null } | null };

export type WorkupFieldsFragment = { __typename?: 'Workup', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null };

export type ListWorkupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListWorkupsQuery = { __typename?: 'Query', listWorkups?: { __typename?: 'ExaminationList', items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow' } | null } | null> | null } | { __typename?: 'WorkupList', items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null } | null } | null> | null } | null };

export type GetWorkupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetWorkupQuery = { __typename?: 'Query', getWorkup?: { __typename?: 'WorkupEdge', node?: { __typename?: 'Workup', ID: string, Order?: number | null, Details?: { __typename?: 'FormDetails', Name?: string | null } | null, Procedure?: { __typename?: 'Procedure', fields?: Array<{ __typename?: 'Fields', name?: string | null, type?: string | null, value?: string | null, prefix?: { __typename?: 'Prefix', classes?: string | null } | null, attributes?: { __typename?: 'Attributes', classes?: string | null, id?: string | null, max?: number | null, min?: number | null, step?: string | null, type?: string | null, label?: string | null, labelClasses?: string | null, fieldName?: string | null, image?: string | null } | null, extra?: { __typename?: 'Extra', options?: Array<{ __typename?: 'Items', title?: string | null, value?: string | null } | null> | null, items?: Array<{ __typename?: 'Items', id?: string | null, title?: string | null, value?: string | null, name?: string | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type WorkflowFieldsFragment = { __typename?: 'Workflow', ID: string, Name: string, Configuration: { __typename?: 'Configuration', components: Array<{ __typename?: 'Component', name: string, component: string, component_id: string }> } };

export type ListWorkflowsQueryVariables = Exact<{
  filter?: InputMaybe<WorkflowFilter>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>> | InputMaybe<OrderBy>>;
}>;


export type ListWorkflowsQuery = { __typename?: 'Query', listWorkflows?: { __typename?: 'ExaminationList', items?: Array<{ __typename?: 'ExaminationEdge', node?: { __typename?: 'Examination' } | null } | null> | null } | { __typename?: 'InvestigationList', items?: Array<{ __typename?: 'InvestigationEdge', node?: { __typename?: 'Investigation' } | null } | null> | null } | { __typename?: 'PersonExaminationList', items?: Array<{ __typename?: 'PersonExaminationEdge', node?: { __typename?: 'PersonExamination' } | null } | null> | null } | { __typename?: 'PersonFollowUpList', items?: Array<{ __typename?: 'PersonFollowUpEdge', node?: { __typename?: 'PersonFollowUp' } | null } | null> | null } | { __typename?: 'PersonInvestigationList', items?: Array<{ __typename?: 'PersonInvestigationEdge', node?: { __typename?: 'PersonInvestigation' } | null } | null> | null } | { __typename?: 'PersonList', items?: Array<{ __typename?: 'PersonEdge', node?: { __typename?: 'Person' } | null } | null> | null } | { __typename?: 'PersonMedicalHistoryList', items?: Array<{ __typename?: 'PersonMedicalHistoryEdge', node?: { __typename?: 'PersonMedicalHistory' } | null } | null> | null } | { __typename?: 'PersonOrganDonationList', items?: Array<{ __typename?: 'PersonOrganDonationEdge', node?: { __typename?: 'PersonOrganDonation' } | null } | null> | null } | { __typename?: 'PersonWorkupList', items?: Array<{ __typename?: 'PersonWorkupEdge', node?: { __typename?: 'PersonWorkup' } | null } | null> | null } | { __typename?: 'UserList', items?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User' } } | null> | null } | { __typename?: 'WorkflowList', items?: Array<{ __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow', ID: string, Name: string, Configuration: { __typename?: 'Configuration', components: Array<{ __typename?: 'Component', name: string, component: string, component_id: string }> } } | null } | null> | null } | { __typename?: 'WorkupList', items?: Array<{ __typename?: 'WorkupEdge', node?: { __typename?: 'Workup' } | null } | null> | null } | null };

export type GetWorkflowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetWorkflowQuery = { __typename?: 'Query', getWorkflow?: { __typename?: 'WorkflowEdge', node?: { __typename?: 'Workflow', ID: string, Name: string, Configuration: { __typename?: 'Configuration', components: Array<{ __typename?: 'Component', name: string, component: string, component_id: string }> } } | null } | null };

export const PersonWorkupFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonWorkupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonWorkup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Workup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Results"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"DeletedAt"}}]}}]} as unknown as DocumentNode<PersonWorkupFieldsFragment, unknown>;
export const ProcedureFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProcedureFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DynamicFormInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Procedure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classes"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"step"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"labelClasses"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"extra"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProcedureFragmentFragment, unknown>;
export const PersonFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"DateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryRenalDisease"}},{"kind":"Field","name":{"kind":"Name","value":"Weight"}},{"kind":"Field","name":{"kind":"Name","value":"Height"}},{"kind":"Field","name":{"kind":"Name","value":"Gender"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"ContactNo"}},{"kind":"Field","name":{"kind":"Name","value":"PersonType"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"RecordStatus"}},{"kind":"Field","name":{"kind":"Name","value":"BloodGroup"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}}]}}]} as unknown as DocumentNode<PersonFieldsFragment, unknown>;
export const PersonOrganDonationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonOrganDonationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonOrganDonation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Donor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DonationType"}},{"kind":"Field","name":{"kind":"Name","value":"PlannedDate"}},{"kind":"Field","name":{"kind":"Name","value":"PerformedDate"}},{"kind":"Field","name":{"kind":"Name","value":"DischargedDate"}},{"kind":"Field","name":{"kind":"Name","value":"AcuteRejection"}}]}}]} as unknown as DocumentNode<PersonOrganDonationFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const PaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}}]} as unknown as DocumentNode<PaginationFragment, unknown>;
export const PersonMedicalHistoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonMedicalHistoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Reason"}},{"kind":"Field","name":{"kind":"Name","value":"StartDate"}},{"kind":"Field","name":{"kind":"Name","value":"EndDate"}},{"kind":"Field","name":{"kind":"Name","value":"Medications"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonMedicalHistoryFieldsFragment, unknown>;
export const PersonInvestigationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonInvestigationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Investigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Inline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ValidDays"}},{"kind":"Field","name":{"kind":"Name","value":"Results"}},{"kind":"Field","name":{"kind":"Name","value":"ValidDays"}},{"kind":"Field","name":{"kind":"Name","value":"ObtainedDate"}},{"kind":"Field","name":{"kind":"Name","value":"ExpectedDate"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"DeletedAt"}}]}}]} as unknown as DocumentNode<PersonInvestigationFieldsFragment, unknown>;
export const PersonExaminationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonExaminationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExamination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Examination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Results"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"DeletedAt"}}]}}]} as unknown as DocumentNode<PersonExaminationFieldsFragment, unknown>;
export const PersonFollowUpFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonFollowUpFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Complaints"}},{"kind":"Field","name":{"kind":"Name","value":"CaseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"DialysisPlan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"Plan"}},{"kind":"Field","name":{"kind":"Name","value":"Frequency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"OtherFindings"}},{"kind":"Field","name":{"kind":"Name","value":"Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"ConsultantOpinion"}},{"kind":"Field","name":{"kind":"Name","value":"Person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"Phn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}}]}}]} as unknown as DocumentNode<PersonFollowUpFieldsFragment, unknown>;
export const PersonExtendedFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonExtended"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Age"}},{"kind":"Field","name":{"kind":"Name","value":"CreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"MedicalHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"desc"}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"CreatedAt","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Investigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"desc"}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"CreatedAt","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Examinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"desc"}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"CreatedAt","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"FollowUps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"desc"}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"CreatedAt","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonMedicalHistoryFieldsFragmentDoc.definitions,...PersonInvestigationFieldsFragmentDoc.definitions,...PersonExaminationFieldsFragmentDoc.definitions,...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PersonExtendedFragment, unknown>;
export const ExaminationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExaminationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Examination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Order"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]} as unknown as DocumentNode<ExaminationFieldsFragment, unknown>;
export const InvestigationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvestigationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Investigation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Order"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]} as unknown as DocumentNode<InvestigationFieldsFragment, unknown>;
export const WorkupFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkupFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Order"}},{"kind":"Field","name":{"kind":"Name","value":"Details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]} as unknown as DocumentNode<WorkupFieldsFragment, unknown>;
export const WorkflowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkflowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workflow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"component_id"}}]}}]}}]}}]} as unknown as DocumentNode<WorkflowFieldsFragment, unknown>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userLogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const NewPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPatient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPatientMutation, NewPatientMutationVariables>;
export const NewPersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonFollowUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}},...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonFollowUpMutation, NewPersonFollowUpMutationVariables>;
export const UpdatePersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonFollowUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}},...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePersonFollowUpMutation, UpdatePersonFollowUpMutationVariables>;
export const UpdatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExtended"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions,...PersonExtendedFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePatientMutation, UpdatePatientMutationVariables>;
export const AddPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExtended"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions,...PersonExtendedFragmentDoc.definitions]} as unknown as DocumentNode<AddPatientMutation, AddPatientMutationVariables>;
export const AddWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workflowInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkflowInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workflowInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkflowFields"}}]}}]}}]}},...WorkflowFieldsFragmentDoc.definitions]} as unknown as DocumentNode<AddWorkflowMutation, AddWorkflowMutationVariables>;
export const NewHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonMedicalHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}}]}},...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewHistoryMutation, NewHistoryMutationVariables>;
export const NewPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExaminationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}}]}},...PersonExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonExaminationMutation, NewPersonExaminationMutationVariables>;
export const NewPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}},...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonInvestigationMutation, NewPersonInvestigationMutationVariables>;
export const UpdatePersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}},...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePersonInvestigationMutation, UpdatePersonInvestigationMutationVariables>;
export const NewPersonWorkupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPersonWorkup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonWorkupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonWorkup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonWorkupFields"}}]}}]}}]}},...PersonWorkupFieldsFragmentDoc.definitions]} as unknown as DocumentNode<NewPersonWorkupMutation, NewPersonWorkupMutationVariables>;
export const UpdatePersonWorkupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonWorkup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonWorkupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonWorkup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonWorkupFields"}}]}}]}}]}},...PersonWorkupFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePersonWorkupMutation, UpdatePersonWorkupMutationVariables>;
export const CreatePersonOrganDonationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePersonOrganDonation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonOrganDonationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonOrganDonation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOrganDonationFields"}}]}}]}}]}},...PersonOrganDonationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreatePersonOrganDonationMutation, CreatePersonOrganDonationMutationVariables>;
export const UpdatePersonOrganDonationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonOrganDonation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonOrganDonationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonOrganDonation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOrganDonationFields"}}]}}]}}]}},...PersonOrganDonationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePersonOrganDonationMutation, UpdatePersonOrganDonationMutationVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export const ListPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPatients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPatients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"Field","name":{"kind":"Name","value":"Age"}}]}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPatientsQuery, ListPatientsQueryVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExtended"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions,...PersonExtendedFragmentDoc.definitions]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const GetPatientOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatientOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExtended"}}]}}]}}]}},...PersonFieldsFragmentDoc.definitions,...PersonExtendedFragmentDoc.definitions]} as unknown as DocumentNode<GetPatientOverviewQuery, GetPatientOverviewQueryVariables>;
export const ListPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPeople"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPeopleQuery, ListPeopleQueryVariables>;
export const ListPersonMedicalHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonMedicalHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonMedicalHistoryFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonMedicalHistories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonMedicalHistoryFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonMedicalHistoryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;
export const ListPersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonFollowUps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonFollowUpQuery, ListPersonFollowUpQueryVariables>;
export const ListAllPersonFollowUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAllPersonFollowUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFollowUpFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAllPersonFollowUps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonFollowUpFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonFollowUpFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListAllPersonFollowUpQuery, ListAllPersonFollowUpQueryVariables>;
export const ListExaminationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListExaminations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listExaminations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExaminationFields"}}]}}]}}]}}]}},...ExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListExaminationsQuery, ListExaminationsQueryVariables>;
export const GetExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExaminationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...ExaminationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetExaminationQuery, GetExaminationQueryVariables>;
export const ListInvestigationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListInvestigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listInvestigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvestigationFields"}}]}}]}}]}}]}},...InvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListInvestigationsQuery, ListInvestigationsQueryVariables>;
export const GetInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvestigationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...InvestigationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetInvestigationQuery, GetInvestigationQueryVariables>;
export const ListPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExaminationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonExaminations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonExaminationQuery, ListPersonExaminationQueryVariables>;
export const ListAllPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAllPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonExaminationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAllPersonExaminations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonExaminationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListAllPersonExaminationQuery, ListAllPersonExaminationQueryVariables>;
export const GetPersonExaminationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonExamination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonExamination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonExaminationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...PersonExaminationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonExaminationQuery, GetPersonExaminationQueryVariables>;
export const ListPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonInvestigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonInvestigationQuery, ListPersonInvestigationQueryVariables>;
export const ListAllPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAllPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInvestigationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAllPersonInvestigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonInvestigationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListAllPersonInvestigationQuery, ListAllPersonInvestigationQueryVariables>;
export const GetPersonInvestigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonInvestigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonInvestigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonInvestigationFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...PersonInvestigationFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonInvestigationQuery, GetPersonInvestigationQueryVariables>;
export const ListPersonWorkupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonWorkup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonWorkupFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonWorkups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonWorkupFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonWorkupFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonWorkupQuery, ListPersonWorkupQueryVariables>;
export const GetPersonWorkupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonWorkup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonWorkup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonWorkupFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...PersonWorkupFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonWorkupQuery, GetPersonWorkupQueryVariables>;
export const ListPersonOrganDonationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPersonOrganDonation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonOrganDonationFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPersonOrganDonations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PersonID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOrganDonationFields"}}]}}]}}]}}]}},...PaginationFragmentDoc.definitions,...PersonOrganDonationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListPersonOrganDonationQuery, ListPersonOrganDonationQueryVariables>;
export const GetPersonOrganDonationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonOrganDonation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonOrganDonation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonOrganDonationFields"}}]}}]}}]}},...PersonOrganDonationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetPersonOrganDonationQuery, GetPersonOrganDonationQueryVariables>;
export const ListWorkupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListWorkups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listWorkups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkupFields"}}]}}]}}]}}]}},...WorkupFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListWorkupsQuery, ListWorkupsQueryVariables>;
export const GetWorkupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWorkup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkupFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProcedureFragment"}}]}}]}}]}},...WorkupFieldsFragmentDoc.definitions,...ProcedureFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetWorkupQuery, GetWorkupQueryVariables>;
export const ListWorkflowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListWorkflows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkflowFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderBy"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listWorkflows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkflowFields"}}]}}]}}]}}]}},...WorkflowFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ListWorkflowsQuery, ListWorkflowsQueryVariables>;
export const GetWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkflowFields"}}]}}]}}]}},...WorkflowFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetWorkflowQuery, GetWorkflowQueryVariables>;
export type UserLoginMutationStore = OperationStore<UserLoginMutation, UserLoginMutationVariables>;
export type NewPatientMutationStore = OperationStore<NewPatientMutation, NewPatientMutationVariables>;
export type NewPersonFollowUpMutationStore = OperationStore<NewPersonFollowUpMutation, NewPersonFollowUpMutationVariables>;
export type UpdatePersonFollowUpMutationStore = OperationStore<UpdatePersonFollowUpMutation, UpdatePersonFollowUpMutationVariables>;
export type UpdatePatientMutationStore = OperationStore<UpdatePatientMutation, UpdatePatientMutationVariables>;
export type AddPatientMutationStore = OperationStore<AddPatientMutation, AddPatientMutationVariables>;
export type AddWorkflowMutationStore = OperationStore<AddWorkflowMutation, AddWorkflowMutationVariables>;
export type NewHistoryMutationStore = OperationStore<NewHistoryMutation, NewHistoryMutationVariables>;
export type NewPersonExaminationMutationStore = OperationStore<NewPersonExaminationMutation, NewPersonExaminationMutationVariables>;
export type NewPersonInvestigationMutationStore = OperationStore<NewPersonInvestigationMutation, NewPersonInvestigationMutationVariables>;
export type UpdatePersonInvestigationMutationStore = OperationStore<UpdatePersonInvestigationMutation, UpdatePersonInvestigationMutationVariables>;
export type NewPersonWorkupMutationStore = OperationStore<NewPersonWorkupMutation, NewPersonWorkupMutationVariables>;
export type UpdatePersonWorkupMutationStore = OperationStore<UpdatePersonWorkupMutation, UpdatePersonWorkupMutationVariables>;
export type CreatePersonOrganDonationMutationStore = OperationStore<CreatePersonOrganDonationMutation, CreatePersonOrganDonationMutationVariables>;
export type UpdatePersonOrganDonationMutationStore = OperationStore<UpdatePersonOrganDonationMutation, UpdatePersonOrganDonationMutationVariables>;
export type ListUsersQueryStore = OperationStore<ListUsersQuery, ListUsersQueryVariables>;
export type ListPatientsQueryStore = OperationStore<ListPatientsQuery, ListPatientsQueryVariables>;
export type GetPatientQueryStore = OperationStore<GetPatientQuery, GetPatientQueryVariables>;
export type GetPatientOverviewQueryStore = OperationStore<GetPatientOverviewQuery, GetPatientOverviewQueryVariables>;
export type ListPeopleQueryStore = OperationStore<ListPeopleQuery, ListPeopleQueryVariables>;
export type ListPersonMedicalHistoryQueryStore = OperationStore<ListPersonMedicalHistoryQuery, ListPersonMedicalHistoryQueryVariables>;
export type ListPersonFollowUpQueryStore = OperationStore<ListPersonFollowUpQuery, ListPersonFollowUpQueryVariables>;
export type ListAllPersonFollowUpQueryStore = OperationStore<ListAllPersonFollowUpQuery, ListAllPersonFollowUpQueryVariables>;
export type ListExaminationsQueryStore = OperationStore<ListExaminationsQuery, ListExaminationsQueryVariables>;
export type GetExaminationQueryStore = OperationStore<GetExaminationQuery, GetExaminationQueryVariables>;
export type ListInvestigationsQueryStore = OperationStore<ListInvestigationsQuery, ListInvestigationsQueryVariables>;
export type GetInvestigationQueryStore = OperationStore<GetInvestigationQuery, GetInvestigationQueryVariables>;
export type ListPersonExaminationQueryStore = OperationStore<ListPersonExaminationQuery, ListPersonExaminationQueryVariables>;
export type ListAllPersonExaminationQueryStore = OperationStore<ListAllPersonExaminationQuery, ListAllPersonExaminationQueryVariables>;
export type GetPersonExaminationQueryStore = OperationStore<GetPersonExaminationQuery, GetPersonExaminationQueryVariables>;
export type ListPersonInvestigationQueryStore = OperationStore<ListPersonInvestigationQuery, ListPersonInvestigationQueryVariables>;
export type ListAllPersonInvestigationQueryStore = OperationStore<ListAllPersonInvestigationQuery, ListAllPersonInvestigationQueryVariables>;
export type GetPersonInvestigationQueryStore = OperationStore<GetPersonInvestigationQuery, GetPersonInvestigationQueryVariables>;
export type ListPersonWorkupQueryStore = OperationStore<ListPersonWorkupQuery, ListPersonWorkupQueryVariables>;
export type GetPersonWorkupQueryStore = OperationStore<GetPersonWorkupQuery, GetPersonWorkupQueryVariables>;
export type ListPersonOrganDonationQueryStore = OperationStore<ListPersonOrganDonationQuery, ListPersonOrganDonationQueryVariables>;
export type GetPersonOrganDonationQueryStore = OperationStore<GetPersonOrganDonationQuery, GetPersonOrganDonationQueryVariables>;
export type ListWorkupsQueryStore = OperationStore<ListWorkupsQuery, ListWorkupsQueryVariables>;
export type GetWorkupQueryStore = OperationStore<GetWorkupQuery, GetWorkupQueryVariables>;
export type ListWorkflowsQueryStore = OperationStore<ListWorkflowsQuery, ListWorkflowsQueryVariables>;
export type GetWorkflowQueryStore = OperationStore<GetWorkflowQuery, GetWorkflowQueryVariables>;