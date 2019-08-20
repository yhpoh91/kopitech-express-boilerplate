import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';

import DatabaseService from '../services/database';

import logger from '../services/logger';
import errorHandler from '../services/errorHandler';

import constants from './constants';

const container = {};

// Configs
container.constants = constants;

// External
container.express = express;
container.axios = axios;
container.mongoose = mongoose;

// Internal
container.databaseService = DatabaseService(container);

// Core Service
container.logger = logger;
container.errorHandler = errorHandler;

export default container;
