'use strict';

const Joi = require('joi');
class DomainModel {
    static get schema() {

        return {
            id: Joi.number(),
            agent: Joi.string().trim(),
            domainName: Joi.string().trim(),
            enabled: Joi.boolean(),
            intentThreshold: Joi.number(),
            lastTraining: Joi.date(),
            model: Joi.string().trim()
        };
    };
}

module.exports = DomainModel;
