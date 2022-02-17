create type gender as enum ('MALE', 'FEMALE', 'OTHER');



create type transplantation_type as enum ('CADAVERIC', 'LIV');



create type case_status as enum ('PRE', 'POST');



create table if not exists allergies
(
    id                uuid default gen_random_uuid() not null
    constraint allergies_id_uindex
    primary key,
    allergy           text,
    description       text,
    conditions        text,
    associated_causes text,
    type              text
    );

alter table allergies


create unique index if not exists allergies_type_uindex
    on allergies (type);

create table if not exists persons
(
    id                    uuid default gen_random_uuid() not null
    constraint persons_id_uindex
    primary key,
    first_name            text                           not null,
    last_name             text,
    address               text,
    date_of_birth         date,
    ethnicity             text,
    phn                   varchar(255)                   not null
    constraint persons_phn_uindex
    unique,
    primary_renal_disease varchar(255),
    weight                double precision,
    height                double precision,
    sex                   gender,
    marital_status        varchar(255)                   not null,
    contact_no            varchar(30)
    );

alter table persons


create table if not exists person_allergy
(
    id         uuid default gen_random_uuid() not null
    constraint person_allergy_id_uindex
    primary key,
    person_id  uuid                           not null
    constraint person_allergy_persons_id_fk
    references persons,
    allergy_id uuid                           not null
    constraint person_allergy_allergies_id_fk
    references allergies,
    note       text
    );

alter table person_allergy


create table if not exists person_organ_donation
(
    id              uuid default gen_random_uuid() not null
    constraint person_organ_donation_id_uindex
    primary key,
    receiver_id     uuid                           not null
    constraint person_organ_donation_persons_id_fk
    references persons,
    donor_id        uuid                           not null
    constraint person_organ_donation_persons_id_fk_2
    references persons,
    donation_type   transplantation_type           not null,
    planned_date    timestamp,
    performed_date  timestamp,
    discharged_date timestamp,
    acute_rejection boolean
    );

alter table person_organ_donation


create table if not exists person_organ_donation_complications
(
    id          uuid default gen_random_uuid() not null
    constraint person_organ_donation_complications_id_uindex
    primary key,
    donation_id uuid                           not null
    constraint person_organ_donation_complications_person_organ_donation_id_fk
    references person_organ_donation,
    description text,
    created_at  timestamp,
    updated_at  timestamp,
    type        case_status                    not null
    );

alter table person_organ_donation_complications


create table if not exists person_follow_ups
(
    id             uuid default gen_random_uuid() not null
    constraint follow_ups_id_uindex
    primary key,
    clinic_no      text                           not null,
    description    text,
    person_id      uuid                           not null
    constraint follow_ups_persons_id_fk
    references persons,
    complaints     text,
    renal_biopsies text,
    case_status    case_status,
    donation_id    uuid
    constraint person_follow_ups_person_organ_donation_id_fk
    references person_organ_donation
    );

alter table person_follow_ups


create table if not exists person_relations
(
    id            uuid default gen_random_uuid() not null
    constraint person_relations_id_uindex
    primary key,
    patient_id    uuid                           not null
    constraint person_relations_persons_id_fk
    references persons,
    relation_id   uuid                           not null
    constraint person_relations_persons_id_fk_2
    references persons,
    relation_type varchar(255)                   not null
    );

alter table person_relations


create table if not exists users
(
    id       uuid default gen_random_uuid() not null
    constraint users_id_uindex
    primary key,
    username varchar(255)                   not null
    constraint users_username_uindex
    unique,
    password varchar(255)                   not null
    );

alter table users


create table if not exists comorbidities
(
    id          uuid default gen_random_uuid() not null
    constraint comorbidities_pk
    primary key,
    comorbidity text,
    description text
    );

alter table comorbidities


create unique index if not exists comorbidities_id_uindex
    on comorbidities (id);

create table if not exists person_comorbidities
(
    id             uuid default gen_random_uuid() not null
    constraint person_comorbidities_pk
    primary key,
    comorbidity_id uuid                           not null
    constraint person_comorbidities_comorbidities_id_fk
    references comorbidities,
    person_id      uuid                           not null
    constraint person_comorbidities_persons_id_fk
    references persons
    );

alter table person_comorbidities


