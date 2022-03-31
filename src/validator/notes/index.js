/* eslint-disable linebreak-style */
/* eslint-disable indent */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
        throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;