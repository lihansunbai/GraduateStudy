
CREATE TABLE polygon
(
  userid integer NOT NULL,
  polygonid integer NOT NULL,
  ppointid integer,
  x double precision,
  y double precision
);

CREATE TABLE point
(
  userid integer NOT NULL,
  pointid integer NOT NULL,
  x double precision,
  y double precision
);

CREATE TABLE line
(
  userid integer NOT NULL,
  lineid integer NOT NULL,
  lpointid integer,
  x double precision,
  y double precision,
  flag boolean
);
