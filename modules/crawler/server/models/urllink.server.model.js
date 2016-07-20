'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Link Schema
 */
var UrlLinkSchema = new Schema({
    urlLink: {
        type: String,
        default: '',
        trim: true,     
        unique : true,
        // make this a required field
        required: 'link cannot be blank'
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
        trim: true
    }
});

mongoose.model('UrlLink', UrlLinkSchema);
