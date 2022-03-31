/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};