/**
* Box.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    page  : { type: 'string', unique: true },
    key  : { type: 'string', unique: true },
    content: { type: 'string', unique:false }

  }
};

