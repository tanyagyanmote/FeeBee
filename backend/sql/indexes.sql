CREATE INDEX IF NOT EXISTS idx_hts_hs6    ON hts_codes (hs6);
CREATE INDEX IF NOT EXISTS idx_hts_code8  ON hts_codes (code8);
CREATE INDEX IF NOT EXISTS idx_hts_code10 ON hts_codes (code10);
CREATE INDEX IF NOT EXISTS idx_hts_desc_trgm
  ON hts_codes USING GIN (description gin_trgm_ops);
