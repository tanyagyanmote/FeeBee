CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE IF NOT EXISTS hts_codes (
  id                 BIGSERIAL PRIMARY KEY,
  hs6                TEXT,
  code8              TEXT,
  code10             TEXT,
  code_display       TEXT,
  description        TEXT NOT NULL,
  unit               TEXT,
  duty_general       TEXT,
  duty_special       TEXT,
  duty_col2          TEXT,
  additional_duties  TEXT,
  indent             INT
);

