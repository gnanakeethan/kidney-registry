--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: blood_group; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.blood_group AS ENUM (
    'A+',
    'A-',
    'B+',
    'B-',
    'O+',
    'O-',
    'AB+',
    'AB-',
    'NA'
    );


ALTER TYPE public.blood_group OWNER TO gnanakeethan;

--
-- Name: case_status; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.case_status AS ENUM (
    'PRE',
    'POST',
    'NA',
    'WORKING_UP',
    'ACTIVE',
    'SUSPENDED',
    'PERMANENTLY_UNFIT',
    'DECEASED_WILL_AWAITING_TRANSPLANT',
    'DECEASED_POST_CADAVERIC_TRANSPLANT',
    'RECEIVED_LIVE_TRANSPLANT'
    );


ALTER TYPE public.case_status OWNER TO gnanakeethan;

--
-- Name: gender; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.gender AS ENUM (
    'MALE',
    'FEMALE',
    'OTHER',
    'N/A',
    'NA'
    );


ALTER TYPE public.gender OWNER TO gnanakeethan;

--
-- Name: history_type; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.history_type AS ENUM (
    'COMPLAINT',
    'MEDICAL',
    'SURGICAL',
    'SOCIAL'
    );


ALTER TYPE public.history_type OWNER TO gnanakeethan;

--
-- Name: person_status; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.person_status AS ENUM (
    'ACTIVE',
    'INACTIVE',
    'NA',
    'WORKING_UP',
    'SUSPENDED',
    'PERMANENTLY_UNFIT',
    'DECEASED_WILL_AWAITING_TRANSPLANT',
    'DECEASED_POST_CADAVERIC_TRANSPLANT',
    'RECEIVED_LIVE_TRANSPLANT'
    );


ALTER TYPE public.person_status OWNER TO gnanakeethan;

--
-- Name: person_type; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.person_type AS ENUM (
    'PATIENT',
    'DONOR',
    'RECIPIENT',
    'NA'
    );


ALTER TYPE public.person_type OWNER TO gnanakeethan;

--
-- Name: record_status; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.record_status AS ENUM (
    'DRAFT',
    'PUBLISHED',
    'REDACTED',
    'NA'
    );


ALTER TYPE public.record_status OWNER TO gnanakeethan;

--
-- Name: transplantation_type; Type: TYPE; Schema: public; Owner: gnanakeethan
--

CREATE TYPE public.transplantation_type AS ENUM (
    'CADAVERIC',
    'LIV',
    'NA'
    );


