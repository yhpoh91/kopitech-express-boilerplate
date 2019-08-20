import httpStatus from 'http-status';

export default container => ({
  list: async (req, res, next) => {
    try {
      const samples = await container.databaseService.Sample.list();
      res.status(httpStatus.OK).json(samples);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const data = req.body;
      const savedSample = await container.databaseService.Sample.create(data);
      res.status(httpStatus.OK).json(savedSample);
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const { sampleId } = req.params;
      const sample = await container.databaseService.Sample.read(sampleId);
      res.status(httpStatus.OK).json(sample);
    } catch (error) {
      next(error);
    }
  },

  write: async (req, res, next) => {
    try {
      const { sampleId } = req.params;
      const data = req.body;
      const savedSample = await container.databaseService.Sample.update(sampleId, data);
      res.status(httpStatus.OK).json(savedSample);
    } catch (error) {
      next(error);
    }
  },

  remove: async (req, res, next) => {
    try {
      const { sampleId } = req.params;
      await container.databaseService.Sample.remove(sampleId);
      res.status(httpStatus.OK).send('ok')
    } catch (error) {
      next(error);
    }
  },

});
