DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
create type gender as enum ('MALE', 'FEMALE', 'OTHER');
create type transplantation_type as enum ('CADAVERIC', 'LIVE');
create type case_status as enum ('PRE', 'POST');
create type person_type as enum ('PATIENT', 'DONOR');
create type record_status as enum ('DRAFT','PUBLISHED','REDACTED');
create type person_status as enum ('ACTIVE','INACTIVE');
create type blood_group as enum ('A+','A-','B+','B-','O+','O-','AB+','AB-');

create table allergies
(
    id                char(27) not null,
    allergy           text,
    description       text,
    conditions        text,
    associated_causes text,
    type              text,
    constraint allergies_id_uindex
        primary key (id)
);

create unique index allergies_type_uindex
    on allergies (type);

create table persons
(
    id                     char(27)     not null,
    first_name             text         not null,
    last_name              text,
    address                text,
    date_of_birth          date,
    ethnicity              text,
    phn                    varchar(255),
    primary_renal_disease  varchar(255),
    weight                 double precision,
    height                 double precision,
    sex                    gender,
    marital_status         varchar(255) not null,
    contact_no             varchar(30),
    person_type            person_type default 'PATIENT'::person_type,
    waiting_list_inclusion date,
    blood_group            blood_group,
    status                 person_status,
    record_status          record_status,
    constraint persons_id_uindex
        primary key (id),
    constraint persons_phn_uindex
        unique (phn)
);

create table person_allergy
(
    id         char(27) not null,
    person_id  char(27) not null,
    allergy_id char(27) not null,
    note       text,
    constraint person_allergy_id_uindex
        primary key (id),
    constraint person_allergy_allergies_id_fk
        foreign key (allergy_id) references allergies,
    constraint person_allergy_persons_id_fk
        foreign key (person_id) references persons
);

create table person_organ_donation
(
    id              char(27)             not null,
    receiver_id     char(27)             not null,
    donor_id        char(27)             not null,
    donation_type   transplantation_type not null,
    planned_date    timestamp,
    performed_date  timestamp,
    discharged_date timestamp,
    acute_rejection boolean,
    constraint person_organ_donation_id_uindex
        primary key (id),
    constraint person_organ_donation_persons_id_fk
        foreign key (receiver_id) references persons,
    constraint person_organ_donation_persons_id_fk_2
        foreign key (donor_id) references persons
);

create table person_organ_donation_complications
(
    id          char(27)    not null,
    donation_id char(27)    not null,
    description text,
    created_at  timestamp,
    updated_at  timestamp,
    type        case_status not null,
    constraint person_organ_donation_complications_id_uindex
        primary key (id),
    constraint person_organ_donation_complications_person_organ_donation_id_fk
        foreign key (donation_id) references person_organ_donation
);

create table person_follow_ups
(
    id             char(27) not null,
    clinic_no      text     not null,
    description    text,
    person_id      char(27) not null,
    complaints     text,
    renal_biopsies text,
    case_status    case_status,
    donation_id    char(27),
    constraint follow_ups_id_uindex
        primary key (id),
    constraint follow_ups_persons_id_fk
        foreign key (person_id) references persons,
    constraint person_follow_ups_person_organ_donation_id_fk
        foreign key (donation_id) references person_organ_donation
);

create table person_relations
(
    id            char(27)     not null,
    patient_id    char(27)     not null,
    relation_id   char(27)     not null,
    relation_type varchar(255) not null,
    constraint person_relations_id_uindex
        primary key (id),
    constraint person_relations_persons_id_fk
        foreign key (patient_id) references persons,
    constraint person_relations_persons_id_fk_2
        foreign key (relation_id) references persons
);

create table users
(
    id       char(27)     not null,
    username varchar(255) not null,
    password varchar(255) not null,
    constraint users_id_uindex
        primary key (id),
    constraint users_username_uindex
        unique (username)
);

create table comorbidities
(
    id          char(27) not null,
    comorbidity text,
    description text,
    constraint comorbidities_pk
        primary key (id)
);

create unique index comorbidities_id_uindex
    on comorbidities (id);

create table person_comorbidities
(
    id             char(27) not null,
    comorbidity_id char(27) not null,
    person_id      char(27) not null,
    constraint person_comorbidities_pk
        primary key (id),
    constraint person_comorbidities_comorbidities_id_fk
        foreign key (comorbidity_id) references comorbidities,
    constraint person_comorbidities_persons_id_fk
        foreign key (person_id) references persons
);