ALTER TYPE public.transplantation_type OWNER TO gnanakeethan;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: action; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.action
(
    id         character(27) NOT NULL,
    action     text,
    user_id    character(27) NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.action
    OWNER TO gnanakeethan;

--
-- Name: allergies; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.allergies
(
    id                character(27) NOT NULL,
    allergy           text,
    description       text,
    conditions        text,
    associated_causes text,
    type              text,
    created_at        timestamp with time zone DEFAULT now(),
    updated_at        timestamp with time zone DEFAULT now(),
    deleted_at        timestamp with time zone
);


ALTER TABLE public.allergies
    OWNER TO gnanakeethan;

--
-- Name: comorbidities; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.comorbidities
(
    id          character(27) NOT NULL,
    comorbidity text,
    description text,
    created_at  timestamp with time zone DEFAULT now(),
    updated_at  timestamp with time zone DEFAULT now(),
    deleted_at  timestamp with time zone
);


ALTER TABLE public.comorbidities
    OWNER TO gnanakeethan;

--
-- Name: examinations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.examinations
(
    id         character(27) NOT NULL,
    details    jsonb,
    procedure  jsonb,
    "order"    integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone
);


ALTER TABLE public.examinations
    OWNER TO gnanakeethan;

--
-- Name: investigations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.investigations
(
    id         character(27) NOT NULL,
    details    jsonb,
    procedure  jsonb,
    "order"    integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone
);


ALTER TABLE public.investigations
    OWNER TO gnanakeethan;

--
-- Name: person_allergy; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_allergy
(
    id         character(27) NOT NULL,
    person_id  character(27) NOT NULL,
    allergy_id character(27) NOT NULL,
    note       text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone
);


ALTER TABLE public.person_allergy
    OWNER TO gnanakeethan;

--
-- Name: person_comorbidities; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_comorbidities
(
    id             character(27) NOT NULL,
    comorbidity_id character(27) NOT NULL,
    person_id      character(27) NOT NULL,
    created_at     timestamp with time zone DEFAULT now(),
    updated_at     timestamp with time zone DEFAULT now(),
    deleted_at     timestamp with time zone
);


ALTER TABLE public.person_comorbidities
    OWNER TO gnanakeethan;

--
-- Name: person_examinations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_examinations
(
    id             character(27) NOT NULL,
    description    text          NOT NULL,
    details        jsonb,
    results        jsonb,
    examination_id character(27),
    procedure      jsonb,
    person_id      character(27),
    created_at     timestamp with time zone DEFAULT now(),
    updated_at     timestamp with time zone DEFAULT now(),
    deleted_at     timestamp with time zone
);


ALTER TABLE public.person_examinations
    OWNER TO gnanakeethan;

--
-- Name: person_follow_ups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_follow_ups
(
    id                 character(27) NOT NULL,
    description        text,
    person_id          character(27) NOT NULL,
    complaints         text,
    case_status        public.case_status,
    created_at         timestamp with time zone DEFAULT now(),
    updated_at         timestamp with time zone DEFAULT now(),
    deleted_at         timestamp with time zone,
    dialysis_plan      jsonb,
    other_findings     text,
    referrals          text,
    consultant_opinion text,
    donation_id        character(27)
);


ALTER TABLE public.person_follow_ups
    OWNER TO gnanakeethan;

--
-- Name: person_follow_ups_medicines; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_follow_ups_medicines
(
    id            character(27) NOT NULL,
    medicine_code text          NOT NULL,
    reason        text,
    follow_up_id  character(27) NOT NULL,
    created_at    timestamp with time zone DEFAULT now(),
    updated_at    timestamp with time zone DEFAULT now(),
    deleted_at    timestamp with time zone,
    name          text,
    dosage        text,
    frequency     text,
    duration      text,
    start_date    timestamp with time zone,
    end_date      timestamp with time zone
);


ALTER TABLE public.person_follow_ups_medicines
    OWNER TO gnanakeethan;

--
-- Name: person_investigations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_investigations
(
    id               character(27) NOT NULL,
    description      text          NOT NULL,
    details          jsonb,
    results          jsonb,
    investigation_id character(27),
    procedure        jsonb,
    person_id        character(27) NOT NULL,
    obtained_date    timestamp with time zone,
    valid_days       integer,
    created_at       timestamp with time zone DEFAULT now(),
    updated_at       timestamp with time zone DEFAULT now(),
    deleted_at       timestamp with time zone,
    expected_date    timestamp with time zone
);


ALTER TABLE public.person_investigations
    OWNER TO gnanakeethan;

--
-- Name: person_medical_history; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_medical_history
(
    id          character(27) NOT NULL,
    person_id   character(27) NOT NULL,
    start_date  timestamp with time zone,
    end_date    timestamp with time zone,
    reason      text,
    description text,
    medications text,
    type        public.history_type,
    created_at  timestamp with time zone DEFAULT now(),
    updated_at  timestamp with time zone DEFAULT now(),
    deleted_at  timestamp with time zone
);


ALTER TABLE public.person_medical_history
    OWNER TO gnanakeethan;

--
-- Name: person_organ_donation; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_organ_donation
(
    id              character(27)               NOT NULL,
    receiver_id     character(27)               NOT NULL,
    donor_id        character(27)               NOT NULL,
    donation_type   public.transplantation_type NOT NULL,
    planned_date    timestamp with time zone,
    performed_date  timestamp with time zone,
    discharged_date timestamp with time zone,
    acute_rejection boolean,
    created_at      timestamp with time zone DEFAULT now(),
    updated_at      timestamp with time zone DEFAULT now(),
    deleted_at      timestamp with time zone
);


ALTER TABLE public.person_organ_donation
    OWNER TO gnanakeethan;

--
-- Name: person_organ_donation_complications; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_organ_donation_complications
(
    id          character(27)      NOT NULL,
    donation_id character(27)      NOT NULL,
    description text,
    type        public.case_status NOT NULL,
    created_at  timestamp with time zone DEFAULT now(),
    updated_at  timestamp with time zone DEFAULT now(),
    deleted_at  timestamp with time zone
);


ALTER TABLE public.person_organ_donation_complications
    OWNER TO gnanakeethan;

--
-- Name: person_relations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_relations
(
    id            character(27)          NOT NULL,
    patient_id    character(27)          NOT NULL,
    relation_id   character(27)          NOT NULL,
    relation_type character varying(255) NOT NULL,
    created_at    timestamp with time zone DEFAULT now(),
    updated_at    timestamp with time zone DEFAULT now(),
    deleted_at    timestamp with time zone
);


ALTER TABLE public.person_relations
    OWNER TO gnanakeethan;

--
-- Name: person_suspensions; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_suspensions
(
    id               character(27) NOT NULL,
    person_id        character(27) NOT NULL,
    workup_id        character(27),
    reason           text,
    reviewed_date    timestamp(6) without time zone,
    next_review_date timestamp(6) without time zone,
    concerns         text,
    created_at       timestamp with time zone DEFAULT now(),
    updated_at       timestamp with time zone DEFAULT now(),
    deleted_at       timestamp with time zone
);


ALTER TABLE public.person_suspensions
    OWNER TO gnanakeethan;

--
-- Name: person_workups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_workups
(
    id              character(27) NOT NULL,
    workup_id       character(27) NOT NULL,
    person_id       character(27) NOT NULL,
    procedure       jsonb         NOT NULL,
    comments        text,
    initiation_date timestamp(6) without time zone,
    activation_date timestamp(6) without time zone,
    created_at      timestamp with time zone DEFAULT now(),
    updated_at      timestamp with time zone DEFAULT now(),
    deleted_at      timestamp with time zone,
    details         jsonb,
    results         jsonb
);


ALTER TABLE public.person_workups
    OWNER TO gnanakeethan;

--
-- Name: persons; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.persons
(
    id                     character(27)          NOT NULL,
    first_name             text                   NOT NULL,
    last_name              text,
    address                text,
    date_of_birth          date,
    ethnicity              text,
    phn                    character varying(255),
    primary_renal_disease  character varying(255),
    weight                 double precision,
    height                 double precision,
    gender                 public.gender,
    marital_status         character varying(255) NOT NULL,
    contact_no             character varying(30),
    person_type            public.person_type       DEFAULT 'PATIENT'::public.person_type,
    waiting_list_inclusion date,
    blood_group            public.blood_group,
    status                 public.person_status,
    record_status          public.record_status,
    created_by             character(27),
    record_removal_at      timestamp with time zone,
    created_at             timestamp with time zone DEFAULT now(),
    updated_at             timestamp with time zone DEFAULT now(),
    deleted_at             timestamp with time zone,
    hla                    jsonb
);


ALTER TABLE public.persons
    OWNER TO gnanakeethan;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.users
(
    id         character(27)          NOT NULL,
    username   character varying(255) NOT NULL,
    password   character varying(255) NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone
);


ALTER TABLE public.users
    OWNER TO gnanakeethan;

--
-- Name: workups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.workups
(
    id          character(27) NOT NULL,
    name        text          NOT NULL,
    description text,
    procedure   jsonb,
    "order"     integer,
    created_at  timestamp with time zone DEFAULT now(),
    updated_at  timestamp with time zone DEFAULT now(),
    deleted_at  timestamp with time zone,
    details     jsonb
);


ALTER TABLE public.workups
    OWNER TO gnanakeethan;

--
-- Data for Name: action; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.action (id, action, user_id, created_at) FROM stdin;
\.


--
-- Data for Name: allergies; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.allergies (id, allergy, description, conditions, associated_causes, type, created_at, updated_at,
                       deleted_at) FROM stdin;
\.


--
-- Data for Name: comorbidities; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.comorbidities (id, comorbidity, description, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: examinations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.examinations (id, details, procedure, "order", created_at, updated_at, deleted_at) FROM stdin;
25UFJC1Hibtye5BG1RSSIdnp3Dz	{"name": "Cardiovascular Examination", "description": "Description"}	{"fields": [{"name": "PulseRate", "type": "input", "value": "72", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Pulse Rate:", "classes": "form-input rounded", "disabled": false}}, {"name": "PulseVolume", "type": "input", "value": "", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Pulse Volume:", "classes": "form-input rounded", "disabled": false}}, {"name": "Blood Pressure", "type": "input", "value": "", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "label": "Blood Pressure:", "classes": "form-input rounded", "disabled": false}}, {"name": "Pulse Pressure", "type": "input", "value": "", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "label": "Pulse Pressure:", "classes": "form-input rounded", "disabled": false}}, {"name": "JVP", "type": "customradio", "extra": {"items": [{"id": "Normal", "name": "JVP", "title": "Normal", "value": "Normal"}, {"id": "Elevated", "name": "JVP", "title": "Elevated", "value": "Elevated"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "JVP: ", "labelClasses": "px-4 py-2 border\\t border-black rounded-xl labelStyle"}}, {"name": "CarotidBruit", "type": "customradio", "extra": {"items": [{"id": "Yes", "name": "CarotidBruit", "title": "Yes", "value": "Yes"}, {"id": "No", "name": "CarotidBruit", "title": "No", "value": "No"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Carotid Bruit: ", "labelClasses": "px-4 py-2 border\\t border-black rounded-xl labelStyle"}}, {"name": "Auscultation", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Auscultation", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "OtherFindings", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Findings", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}]}	2	2022-02-22 23:48:10.766329	2022-02-22 23:48:10.766329	\N
25UX3S0dxve3Oj8IRQXDBlls3Lz	{"name": "Abdominal Examination", "description": "Description"}	{"fields": [{"name": "Findings", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Findings", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "AbdominalDiagram", "type": "imagedetail", "value": "30", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 1, "step": 1, "type": "number", "image": "https://kidney-project-lka-public-media.s3.ap-southeast-1.amazonaws.com/abdominal.png", "label": "Abdominal Diagram Notes:", "classes": "form-input rounded", "disabled": false}}]}	4	2022-02-23 02:14:05.240992	2022-02-23 02:14:05.240992	\N
25UX4eBY5Se9LpqsFo2g2hlqZVU	{"name": "Central Nervous System Examination", "description": "Description"}	{"fields": [{"name": "MentalStatus", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Mental Status", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "Speech", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Speech", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "LeftPupilReaction", "type": "select", "extra": {"options": [{"title": "Reactive", "value": "REACTIVE"}, {"title": "Non Reactive", "value": "NON_REACTIVE"}]}, "rules": [], "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "id-field", "label": "Left Pupil Reaction", "classes": "form-select", "disabled": false}}, {"name": "LeftPupilSize", "type": "input", "value": "72", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Left Pupil Size:", "classes": "form-input rounded", "disabled": false}}, {"name": "RightPupilReaction", "type": "select", "extra": {"options": [{"title": "Reactive", "value": "REACTIVE"}, {"title": "Non Reactive", "value": "NON_REACTIVE"}]}, "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "id-field", "label": "Right Pupil Reaction", "classes": "form-select", "disabled": false}}, {"name": "RightPupilSize", "type": "input", "value": "72", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Right Pupil Size:", "classes": "form-input rounded", "disabled": false}}, {"name": "OtherFindings", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Findings", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}]}	5	2022-02-23 02:14:28.095718	2022-02-23 02:14:28.095718	\N
25UWrCJTwydvZqctBRHhxU4Kc5G	{"name": "Respiratory Examination", "description": "Description"}	{"fields": [{"name": "RespiratoryRate", "type": "input", "value": "30", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 1, "step": 1, "type": "number", "label": "Respiratory Rate:", "classes": "form-input rounded", "disabled": false}}, {"name": "RespiratoryDiagram", "type": "imagedetail", "value": "30", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 250, "min": 1, "step": 1, "type": "number", "image": "https://kidney-project-lka-public-media.s3.ap-southeast-1.amazonaws.com/lungs-diagram.svg", "label": "Observations:", "classes": "form-input rounded", "disabled": false}}, {"name": "SpO2", "type": "input", "value": "99", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 100, "min": 0, "step": 1, "type": "number", "label": "SpO2:", "classes": "form-input rounded", "disabled": false}}, {"name": "Auscultation", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Auscultation", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "OtherFindings", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Findings", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}]}	3	2022-02-23 02:12:26.040923	2022-02-23 02:12:26.040923	\N
25UEz8OSI3rXvEx9J9gJknXTxXw	{"name": "General Examination", "inline": true, "description": "Description"}	{"fields": [{"name": "Build", "type": "customradio", "extra": {"items": [{"id": "Lean", "name": "BUILD", "title": "Lean", "value": "Lean"}, {"id": "Average", "name": "BUILD", "title": "Average", "value": "Average"}, {"id": "Obese", "name": "BUILD", "title": "Obese", "value": "Obese"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Build: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle"}}, {"name": "BuildComments", "type": "input", "value": "", "prefix": {"classes": " w-full"}, "attributes": {"id": "Type", "label": "Build Comments:", "classes": "form-input rounded w-full", "disabled": false}}, {"name": "Temperature", "type": "customradio", "extra": {"items": [{"id": "Febrile", "name": "Temp", "title": "Febrile", "value": "Febrile"}, {"id": "Afebrile", "name": "Temp", "title": "Afebrile", "value": "Afebrile"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Temperature: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle"}}, {"name": "TemperatureIfFebrile", "type": "input", "value": "37.5", "prefix": {"classes": "mb-2 w-full"}, "attributes": {"id": "Type", "max": 45, "min": 20, "step": 0.1, "type": "number", "label": "Body Temperature If Febrile:", "classes": "form-input rounded w-20", "disabled": false}}, {"name": "General", "type": "customcheckbox", "extra": {"items": [{"name": "Dyspnoea", "title": "Dyspnoea", "value": "Dyspnoea"}, {"name": "Cyanosis", "title": "Cyanosis", "value": "Cyanosis"}, {"name": "Pallor", "title": "Pallor", "value": "Pallor"}, {"name": "Not Pale", "title": "Not Pale", "value": "Not Pale"}, {"name": "Clubbing", "title": "Clubbing", "value": "Clubbing"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "General: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "Extremities", "type": "customradio", "extra": {"items": [{"id": "Warm", "name": "Extremities", "title": "Warm", "value": "Warm"}, {"id": "Cold & Clammy", "name": "Extremities", "title": "Cold & Clammy", "value": "Cold & Clammy"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Extremities: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle"}}, {"name": "Dehydration", "type": "customradio", "extra": {"items": [{"id": "Good", "name": "Good", "title": "Good", "value": "Good"}, {"id": "Dehydrated", "name": "Dehydrated", "title": "Dehydrated", "value": "Dehydrated"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Dehydration: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle"}}, {"name": "Skin", "type": "customcheckbox", "extra": {"items": [{"name": "Rashes", "title": "Rashes", "value": "Rashes"}, {"name": "Wounds", "title": "Wounds", "value": "Wounds"}, {"name": "Tattoos", "title": "Tattoos", "value": "Tattoos"}, {"name": "Scars", "title": "Scars", "value": "Scars"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Skin: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "Dental", "type": "customcheckbox", "extra": {"items": [{"name": "Carius Teeth", "title": "Carius Teeth", "value": "Carius Teeth"}, {"name": "Oral Ulcers", "title": "Oral Ulcers", "value": "Oral Ulcers"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Dental: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "OtherComments", "type": "textarea", "value": "", "prefix": {"classes": "mx-2 flex-grow w-full"}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Comments", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "PainScale", "type": "customradio", "extra": {"items": [{"id": "1", "name": "pain_scale", "title": "1", "value": "1"}, {"id": "2", "name": "pain_scale", "title": "2", "value": "2"}, {"id": "3", "name": "pain_scale", "title": "3", "value": "3"}, {"id": "4", "name": "pain_scale", "title": "4", "value": "4"}, {"id": "5", "name": "pain_scale", "title": "5", "value": "5"}, {"id": "6", "name": "pain_scale", "title": "6", "value": "6"}, {"id": "7", "name": "pain_scale", "title": "7", "value": "7"}, {"id": "8", "name": "pain_scale", "title": "8", "value": "8"}, {"id": "9", "name": "pain_scale", "title": "9", "value": "9"}, {"id": "10", "name": "pain_scale", "title": "10", "value": "10"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": "hidden", "fieldName": "Pain Scale: ", "labelClasses": "py-1 px-2 border border-gray-400 rounded-full labelStyle"}}]}	1	2022-02-22 23:47:19.018091	2022-02-22 23:47:19.018091	\N
\.


--
-- Data for Name: investigations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.investigations (id, details, procedure, "order", created_at, updated_at, deleted_at) FROM stdin;
25UFJC1Hibtye5BG1RSSIdnp3Ea	{"name": "RFT", "inline": true, "description": "Description"}	{"fields": [{"name": "BU", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "BU:", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "S.Cr", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "S.Cr :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "S.Na", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "S.Na :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "S.K", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "S.K :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "S.Ca", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "S.Ca :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "S.PO4 ", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "S.PO4 :", "classes": "form-input rounded my-2", "disabled": false}}]}	2	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Eb	{"name": "LFT", "inline": true, "description": "Description"}	{"fields": [{"name": "AST", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "AST :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "ALT", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "ALT :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "ALP", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "ALP :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "Albumin", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Albumin :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "Globulins", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Globulins :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "Total BR", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Total BR :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "Direct BR", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Direct BR :", "classes": "form-input rounded my-2", "disabled": false}}]}	3	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Ec	{"name": "Clotting Profile", "inline": true, "description": "Description"}	{"fields": [{"name": "PT/INR", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "PT/INR :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "APTT", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "APTT :", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Dz	{"name": "FBC", "inline": true, "description": "Description"}	{"fields": [{"name": "Hb", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Hb :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "WBC", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "WBC :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "DC", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "DC :", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "PLT ", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "PLT  :", "classes": "form-input rounded my-2", "disabled": false}}]}	1	2022-02-22 23:48:10.766329	2022-02-22 23:48:10.766329	\N
25UFJC1Hibtye5BG1RSSIdnp3Ee	{"name": "DIABETES ASSESSMENT ", "inline": true, "description": "Description"}	{"fields": [{"name": "FBS", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "FBS:", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "HbA1C", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HbA1C:", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Ed	{"name": "INFLAMMATORY MARKERS", "inline": true, "description": "Description"}	{"fields": [{"name": "CRP", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "CRP", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "ESR", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "ESR", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Ef	{"name": "LIPID PROFILE ", "inline": true, "description": "Description"}	{"fields": [{"name": "Total Cholesterol ", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Total Cholesterol ", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "HDL", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HDL", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "LDL", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "LDL", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "TGL", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "TGL", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "Total Cho/HDL ", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "Total Cho/HDL ", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Eg	{"name": "VIROLOGY ", "inline": true, "description": "Description"}	{"fields": [{"name": "HBsAg", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HBsAg", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "HBsAb", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HBsAb", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "HepCAb", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HepCAb", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "HIV AB", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "HIV AB", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "VDRL", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "VDRL", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "CMV IgG", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "CMV IgG", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "EBV IgG", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "EBV IgG", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Ei	{"name": "Urine culture", "inline": true, "description": "Description"}	{"fields": [{"name": "24 HOUR URINE INVESTIGATION", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "24 HOUR URINE INVESTIGATION", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
25UFJC1Hibtye5BG1RSSIdnp3Eh	{"name": "URINE ASSESSMENT ", "inline": true, "description": "Description"}	{"fields": [{"name": "APPEARENCE", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "APPEARENCE", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "WCC", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "WCC", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "RBC", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "RBC", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "PROTEIN", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "PROTEIN", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "KETONE BODIES", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "KETONE BODIES", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "ORGANISMS", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "ORGANISMS", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "CRYSTALS ", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "CRYSTALS ", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "URINE CULTURE", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "URINE CULTURE", "classes": "form-input rounded my-2", "disabled": false}}, {"name": "24 HOUR URINE INVESTIGATION", "type": "input", "value": "", "prefix": {"classes": "items-center m-2 mb-2 w-full"}, "attributes": {"id": "Type", "step": 1, "type": "number", "label": "24 HOUR URINE INVESTIGATION", "classes": "form-input rounded my-2", "disabled": false}}]}	4	2022-02-23 05:46:24.239854	2022-02-23 05:46:24.239854	\N
\.


--
-- Data for Name: person_allergy; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_allergy (id, person_id, allergy_id, note, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_comorbidities; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_comorbidities (id, comorbidity_id, person_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_examinations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_examinations (id, description, details, results, examination_id, procedure, person_id, created_at,
                                 updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_follow_ups; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_follow_ups (id, description, person_id, complaints, case_status, created_at, updated_at, deleted_at,
                               dialysis_plan, other_findings, referrals, consultant_opinion, donation_id) FROM stdin;
01FWMFX723KFKCW063WVKF2MHW 		25PJP9EI1WWOWFoIQ9ODc5gbCmT		ACTIVE	2022-02-24 05:21:15.876596	2022-02-24 05:21:15.876596	\N	{"Plan": "2twice per week", "Type": "Hemodialysis", "Frequency": null}				\N
01FWMG34FXGVNGCHAYRJ2MWN7Q 		25PJP9EI1WWOWFoIQ9ODc5gbCmT		SUSPENDED	2022-02-24 05:24:09.136453	2022-02-24 05:24:09.136454	\N	{"Plan": "", "Type": "Hemodialysis", "Frequency": ""}				\N
01FWMGBAKP8GKG8TB4BHDJZ6H7 		25PJP9EI1WWOWFoIQ9ODc5gbCmT		SUSPENDED	2022-02-24 05:28:38.012369	2022-02-24 05:28:38.012369	\N	{"Plan": "", "Type": "Hemodialysis", "Frequency": ""}				\N
\.


--
-- Data for Name: person_follow_ups_medicines; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_follow_ups_medicines (id, medicine_code, reason, follow_up_id, created_at, updated_at, deleted_at,
                                         name, dosage, frequency, duration, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: person_investigations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_investigations (id, description, details, results, investigation_id, procedure, person_id,
                                   obtained_date, valid_days, created_at, updated_at, deleted_at,
                                   expected_date) FROM stdin;
\.


--
-- Data for Name: person_medical_history; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_medical_history (id, person_id, start_date, end_date, reason, description, medications, type,
                                    created_at, updated_at, deleted_at) FROM stdin;
25UoJM7ksSrakE1eiwPqU8NwCzQ	25Uo93SLVfs6mmj70TPp95mGMRf	\N	\N	Testing	Testing		COMPLAINT	2022-02-23 10:05:52.839485	2022-02-23 10:05:52.839486	\N
25UoLutK66ennNrMwBwVU324uaq	25Uo93SLVfs6mmj70TPp95mGMRf	2009-02-22 05:30:00	\N	Cerebrovascular Disease	Testing	Testing	MEDICAL	2022-02-23 10:06:13.286879	2022-02-23 10:06:13.286881	\N
25UoOYtBXXUZtmHQVWYWYVpp6NT	25Uo93SLVfs6mmj70TPp95mGMRf	1999-01-01 06:00:00	\N	Suturing	DIAf	FAI	SURGICAL	2022-02-23 10:06:34.721296	2022-02-23 10:06:34.721298	\N
25UoRxYo5wkliHULa7NfVSRsiOZ	25Uo93SLVfs6mmj70TPp95mGMRf	2019-01-01 05:30:00	2019-10-10 05:30:00	Drinking	Drink occasionally		SOCIAL	2022-02-23 10:07:01.153918	2022-02-23 10:07:01.15392	\N
25VV1nRVFk8QQAyCp9u6Nk3IiPt	25Upf1uhGVw9fRYfiqucBAEAW5b	\N	\N	Testing	Testing		COMPLAINT	2022-02-23 15:57:07.843622	2022-02-23 15:57:07.843624	\N
25VzLESMO3X2EprTIj8TdD9Lmpj	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	Testing	Dizzy		COMPLAINT	2022-02-23 20:06:23.908866	2022-02-23 20:06:23.908868	\N
25VzMlZqmAvTrGZ3DwosYQxbsc3	25VzEKlLn4Ya2KdZXed5aW6IybV	\N	\N	Testing	Dizzy		COMPLAINT	2022-02-23 20:06:35.513523	2022-02-23 20:06:35.513524	\N
25VzSfrp91N0YPtLZEpHZmn7hF1	25VzEKlLn4Ya2KdZXed5aW6IybV	2009-10-10 05:30:00	\N	Diabetes mellitus			MEDICAL	2022-02-23 20:07:22.896473	2022-02-23 20:07:22.896475	\N
25VzWukLZDhq6kuIVVsDZ9xo36t	25VzEKlLn4Ya2KdZXed5aW6IybV	2010-01-01 05:30:00	\N	Suturing	Testing		SURGICAL	2022-02-23 20:07:56.60167	2022-02-23 20:07:56.601672	\N
25Vzb2u1dV3pyy88Nx0ieQut0BN	25VzEKlLn4Ya2KdZXed5aW6IybV	2010-10-10 05:30:00	2015-10-10 05:30:00	Drinking	Occassional		SOCIAL	2022-02-23 20:08:29.07296	2022-02-23 20:08:29.072962	\N
\.


--
-- Data for Name: person_organ_donation; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_organ_donation (id, receiver_id, donor_id, donation_type, planned_date, performed_date,
                                   discharged_date, acute_rejection, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_organ_donation_complications; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_organ_donation_complications (id, donation_id, description, type, created_at, updated_at,
                                                 deleted_at) FROM stdin;
\.


--
-- Data for Name: person_relations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_relations (id, patient_id, relation_id, relation_type, created_at, updated_at,
                              deleted_at) FROM stdin;
\.


--
-- Data for Name: person_suspensions; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_suspensions (id, person_id, workup_id, reason, reviewed_date, next_review_date, concerns, created_at,
                                updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_workups; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_workups (id, workup_id, person_id, procedure, comments, initiation_date, activation_date, created_at,
                            updated_at, deleted_at, details, results) FROM stdin;
\.


--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.persons (id, first_name, last_name, address, date_of_birth, ethnicity, phn, primary_renal_disease, weight,
                     height, gender, marital_status, contact_no, person_type, waiting_list_inclusion, blood_group,
                     status, record_status, created_by, record_removal_at, created_at, updated_at, deleted_at,
                     hla) FROM stdin;
25Or4YKypfNN33NyPVPXfW7lOHV	asdfgtesting	adsfgfd		1966-01-05		2022022189162982		0	0	FEMALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N	\N
25Oqo9JBsOyyWK1vKBE0I9hCIic	testing	Testing		1966-01-05		2022022130952687		0	0	MALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N	\N
25PJmjvJzf01Hml3FGRpdIm70Pl	testing2	testing2		2000-02-22		2022022187679988		0	0	NA	NA		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N	\N
25Un9wt3Ntd0JyFdfuHcffAZdBz	Testing 6 	Testing 6 		1998-10-20				0	0	FEMALE	MARRIED		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-23 09:56:45.289045	2022-02-23 09:56:45.289064	\N	\N
25Upf1uhGVw9fRYfiqucBAEAW5b	testing9	testing9		2022-02-09		20220223961		0	0	NA	NA		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-23 10:17:17.286314	2022-02-23 10:17:17.286316	\N	\N
25PJP9EI1WWOWFoIQ9ODc5gbCmT	Gnanakeethan	Balasubramaniam		1990-02-23		2022022180296172		0	0	MALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-22 13:41:51.933829	2022-02-24 05:00:25.594837	\N	\N
25Uo93SLVfs6mmj70TPp95mGMRf	testing 7	testing 7		1996-06-06		20220223802		0	0	MALE	MARRIED		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-23 10:05:39.315652	2022-02-23 10:05:39.315653	\N	\N
25UpCueq5pXByJCJtgM4ZfEXJuu	testing 8	test 8		2022-02-02		20220223171		0	0	NA	NA		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-23 10:13:21.757483	2022-02-23 10:13:21.757486	\N	\N
25VzEKlLn4Ya2KdZXed5aW6IybV	testing 10	testing 10		1999-09-09		20220223152		0	0	MALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-23 20:05:44.036799	2022-02-23 20:05:44.036801	\N	\N
25Ord5TRiCeBvvdknJRYaJWc8O2	testing2	testing3		1966-01-05		2022022180296171		0	0	MALE	MARRIED		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N	\N
25QWVrZomOrRHbYqHEdluAGF5dn	testing5	testing5		1992-09-01		2022022128802961		0	0	FEMALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.users (id, username, password, updated_at, deleted_at) FROM stdin;
uasyhgdfbfn                	admin	gnana	2022-02-21 16:22:06.522882	\N
\.


--
-- Data for Name: workups; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.workups (id, name, description, procedure, "order", created_at, updated_at, deleted_at, details) FROM stdin;
\.


--
-- Name: action action_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.action
    ADD CONSTRAINT action_pk PRIMARY KEY (id);


--
-- Name: allergies allergies_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.allergies
    ADD CONSTRAINT allergies_id_uindex PRIMARY KEY (id);


--
-- Name: comorbidities comorbidities_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.comorbidities
    ADD CONSTRAINT comorbidities_pk PRIMARY KEY (id);


--
-- Name: examinations examinations_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.examinations
    ADD CONSTRAINT examinations_pk PRIMARY KEY (id);


--
-- Name: person_follow_ups follow_ups_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups
    ADD CONSTRAINT follow_ups_id_uindex PRIMARY KEY (id);


--
-- Name: investigations investigations_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.investigations
    ADD CONSTRAINT investigations_pk PRIMARY KEY (id);


--
-- Name: person_allergy person_allergy_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_allergy
    ADD CONSTRAINT person_allergy_id_uindex PRIMARY KEY (id);


--
-- Name: person_comorbidities person_comorbidities_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_comorbidities
    ADD CONSTRAINT person_comorbidities_pk PRIMARY KEY (id);


--
-- Name: person_examinations person_follow_ups_examinations_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_examinations
    ADD CONSTRAINT person_follow_ups_examinations_pk PRIMARY KEY (id);


--
-- Name: person_investigations person_follow_ups_investigations_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_investigations
    ADD CONSTRAINT person_follow_ups_investigations_pk PRIMARY KEY (id);


--
-- Name: person_follow_ups_medicines person_follow_ups_medicines_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups_medicines
    ADD CONSTRAINT person_follow_ups_medicines_pk PRIMARY KEY (id);


--
-- Name: person_medical_history person_medical_history_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_medical_history
    ADD CONSTRAINT person_medical_history_pk PRIMARY KEY (id);


--
-- Name: person_organ_donation_complications person_organ_donation_complications_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation_complications
    ADD CONSTRAINT person_organ_donation_complications_id_uindex PRIMARY KEY (id);


--
-- Name: person_organ_donation person_organ_donation_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation
    ADD CONSTRAINT person_organ_donation_id_uindex PRIMARY KEY (id);


--
-- Name: person_relations person_relations_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_relations
    ADD CONSTRAINT person_relations_id_uindex PRIMARY KEY (id);


--
-- Name: person_suspensions person_suspension_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_suspensions
    ADD CONSTRAINT person_suspension_pk PRIMARY KEY (id);


--
-- Name: person_workups person_workups_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_workups
    ADD CONSTRAINT person_workups_pk PRIMARY KEY (id);


--
-- Name: persons persons_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_id_uindex PRIMARY KEY (id);


--
-- Name: persons persons_phn_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_phn_uindex UNIQUE (phn);


--
-- Name: users users_id_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_uindex PRIMARY KEY (id);


--
-- Name: users users_username_uindex; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_uindex UNIQUE (username);


--
-- Name: workups workups_pk; Type: CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.workups
    ADD CONSTRAINT workups_pk PRIMARY KEY (id);


--
-- Name: allergies_type_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX allergies_type_uindex ON public.allergies USING btree (type);


--
-- Name: comorbidities_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX comorbidities_id_uindex ON public.comorbidities USING btree (id);


--
-- Name: examinations_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX examinations_id_uindex ON public.examinations USING btree (id);


--
-- Name: investigations_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX investigations_id_uindex ON public.investigations USING btree (id);


--
-- Name: person_comorbidities_comorbidity_id_person_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_comorbidities_comorbidity_id_person_id_uindex ON public.person_comorbidities USING btree (comorbidity_id, person_id);


--
-- Name: person_comorbidities_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_comorbidities_id_uindex ON public.person_comorbidities USING btree (id);


--
-- Name: person_follow_ups_examinations_description_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_follow_ups_examinations_description_uindex ON public.person_examinations USING btree (description);


--
-- Name: person_follow_ups_examinations_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_follow_ups_examinations_id_uindex ON public.person_examinations USING btree (id);


--
-- Name: person_follow_ups_investigations_description_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_follow_ups_investigations_description_uindex ON public.person_investigations USING btree (description);


--
-- Name: person_follow_ups_investigations_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_follow_ups_investigations_id_uindex ON public.person_investigations USING btree (id);


--
-- Name: person_follow_ups_medicines_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_follow_ups_medicines_id_uindex ON public.person_follow_ups_medicines USING btree (id);


--
-- Name: person_organ_donation_donor_id_receiver_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_organ_donation_donor_id_receiver_id_uindex ON public.person_organ_donation USING btree (donor_id, receiver_id);


--
-- Name: person_suspension_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_suspension_id_uindex ON public.person_suspensions USING btree (id);


--
-- Name: person_workups_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX person_workups_id_uindex ON public.person_workups USING btree (id);


--
-- Name: workups_id_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX workups_id_uindex ON public.workups USING btree (id);


--
-- Name: workups_name_uindex; Type: INDEX; Schema: public; Owner: gnanakeethan
--

CREATE UNIQUE INDEX workups_name_uindex ON public.workups USING btree (name);


--
-- Name: person_follow_ups follow_ups_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups
    ADD CONSTRAINT follow_ups_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_allergy person_allergy_allergies_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_allergy
    ADD CONSTRAINT person_allergy_allergies_id_fk FOREIGN KEY (allergy_id) REFERENCES public.allergies (id);


--
-- Name: person_allergy person_allergy_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_allergy
    ADD CONSTRAINT person_allergy_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_comorbidities person_comorbidities_comorbidities_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_comorbidities
    ADD CONSTRAINT person_comorbidities_comorbidities_id_fk FOREIGN KEY (comorbidity_id) REFERENCES public.comorbidities (id);


--
-- Name: person_comorbidities person_comorbidities_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_comorbidities
    ADD CONSTRAINT person_comorbidities_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_examinations person_follow_ups_examinations_examinations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_examinations
    ADD CONSTRAINT person_follow_ups_examinations_examinations_id_fk FOREIGN KEY (examination_id) REFERENCES public.examinations (id);


--
-- Name: person_examinations person_follow_ups_examinations_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_examinations
    ADD CONSTRAINT person_follow_ups_examinations_person_follow_ups_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_investigations person_follow_ups_investigations_investigations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_investigations
    ADD CONSTRAINT person_follow_ups_investigations_investigations_id_fk FOREIGN KEY (investigation_id) REFERENCES public.investigations (id);


--
-- Name: person_investigations person_follow_ups_investigations_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_investigations
    ADD CONSTRAINT person_follow_ups_investigations_person_follow_ups_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_follow_ups_medicines person_follow_ups_medicines_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups_medicines
    ADD CONSTRAINT person_follow_ups_medicines_person_follow_ups_id_fk FOREIGN KEY (follow_up_id) REFERENCES public.person_follow_ups (id);


--
-- Name: person_follow_ups person_follow_ups_person_organ_donation_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups
    ADD CONSTRAINT person_follow_ups_person_organ_donation_id_fk FOREIGN KEY (donation_id) REFERENCES public.person_organ_donation (id);


--
-- Name: person_medical_history person_medical_history_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_medical_history
    ADD CONSTRAINT person_medical_history_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_organ_donation_complications person_organ_donation_complications_person_organ_donation_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation_complications
    ADD CONSTRAINT person_organ_donation_complications_person_organ_donation_id_fk FOREIGN KEY (donation_id) REFERENCES public.person_organ_donation (id);


--
-- Name: person_organ_donation person_organ_donation_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation
    ADD CONSTRAINT person_organ_donation_persons_id_fk FOREIGN KEY (receiver_id) REFERENCES public.persons (id);


--
-- Name: person_organ_donation person_organ_donation_persons_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation
    ADD CONSTRAINT person_organ_donation_persons_id_fk_2 FOREIGN KEY (donor_id) REFERENCES public.persons (id);


--
-- Name: person_relations person_relations_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_relations
    ADD CONSTRAINT person_relations_persons_id_fk FOREIGN KEY (patient_id) REFERENCES public.persons (id);


--
-- Name: person_relations person_relations_persons_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_relations
    ADD CONSTRAINT person_relations_persons_id_fk_2 FOREIGN KEY (relation_id) REFERENCES public.persons (id);


--
-- Name: person_suspensions person_suspensions_person_workups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_suspensions
    ADD CONSTRAINT person_suspensions_person_workups_id_fk FOREIGN KEY (workup_id) REFERENCES public.person_workups (id);


--
-- Name: person_suspensions person_suspensions_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_suspensions
    ADD CONSTRAINT person_suspensions_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_workups person_workups_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_workups
    ADD CONSTRAINT person_workups_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons (id);


--
-- Name: person_workups person_workups_workups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_workups
    ADD CONSTRAINT person_workups_workups_id_fk FOREIGN KEY (workup_id) REFERENCES public.workups (id);


--
-- PostgreSQL database dump complete
--

