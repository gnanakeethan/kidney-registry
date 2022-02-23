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
    'NA'
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
    'NA'
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

CREATE TABLE public.action (
    id character(27) NOT NULL,
    action text,
    user_id character(27) NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.action OWNER TO gnanakeethan;

--
-- Name: allergies; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.allergies (
    id character(27) NOT NULL,
    allergy text,
    description text,
    conditions text,
    associated_causes text,
    type text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.allergies OWNER TO gnanakeethan;

--
-- Name: comorbidities; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.comorbidities (
    id character(27) NOT NULL,
    comorbidity text,
    description text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.comorbidities OWNER TO gnanakeethan;

--
-- Name: examinations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.examinations (
    id character(27) NOT NULL,
    details jsonb,
    procedure jsonb,
    "order" integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.examinations OWNER TO gnanakeethan;

--
-- Name: investigations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.investigations (
    id character(27) NOT NULL,
    details jsonb,
    procedure jsonb,
    "order" integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.investigations OWNER TO gnanakeethan;

--
-- Name: person_allergy; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_allergy (
    id character(27) NOT NULL,
    person_id character(27) NOT NULL,
    allergy_id character(27) NOT NULL,
    note text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_allergy OWNER TO gnanakeethan;

--
-- Name: person_comorbidities; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_comorbidities (
    id character(27) NOT NULL,
    comorbidity_id character(27) NOT NULL,
    person_id character(27) NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_comorbidities OWNER TO gnanakeethan;

--
-- Name: person_examinations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_examinations (
    id character(27) NOT NULL,
    description text NOT NULL,
    details jsonb,
    results jsonb,
    examination_id character(27),
    procedure jsonb,
    person_id character(27),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_examinations OWNER TO gnanakeethan;

--
-- Name: person_follow_ups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_follow_ups (
    id character(27) NOT NULL,
    description text,
    person_id character(27) NOT NULL,
    complaints text,
    case_status public.case_status,
    donation_id character(27),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_follow_ups OWNER TO gnanakeethan;

--
-- Name: person_follow_ups_medicines; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_follow_ups_medicines (
    id character(27) NOT NULL,
    medicine_code text NOT NULL,
    reason text,
    follow_up_id character(27) NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_follow_ups_medicines OWNER TO gnanakeethan;

--
-- Name: person_investigations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_investigations (
    id character(27) NOT NULL,
    description text NOT NULL,
    details jsonb,
    results jsonb,
    investigation_id character(27),
    procedure jsonb,
    person_id character(27) NOT NULL,
    obtained_date timestamp without time zone,
    valid_days integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_investigations OWNER TO gnanakeethan;

--
-- Name: person_medical_history; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_medical_history (
    id character(27) NOT NULL,
    person_id character(27) NOT NULL,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    reason text,
    description text,
    medications text,
    type public.history_type,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_medical_history OWNER TO gnanakeethan;

--
-- Name: person_organ_donation; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_organ_donation (
    id character(27) NOT NULL,
    receiver_id character(27) NOT NULL,
    donor_id character(27) NOT NULL,
    donation_type public.transplantation_type NOT NULL,
    planned_date timestamp without time zone,
    performed_date timestamp without time zone,
    discharged_date timestamp without time zone,
    acute_rejection boolean,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_organ_donation OWNER TO gnanakeethan;

--
-- Name: person_organ_donation_complications; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_organ_donation_complications (
    id character(27) NOT NULL,
    donation_id character(27) NOT NULL,
    description text,
    type public.case_status NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_organ_donation_complications OWNER TO gnanakeethan;

--
-- Name: person_relations; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_relations (
    id character(27) NOT NULL,
    patient_id character(27) NOT NULL,
    relation_id character(27) NOT NULL,
    relation_type character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_relations OWNER TO gnanakeethan;

--
-- Name: person_suspensions; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_suspensions (
    id character(27) NOT NULL,
    person_id character(27) NOT NULL,
    workup_id character(27),
    reason text,
    reviewed_date timestamp(6) without time zone,
    next_review_date timestamp(6) without time zone,
    concerns text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_suspensions OWNER TO gnanakeethan;

--
-- Name: person_workups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.person_workups (
    id character(27) NOT NULL,
    workup_id character(27) NOT NULL,
    person_id character(27) NOT NULL,
    procedure jsonb NOT NULL,
    comments text,
    initiation_date timestamp(6) without time zone,
    activation_date timestamp(6) without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.person_workups OWNER TO gnanakeethan;

--
-- Name: persons; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.persons (
    id character(27) NOT NULL,
    first_name text NOT NULL,
    last_name text,
    address text,
    date_of_birth date,
    ethnicity text,
    phn character varying(255),
    primary_renal_disease character varying(255),
    weight double precision,
    height double precision,
    gender public.gender,
    marital_status character varying(255) NOT NULL,
    contact_no character varying(30),
    person_type public.person_type DEFAULT 'PATIENT'::public.person_type,
    waiting_list_inclusion date,
    blood_group public.blood_group,
    status public.person_status,
    record_status public.record_status,
    created_by character(27),
    record_removal_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.persons OWNER TO gnanakeethan;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.users (
    id character(27) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO gnanakeethan;

--
-- Name: workups; Type: TABLE; Schema: public; Owner: gnanakeethan
--

CREATE TABLE public.workups (
    id character(27) NOT NULL,
    name text NOT NULL,
    description text,
    procedure jsonb,
    "order" integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    deleted_at timestamp without time zone
);


ALTER TABLE public.workups OWNER TO gnanakeethan;

--
-- Data for Name: action; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.action (id, action, user_id, created_at) FROM stdin;
\.


--
-- Data for Name: allergies; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.allergies (id, allergy, description, conditions, associated_causes, type, created_at, updated_at, deleted_at) FROM stdin;
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
25UEz8OSI3rXvEx9J9gJknXTxXw	{"name": "General Examination", "description": "Description"}	{"fields": [{"name": "Build", "type": "customradio", "extra": {"items": [{"id": "Lean", "name": "BUILD", "title": "Lean", "value": "Lean"}, {"id": "Average", "name": "BUILD", "title": "Average", "value": "Average"}, {"id": "Obese", "name": "BUILD", "title": "Obese", "value": "Obese"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Build: ", "labelClasses": "px-4 py-2 border\\t border-gray-400 rounded-xl labelStyle"}}, {"name": "BuildComments", "type": "input", "value": "", "prefix": {"classes": [" w-full"]}, "attributes": {"id": "Type", "label": "Build Comments:", "classes": ["form-input rounded w-full"], "disabled": false}}, {"name": "Temperature", "type": "customradio", "extra": {"items": [{"id": "Febrile", "name": "Temp", "title": "Febrile", "value": "Febrile"}, {"id": "Afebrile", "name": "Temp", "title": "Afebrile", "value": "Afebrile"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Temperature: ", "labelClasses": "px-4 py-2 border\\t border-gray-400 rounded-xl labelStyle"}}, {"name": "TemperatureIfFebrile", "type": "input", "value": "37.5", "prefix": {"classes": ["mb-2 w-full"]}, "attributes": {"id": "Type", "max": 45, "min": 20, "step": 0.1, "type": "number", "label": "Body Temperature If Febrile:", "classes": ["form-input rounded"], "disabled": false}}, {"name": "General", "type": "customcheckbox", "extra": {"items": [{"name": "Dyspnoea", "title": "Dyspnoea", "value": "Dyspnoea"}, {"name": "Cyanosis", "title": "Cyanosis", "value": "Cyanosis"}, {"name": "Pallor", "title": "Pallor", "value": "Pallor"}, {"name": "Not Pale", "title": "Not Pale", "value": "Not Pale"}, {"name": "Clubbing", "title": "Clubbing", "value": "Clubbing"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "General: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "Extremities", "type": "customradio", "extra": {"items": [{"id": "Warm", "name": "Extremities", "title": "Warm", "value": "Warm"}, {"id": "Cold & Clammy", "name": "Extremities", "title": "Cold & Clammy", "value": "Cold & Clammy"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Extremities: ", "labelClasses": "px-4 py-2 border\\t border-gray-400 rounded-xl labelStyle"}}, {"name": "Dehydration", "type": "customradio", "extra": {"items": [{"id": "Good", "name": "Good", "title": "Good", "value": "Good"}, {"id": "Dehydrated", "name": "Dehydrated", "title": "Dehydrated", "value": "Dehydrated"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Dehydration: ", "labelClasses": "px-4 py-2 border\\t border-gray-400 rounded-xl labelStyle"}}, {"name": "Skin", "type": "customcheckbox", "extra": {"items": [{"name": "Rashes", "title": "Rashes", "value": "Rashes"}, {"name": "Wounds", "title": "Wounds", "value": "Wounds"}, {"name": "Tattoos", "title": "Tattoos", "value": "Tattoos"}, {"name": "Scars", "title": "Scars", "value": "Scars"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Skin: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "Dental", "type": "customcheckbox", "extra": {"items": [{"name": "Carius Teeth", "title": "Carius Teeth", "value": "Carius Teeth"}, {"name": "Oral Ulcers", "title": "Oral Ulcers", "value": "Oral Ulcers"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Dental: ", "labelClasses": "px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap"}}, {"name": "OtherComments", "type": "textarea", "value": "", "prefix": {"classes": ["mx-2 flex-grow w-full"]}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Comments", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "PainScale", "type": "customradio", "extra": {"items": [{"id": "1", "name": "pain_scale", "title": "1", "value": "1"}, {"id": "2", "name": "pain_scale", "title": "2", "value": "2"}, {"id": "3", "name": "pain_scale", "title": "3", "value": "3"}, {"id": "4", "name": "pain_scale", "title": "4", "value": "4"}, {"id": "5", "name": "pain_scale", "title": "5", "value": "5"}, {"id": "6", "name": "pain_scale", "title": "6", "value": "6"}, {"id": "7", "name": "pain_scale", "title": "7", "value": "7"}, {"id": "8", "name": "pain_scale", "title": "8", "value": "8"}, {"id": "9", "name": "pain_scale", "title": "9", "value": "9"}, {"id": "10", "name": "pain_scale", "title": "10", "value": "10"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Pain Scale: ", "labelClasses": "py-1 px-2 border\\tborder-gray-400 rounded-full labelStyle"}}]}	1	2022-02-22 23:47:19.018091	2022-02-22 23:47:19.018091	\N
25UFJC1Hibtye5BG1RSSIdnp3Dz	{"name": "Cardiovascular Examination", "description": "Description"}	{"fields": [{"name": "PulseRate", "type": "input", "value": "72", "prefix": {"classes": ["mb-2 w-full"]}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Pulse Rate:", "classes": ["form-input rounded"], "disabled": false}}, {"name": "PulseVolume", "type": "input", "value": "", "prefix": {"classes": ["mb-2 w-full"]}, "attributes": {"id": "Type", "max": 250, "min": 20, "step": 1, "type": "number", "label": "Pulse Volume:", "classes": ["form-input rounded"], "disabled": false}}, {"name": "Blood Pressure", "type": "input", "value": "", "prefix": {"classes": ["mb-2 w-full"]}, "attributes": {"id": "Type", "label": "Blood Pressure:", "classes": ["form-input rounded"], "disabled": false}}, {"name": "Pulse Pressure", "type": "input", "value": "", "prefix": {"classes": ["mb-2 w-full"]}, "attributes": {"id": "Type", "label": "Pulse Pressure:", "classes": ["form-input rounded"], "disabled": false}}, {"name": "General", "type": "customcheckbox", "extra": {"items": [{"name": "Dyspnoea", "title": "Dyspnoea", "value": "Dyspnoea"}, {"name": "Cyanosis", "title": "Cyanosis", "value": "Cyanosis"}, {"name": "Pallor", "title": "Pallor", "value": "Pallor"}, {"name": "Not Pale", "title": "Not Pale", "value": "Not Pale"}, {"name": "Clubbing", "title": "Clubbing", "value": "Clubbing"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "General: ", "labelClasses": "px-4 py-2 border border-black rounded-xl labelStyle whitespace-nowrap"}}, {"name": "JVP", "type": "customradio", "extra": {"items": [{"id": "Normal", "name": "JVP", "title": "Normal", "value": "Normal"}, {"id": "Elevated", "name": "JVP", "title": "Elevated", "value": "Elevated"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "JVP: ", "labelClasses": "px-4 py-2 border\\t border-black rounded-xl labelStyle"}}, {"name": "CarotidBruit", "type": "customradio", "extra": {"items": [{"id": "Yes", "name": "CarotidBruit", "title": "Yes", "value": "Yes"}, {"id": "No", "name": "CarotidBruit", "title": "No", "value": "No"}]}, "prefix": {"classes": "w-full"}, "attributes": {"id": "id-field", "label": "", "classes": ["hidden"], "fieldName": "Carotid Bruit: ", "labelClasses": "px-4 py-2 border\\t border-black rounded-xl labelStyle"}}, {"name": "Auscultation", "type": "textarea", "value": "", "prefix": {"classes": ["mx-2 flex-grow w-full"]}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Auscultation", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}, {"name": "OtherFindings", "type": "textarea", "value": "", "prefix": {"classes": ["mx-2 flex-grow w-full"]}, "attributes": {"id": "id-field", "cols": null, "rows": 1, "label": "Other Findings", "classes": "form-textarea rounded w-full my-2", "disabled": false, "readonly": false}}]}	2	2022-02-22 23:48:10.766329	2022-02-22 23:48:10.766329	\N
\.


--
-- Data for Name: investigations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.investigations (id, details, procedure, "order", created_at, updated_at, deleted_at) FROM stdin;
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

COPY public.person_examinations (id, description, details, results, examination_id, procedure, person_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_follow_ups; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_follow_ups (id, description, person_id, complaints, case_status, donation_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_follow_ups_medicines; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_follow_ups_medicines (id, medicine_code, reason, follow_up_id, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_investigations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_investigations (id, description, details, results, investigation_id, procedure, person_id, obtained_date, valid_days, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_medical_history; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_medical_history (id, person_id, start_date, end_date, reason, description, medications, type, created_at, updated_at, deleted_at) FROM stdin;
25RzKt3XaZzEGGZvnor1lYTRpyg	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	DIABETIC	Tst		MEDICAL	2022-02-22 10:07:05.212429	2022-02-22 10:07:05.21243	\N
25RzgNUXUHTOufVhlLlBzOcnLJ4	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	CANCER			MEDICAL	2022-02-22 10:09:56.292579	2022-02-22 10:09:56.292581	\N
25S0WUOW6naMB0KH0ZuTC2j4e6P	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	DIABETIC,CANCER,OTHER	Testing		MEDICAL	2022-02-22 10:16:51.110222	2022-02-22 10:16:51.110226	\N
25S12avYBth7hFrb1g2VPRNz9y6	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-08 05:30:00	\N	DIABETIC			MEDICAL	2022-02-22 10:21:07.058312	2022-02-22 10:21:07.058315	\N
25S1g7bY7DWePNyHkwNNAT0l7f5	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	DIABETIC			MEDICAL	2022-02-22 10:26:21.352374	2022-02-22 10:26:21.352375	\N
25S1h5HThBGD8yqyz3gngdvhunc	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-04 05:30:00	\N	CANCER			MEDICAL	2022-02-22 10:26:29.524141	2022-02-22 10:26:29.524142	\N
25S1ioa91DyaRiYvBIaeHkfv8hO	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-19 05:30:00	\N	DIABETIC,CANCER	dsf	asdsfh	MEDICAL	2022-02-22 10:26:43.555379	2022-02-22 10:26:43.555381	\N
25S4gBYM04Ljh4x18EH7gYq2FjT	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N				SOCIAL	2022-02-22 10:51:02.376661	2022-02-22 10:51:02.376663	\N
25S4gGX7lRa3LurvQWI2GhIS1IB	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N				SOCIAL	2022-02-22 10:51:02.377388	2022-02-22 10:51:02.377389	\N
25S4gFhiiMixKfey9FUXZFgAIr4	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N				SOCIAL	2022-02-22 10:51:02.376912	2022-02-22 10:51:02.376913	\N
25S4qsoD4zUBLMpDQj8hCIgqBA2	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	Testing			SOCIAL	2022-02-22 10:52:27.425531	2022-02-22 10:52:27.425532	\N
25SGogAGNcIDt3qNYKEJmwNqE5M	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N	sadf	esrdfgh		COMPLAINT	2022-02-22 12:30:50.629167	2022-02-22 12:30:50.629168	\N
25SHRB3SkN97soJoV5nxed2rhVV	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N				MEDICAL	2022-02-22 12:35:56.177791	2022-02-22 12:35:56.177793	\N
25SHdjQ92BeLEpdfOX48Kf5mGBT	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N				MEDICAL	2022-02-22 12:37:36.706563	2022-02-22 12:37:36.706566	\N
25SHfZ0yXK5iKN87kqS8fs9KvX0	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N				MEDICAL	2022-02-22 12:37:50.554125	2022-02-22 12:37:50.554127	\N
25SIBR0uhs8QdWL6yFyAZFIBpVk	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N	test			MEDICAL	2022-02-22 12:42:04.343894	2022-02-22 12:42:04.343896	\N
25SIWwGy78BFvaKbPGNnW9txOQj	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N	2			MEDICAL	2022-02-22 12:44:55.553577	2022-02-22 12:44:55.553579	\N
25SKfAKbj3VPDTZpj99N7jeFPbP	25Or4YKypfNN33NyPVPXfW7lOHV	\N	\N	2			SOCIAL	2022-02-22 13:02:27.637734	2022-02-22 13:02:27.637735	\N
25SUssTCc2a2YNhYDKE0d8F1Noz	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	Cmoplaint	Something history		COMPLAINT	2022-02-22 14:26:30.722778	2022-02-22 14:26:30.72278	\N
25Sd6jQSmsKoBI6OMJYm45tTnJI	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	Dia			MEDICAL	2022-02-22 15:34:07.351865	2022-02-22 15:34:07.351866	\N
25Se0zQmMIVrh5T3ykwmlammL9K	25PJP9EI1WWOWFoIQ9ODc5gbCmT	\N	\N	Hernial Repair	Testing		SURGICAL	2022-02-22 15:41:35.570521	2022-02-22 15:41:35.570522	\N
25Se3ngmypd5bUvUJPR6QxNMWxa	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-02 05:30:00	2022-02-16 05:30:00	Something			SOCIAL	2022-02-22 15:41:57.287974	2022-02-22 15:41:57.287976	\N
25Se88mbu5pE1MfJ4JmzT0eFgXe	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-03 05:30:00	2022-02-09 05:30:00	Something			SOCIAL	2022-02-22 15:42:32.107735	2022-02-22 15:42:32.107737	\N
25SeACvS8rGbp0aNFzKoDi3kWWC	25PJP9EI1WWOWFoIQ9ODc5gbCmT	2022-02-01 05:30:00	\N	Clarity			SOCIAL	2022-02-22 15:42:48.920394	2022-02-22 15:42:48.920395	\N
25SxGVSxS74lWVBvum4BEZnbDeg	25PJP9EI1WWOWFoIQ9ODc5gbCmT	1999-01-01 06:00:00	\N	Thyroidectomy			SURGICAL	2022-02-22 18:19:52.076923	2022-02-22 18:19:52.076925	\N
\.


--
-- Data for Name: person_organ_donation; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_organ_donation (id, receiver_id, donor_id, donation_type, planned_date, performed_date, discharged_date, acute_rejection, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_organ_donation_complications; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_organ_donation_complications (id, donation_id, description, type, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_relations; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_relations (id, patient_id, relation_id, relation_type, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_suspensions; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_suspensions (id, person_id, workup_id, reason, reviewed_date, next_review_date, concerns, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: person_workups; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.person_workups (id, workup_id, person_id, procedure, comments, initiation_date, activation_date, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: gnanakeethan
--

COPY public.persons (id, first_name, last_name, address, date_of_birth, ethnicity, phn, primary_renal_disease, weight, height, gender, marital_status, contact_no, person_type, waiting_list_inclusion, blood_group, status, record_status, created_by, record_removal_at, created_at, updated_at, deleted_at) FROM stdin;
25Or4YKypfNN33NyPVPXfW7lOHV	asdfgtesting	adsfgfd		1966-01-05		2022022189162982		0	0	FEMALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N
25Oqo9JBsOyyWK1vKBE0I9hCIic	testing	Testing		1966-01-05		2022022130952687		0	0	MALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N
25PJmjvJzf01Hml3FGRpdIm70Pl	testing2	testing2		2000-02-22		2022022187679988		0	0	NA	NA		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N
25PJP9EI1WWOWFoIQ9ODc5gbCmT	Gnanakeethan	Balasubramaniam		1990-02-23		2022022180296172		0	0	MALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-22 13:41:51.933829	2022-02-22 20:48:02.946867	\N
25Ord5TRiCeBvvdknJRYaJWc8O2	testing2	testing3		1966-01-05		2022022180296171		0	0	MALE	MARRIED		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N
25QWVrZomOrRHbYqHEdluAGF5dn	testing5	testing5		1992-09-01		2022022128802961		0	0	FEMALE	SINGLE		RECIPIENT	\N	\N	INACTIVE	DRAFT	\N	\N	2022-02-21 16:22:06.415421	2022-02-21 16:22:06.424663	\N
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

COPY public.workups (id, name, description, procedure, "order", created_at, updated_at, deleted_at) FROM stdin;
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
    ADD CONSTRAINT follow_ups_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_allergy person_allergy_allergies_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_allergy
    ADD CONSTRAINT person_allergy_allergies_id_fk FOREIGN KEY (allergy_id) REFERENCES public.allergies(id);


--
-- Name: person_allergy person_allergy_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_allergy
    ADD CONSTRAINT person_allergy_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_comorbidities person_comorbidities_comorbidities_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_comorbidities
    ADD CONSTRAINT person_comorbidities_comorbidities_id_fk FOREIGN KEY (comorbidity_id) REFERENCES public.comorbidities(id);


--
-- Name: person_comorbidities person_comorbidities_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_comorbidities
    ADD CONSTRAINT person_comorbidities_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_examinations person_follow_ups_examinations_examinations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_examinations
    ADD CONSTRAINT person_follow_ups_examinations_examinations_id_fk FOREIGN KEY (examination_id) REFERENCES public.examinations(id);


--
-- Name: person_examinations person_follow_ups_examinations_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_examinations
    ADD CONSTRAINT person_follow_ups_examinations_person_follow_ups_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_investigations person_follow_ups_investigations_investigations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_investigations
    ADD CONSTRAINT person_follow_ups_investigations_investigations_id_fk FOREIGN KEY (investigation_id) REFERENCES public.investigations(id);


--
-- Name: person_investigations person_follow_ups_investigations_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_investigations
    ADD CONSTRAINT person_follow_ups_investigations_person_follow_ups_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_follow_ups_medicines person_follow_ups_medicines_person_follow_ups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups_medicines
    ADD CONSTRAINT person_follow_ups_medicines_person_follow_ups_id_fk FOREIGN KEY (follow_up_id) REFERENCES public.person_follow_ups(id);


--
-- Name: person_follow_ups person_follow_ups_person_organ_donation_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_follow_ups
    ADD CONSTRAINT person_follow_ups_person_organ_donation_id_fk FOREIGN KEY (donation_id) REFERENCES public.person_organ_donation(id);


--
-- Name: person_medical_history person_medical_history_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_medical_history
    ADD CONSTRAINT person_medical_history_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_organ_donation_complications person_organ_donation_complications_person_organ_donation_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation_complications
    ADD CONSTRAINT person_organ_donation_complications_person_organ_donation_id_fk FOREIGN KEY (donation_id) REFERENCES public.person_organ_donation(id);


--
-- Name: person_organ_donation person_organ_donation_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation
    ADD CONSTRAINT person_organ_donation_persons_id_fk FOREIGN KEY (receiver_id) REFERENCES public.persons(id);


--
-- Name: person_organ_donation person_organ_donation_persons_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_organ_donation
    ADD CONSTRAINT person_organ_donation_persons_id_fk_2 FOREIGN KEY (donor_id) REFERENCES public.persons(id);


--
-- Name: person_relations person_relations_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_relations
    ADD CONSTRAINT person_relations_persons_id_fk FOREIGN KEY (patient_id) REFERENCES public.persons(id);


--
-- Name: person_relations person_relations_persons_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_relations
    ADD CONSTRAINT person_relations_persons_id_fk_2 FOREIGN KEY (relation_id) REFERENCES public.persons(id);


--
-- Name: person_suspensions person_suspensions_person_workups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_suspensions
    ADD CONSTRAINT person_suspensions_person_workups_id_fk FOREIGN KEY (workup_id) REFERENCES public.person_workups(id);


--
-- Name: person_suspensions person_suspensions_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_suspensions
    ADD CONSTRAINT person_suspensions_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_workups person_workups_persons_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_workups
    ADD CONSTRAINT person_workups_persons_id_fk FOREIGN KEY (person_id) REFERENCES public.persons(id);


--
-- Name: person_workups person_workups_workups_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gnanakeethan
--

ALTER TABLE ONLY public.person_workups
    ADD CONSTRAINT person_workups_workups_id_fk FOREIGN KEY (workup_id) REFERENCES public.workups(id);


--
-- PostgreSQL database dump complete
--