create unique index person_comorbidities_comorbidity_id_person_id_uindex
    on person_comorbidities (comorbidity_id, person_id);

create unique index person_comorbidities_id_uindex
    on person_comorbidities (id);

create table workups
(
    id          char(27) not null,
    name        text     not null,
    description text,
    procedure   jsonb,
    "order"     integer,
    constraint workups_pk
        primary key (id)
);

create unique index workups_id_uindex
    on workups (id);

create unique index workups_name_uindex
    on workups (name);

create table person_workups
(
    id              char(27) not null,
    workup_id       char(27) not null,
    person_id       char(27) not null,
    procedure       jsonb    not null,
    comments        text,
    initiation_date timestamp(6),
    activation_date timestamp(6),
    constraint person_workups_pk
        primary key (id),
    constraint person_workups_workups_id_fk
        foreign key (workup_id) references workups,
    constraint person_workups_persons_id_fk
        foreign key (person_id) references persons
);

create unique index person_workups_id_uindex
    on person_workups (id);

create table person_suspensions
(
    id               char(27) not null,
    person_id        char(27) not null,
    workup_id        char(27),
    reason           text,
    reviewed_date    timestamp(6),
    next_review_date timestamp(6),
    concerns         text,
    constraint person_suspension_pk
        primary key (id),
    constraint person_suspensions_person_workups_id_fk
        foreign key (workup_id) references person_workups,
    constraint person_suspensions_persons_id_fk
        foreign key (person_id) references persons
);

create unique index person_suspension_id_uindex
    on person_suspensions (id);

create table person_follow_ups_medicines
(
    id            char(27) not null,
    medicine_code text     not null,
    description   text,
    reason        text,
    case_status   case_status,
    follow_up_id  char(27) not null,
    constraint person_follow_ups_medicines_pk
        primary key (id),
    constraint person_follow_ups_medicines_person_follow_ups_id_fk
        foreign key (follow_up_id) references person_follow_ups
);

create unique index person_follow_ups_medicines_id_uindex
    on person_follow_ups_medicines (id);

create table investigations
(
    id        char(27) not null,
    details   jsonb,
    procedure jsonb,
    "order"   integer,
    constraint investigations_pk
        primary key (id)
);

create table person_follow_ups_investigations
(
    id               char(27) not null,
    description      text     not null,
    details          jsonb,
    results          jsonb,
    investigation_id char(27),
    procedure        jsonb,
    follow_up_id     char(27) not null,
    obtained_date    timestamp,
    valid_days       integer,
    constraint person_follow_ups_investigations_pk
        primary key (id),
    constraint person_follow_ups_investigations_investigations_id_fk
        foreign key (investigation_id) references investigations,
    constraint person_follow_ups_investigations_person_follow_ups_id_fk
        foreign key (follow_up_id) references person_follow_ups
);

create unique index person_follow_ups_investigations_description_uindex
    on person_follow_ups_investigations (description);

create unique index person_follow_ups_investigations_id_uindex
    on person_follow_ups_investigations (id);

create unique index investigations_id_uindex
    on investigations (id);

create table examinations
(
    id        char(27) not null,
    details   jsonb,
    procedure jsonb,
    "order"   integer,
    constraint examinations_pk
        primary key (id)
);

create unique index examinations_id_uindex
    on examinations (id);

create table person_follow_ups_examinations
(
    id             char(27) not null,
    description    text     not null,
    details        jsonb,
    results        jsonb,
    examination_id char(27),
    procedure      jsonb,
    follow_up_id   char(27) not null,
    constraint person_follow_ups_examinations_pk
        primary key (id),
    constraint person_follow_ups_examinations_examinations_id_fk
        foreign key (examination_id) references examinations,
    constraint person_follow_ups_examinations_person_follow_ups_id_fk
        foreign key (follow_up_id) references person_follow_ups
);

create unique index person_follow_ups_examinations_description_uindex
    on person_follow_ups_examinations (description);

create unique index person_follow_ups_examinations_id_uindex
    on person_follow_ups_examinations (id);

create table person_medical_history
(
    id          char(27) not null,
    duration    text     not null,
    disease     text     not null,
    medications text,
    person_id   char(27) not null,
    constraint person_medical_history_pk
        primary key (id),
    constraint person_medical_history_persons_id_fk
        foreign key (person_id) references persons
);