create unique index if not exists person_comorbidities_comorbidity_id_person_id_uindex
    on person_comorbidities (comorbidity_id, person_id);

create unique index if not exists person_comorbidities_id_uindex
    on person_comorbidities (id);

create table if not exists workups
(
    id          uuid not null
    constraint workups_pk
    primary key,
    name        text not null,
    description text,
    procedure   jsonb
);

alter table workups


create unique index if not exists workups_id_uindex
    on workups (id);

create unique index if not exists workups_name_uindex
    on workups (name);

create table if not exists person_workups
(
    id              uuid  not null
    constraint person_workups_pk
    primary key,
    workup_id       uuid  not null
    constraint person_workups_workups_id_fk
    references workups,
    person_id       uuid  not null
    constraint person_workups_persons_id_fk
    references persons,
    procedure       jsonb not null,
    comments        text,
    initiation_date timestamp(6),
    activation_date timestamp(6)
    );

alter table person_workups


create unique index if not exists person_workups_id_uindex
    on person_workups (id);

create table if not exists person_suspensions
(
    id               uuid default gen_random_uuid() not null
    constraint person_suspension_pk
    primary key,
    person_id        uuid                           not null
    constraint person_suspensions_persons_id_fk
    references persons,
    workup_id        uuid
    constraint person_suspensions_person_workups_id_fk
    references person_workups,
    reason           text,
    reviewed_date    timestamp(6),
    next_review_date timestamp(6),
    concerns         text
    );

alter table person_suspensions


create unique index if not exists person_suspension_id_uindex
    on person_suspensions (id);

create table if not exists person_follow_ups_medicines
(
    id            uuid not null
    constraint person_follow_ups_medicines_pk
    primary key,
    medicine_code text not null,
    description   text,
    reason        text,
    case_status   case_status,
    follow_up_id  uuid not null
    constraint person_follow_ups_medicines_person_follow_ups_id_fk
    references person_follow_ups
);

alter table person_follow_ups_medicines


create unique index if not exists person_follow_ups_medicines_id_uindex
    on person_follow_ups_medicines (id);

create table if not exists investigations
(
    id        uuid not null
    constraint investigations_pk
    primary key,
    details   jsonb,
    procedure jsonb
);

alter table investigations


create table if not exists person_follow_ups_investigations
(
    id               uuid not null
    constraint person_follow_ups_investigations_pk
    primary key,
    description      text not null,
    details          jsonb,
    results          jsonb,
    investigation_id uuid
    constraint person_follow_ups_investigations_investigations_id_fk
    references investigations,
    procedure        jsonb,
    follow_up_id     uuid not null
    constraint person_follow_ups_investigations_person_follow_ups_id_fk
    references person_follow_ups
);

alter table person_follow_ups_investigations


create unique index if not exists person_follow_ups_investigations_description_uindex
    on person_follow_ups_investigations (description);

create unique index if not exists person_follow_ups_investigations_id_uindex
    on person_follow_ups_investigations (id);

create unique index if not exists investigations_id_uindex
    on investigations (id);

create table if not exists examinations
(
    id        uuid not null
    constraint examinations_pk
    primary key,
    details   jsonb,
    procedure jsonb
);

alter table examinations


create unique index if not exists examinations_id_uindex
    on examinations (id);

create table if not exists person_follow_ups_examinations
(
    id             uuid not null
    constraint person_follow_ups_examinations_pk
    primary key,
    description    text not null,
    details        jsonb,
    results        jsonb,
    examination_id uuid
    constraint person_follow_ups_examinations_examinations_id_fk
    references examinations,
    procedure      jsonb,
    follow_up_id   uuid not null
    constraint person_follow_ups_examinations_person_follow_ups_id_fk
    references person_follow_ups
);

alter table person_follow_ups_examinations


create unique index if not exists person_follow_ups_examinations_description_uindex
    on person_follow_ups_examinations (description);

create unique index if not exists person_follow_ups_examinations_id_uindex
    on person_follow_ups_examinations (id);

create table if not exists person_medical_history
(
    id          uuid default gen_random_uuid() not null
    constraint person_medical_history_pk
    primary key,
    duration    text                           not null,
    disease     text                           not null,
    medications text,
    person_id   uuid                           not null
    constraint person_medical_history_persons_id_fk
    references persons
    );

alter table person_medical_history


