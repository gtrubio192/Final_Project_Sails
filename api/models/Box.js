/**
* Box.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    page  : { type: 'string', unique: false },
    section  : { type: 'string', unique: false },
    content: { type: 'string', unique:false },
    positionLeft: { type: 'integer', unique: false},
    positionTop: { type: 'integer', unique: false },
    position: { type: 'string', unique: false }
  }
};

