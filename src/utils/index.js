/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };