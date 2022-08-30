--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

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

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: constellation; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.constellation (
    name character varying(30) NOT NULL,
    constellation_id integer NOT NULL,
    genitive character varying(40) NOT NULL
);


ALTER TABLE public.constellation OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.constellation_constellation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.constellation_constellation_id_seq OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.constellation_constellation_id_seq OWNED BY public.constellation.constellation_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(40) NOT NULL,
    size numeric NOT NULL,
    type text NOT NULL,
    cool_or_not boolean,
    super_cool_or_not boolean,
    apparent_magnitude integer,
    absolute_magniutde integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(40) NOT NULL,
    size numeric NOT NULL,
    type text NOT NULL,
    cool_or_not boolean,
    super_cool_or_not boolean,
    apparent_magnitude integer,
    absolute_magniutde integer,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(40) NOT NULL,
    size numeric NOT NULL,
    type text NOT NULL,
    cool_or_not boolean,
    super_cool_or_not boolean,
    apparent_magnitude integer,
    absolute_magniutde integer,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(40) NOT NULL,
    size numeric NOT NULL,
    type text NOT NULL,
    cool_or_not boolean,
    super_cool_or_not boolean,
    apparent_magnitude integer,
    absolute_magniutde integer,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: constellation constellation_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation ALTER COLUMN constellation_id SET DEFAULT nextval('public.constellation_constellation_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: constellation; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.constellation VALUES ('Andromeda', 1, 'Andromedae');
INSERT INTO public.constellation VALUES ('Sagittarius', 2, 'Sagittarii');
INSERT INTO public.constellation VALUES ('Triangulum', 3, 'Trianguli');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Andromeda', 45.56, 'SAsb', true, true, 3, -22);
INSERT INTO public.galaxy VALUES (2, 'Milky Way', 26.8, 'Sb', true, true, 1, 2);
INSERT INTO public.galaxy VALUES (3, 'Galaxy 3', 212, 'Scb', true, true, 3, 5);
INSERT INTO public.galaxy VALUES (4, 'Galaxy 4', 2212, 'Sdcb', true, true, 33, 54);
INSERT INTO public.galaxy VALUES (5, 'Galaxy 5', 32212, 'Sddcb', true, true, 313, 354);
INSERT INTO public.galaxy VALUES (6, 'Galaxy 6', 342212, 'Sdddcb', true, true, 3213, 3254);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon 1', 1432, 'Sddfdb', true, true, 3323, 3334, 1);
INSERT INTO public.moon VALUES (2, 'Moon 2', 142, 'Sddfb', true, true, 332, 334, 2);
INSERT INTO public.moon VALUES (3, 'Moon 3', 12, 'Sdfb', true, true, 32, 34, 3);
INSERT INTO public.moon VALUES (4, 'Moon 4', 312, 'Ssdfb', true, true, 322, 234, 4);
INSERT INTO public.moon VALUES (5, 'Moon 5', 3132, 'Ssfdfb', true, true, 3322, 2434, 5);
INSERT INTO public.moon VALUES (6, 'Moon 6', 332, 'Ssdfb', true, true, 322, 234, 6);
INSERT INTO public.moon VALUES (7, 'Moon7', 5332, 'Sgsdfb', true, true, 3422, 2434, 7);
INSERT INTO public.moon VALUES (8, 'Moon 8', 53332, 'Sgsddfb', true, true, 34232, 2434, 8);
INSERT INTO public.moon VALUES (9, 'Moon 9', 513332, 'Sgsdadfb', true, true, 342132, 24334, 9);
INSERT INTO public.moon VALUES (10, 'Moon 10', 5131332, 'Sgsdaddfb', true, true, 3423132, 243334, 10);
INSERT INTO public.moon VALUES (11, 'Moon 11', 51313132, 'Sgsdadddfb', true, true, 31423132, 2433334, 11);
INSERT INTO public.moon VALUES (12, 'Moon 12', 513131132, 'Sgsdadaddfb', true, true, 314233132, 24333334, 12);
INSERT INTO public.moon VALUES (13, 'Moon 13', 51313132, 'Sgsdadadfb', true, true, 31423332, 243334, 1);
INSERT INTO public.moon VALUES (14, 'Moon 14', 5131312, 'Sgsdaadfb', true, true, 3142332, 24334, 2);
INSERT INTO public.moon VALUES (15, 'Moon 15', 513112, 'Sgsdaafb', true, true, 314232, 2434, 3);
INSERT INTO public.moon VALUES (16, 'Moon 16', 51311, 'Sgsdaaf', true, true, 31432, 244, 4);
INSERT INTO public.moon VALUES (17, 'Moon 17', 5131, 'Sgsdaf', true, true, 3132, 24, 5);
INSERT INTO public.moon VALUES (18, 'Moon 18', 51131, 'Sgsadaf', true, true, 31332, 243, 6);
INSERT INTO public.moon VALUES (19, 'Moon 19', 514131, 'Sgssadaf', true, true, 313342, 2443, 7);
INSERT INTO public.moon VALUES (20, 'Moon 20', 5141231, 'Sgssaadaf', true, true, 3132342, 24413, 8);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Planet 1', 34233332, 'Sdddddddcb', true, true, 334243, 322354, 1);
INSERT INTO public.planet VALUES (2, 'Planet 2', 3423332, 'Sddddddcb', true, true, 33423, 32354, 2);
INSERT INTO public.planet VALUES (3, 'Planet 3', 342332, 'Sdddddcb', true, true, 3323, 3254, 3);
INSERT INTO public.planet VALUES (4, 'Planet 4', 34332, 'Sddddcb', true, true, 323, 354, 4);
INSERT INTO public.planet VALUES (5, 'Planet 5', 3432, 'Sdddcb', true, true, 3323, 3354, 5);
INSERT INTO public.planet VALUES (6, 'Planet 6', 34432, 'Sddfdcb', true, true, 33423, 33454, 6);
INSERT INTO public.planet VALUES (7, 'Planet 7', 344232, 'Sddfsdcb', true, true, 332423, 332454, 1);
INSERT INTO public.planet VALUES (8, 'Planet 8', 3442332, 'Sddfsddcb', true, true, 3324323, 3324354, 2);
INSERT INTO public.planet VALUES (9, 'Planet 9', 13442332, 'Sddfsdsdcb', true, true, 33243213, 33243154, 3);
INSERT INTO public.planet VALUES (10, 'Planet 10', 1344232, 'Sddfdsdcb', true, true, 3324313, 3324354, 4);
INSERT INTO public.planet VALUES (11, 'Planet 11', 134232, 'Sddfdsdb', true, true, 332313, 334354, 5);
INSERT INTO public.planet VALUES (12, 'Planet 12', 13432, 'Sddfdsb', true, true, 33213, 33434, 6);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (2, 'Star 2', 34233212, 'Sdddddcb', true, true, 332213, 324254, 1);
INSERT INTO public.star VALUES (3, 'Star 3', 342332312, 'Sddddadcb', true, true, 3342213, 3242354, 2);
INSERT INTO public.star VALUES (4, 'Star4', 3423323312, 'Sdddddadcb', true, true, 33423213, 32422354, 3);
INSERT INTO public.star VALUES (5, 'Star 5', 34233323312, 'Sddddddadcb', true, true, 334233213, 324223354, 4);
INSERT INTO public.star VALUES (6, 'Star 6', 3423332332, 'Sdddddddadcb', true, true, 33423343, 32423354, 5);
INSERT INTO public.star VALUES (7, 'Star 7', 342333232, 'Sddddddddcb', true, true, 3342343, 3223354, 6);
INSERT INTO public.star VALUES (1, 'Star 1', 3423212, 'Sddddcb', true, true, 33213, 34254, 1);


--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.constellation_constellation_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 7, true);


--
-- Name: constellation constellation_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_name_key UNIQUE (name);


--
-- Name: constellation constellation_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_pkey PRIMARY KEY (constellation_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

