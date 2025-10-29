CREATE TABLE IF NOT EXISTS hts_codes (
  id                 BIGSERIAL PRIMARY KEY,
  code10             TEXT,
  code8              TEXT,
  hs6                TEXT,
  code_display       TEXT,
  description        TEXT NOT NULL,
  unit               TEXT,
  duty_general       TEXT,
  duty_special       TEXT,
  duty_col2          TEXT,
  additional_duties  TEXT,
  indent             INT
);