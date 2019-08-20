import Sample from './models/sample.model';

import SampleAccessor from './accessors/sample.accessor';

export default (container) => {
  const { mongoose } = container;
  const init = () => {
    mongoose.connection.on('error', (error) => {
      container.logger.error(`MongoDB connection error: ${error}`);
      process.exit(-1);
    });

    // Setup Debug Mode
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true);
    }

    const { uri } = container.constants.mongo;
    mongoose.connect(uri, {
      keepAlive: 1,
      useNewUrlParser: true,
    }, (error) => {
      if (error) {
        container.logger.error(error);
      } else {
        container.logger.info('Mongoose connected to MongoDB server');
      }

      return mongoose.connection;
    });
  };

  const models = {
    Sample: Sample(mongoose),
  };

  return {
    init,
    Sample: SampleAccessor(container, models),
  };
};
