import Joi from 'joi';

export default {
  listSample: {
    query: {},
    params: {},
    body: {},
  },

  createSample: {
    query: {},
    params: {},
    body: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  },

  readSample: {
    query: {},
    params: {
      sampleId: Joi.string().required(),
    },
    body: {},
  },

  updateSample: {
    query: {},
    params: {
      sampleId: Joi.string(),
    },
    body: {
      name: Joi.string(),
      description: Joi.string(),
    },
  },

  removeSample: {
    query: {},
    params: {
      sampleId: Joi.string(),
    },
    body: {},
  },
};
