export default (container, models) => {
  const { Sample } = models;

  const list = async () => {
    try {
      const samples = await Sample.find();
      const transformedSamples = samples.map(sample => sample.transform());
      return transformedSamples;
    } catch (error) {
      container.logger.error(error.message);
      return Promise.reject(error);
    }
  }

  const create = async (data) => {
    try {
      const sample = new Sample(data);
      const savedSample = await sample.save();
      const transformedSample = savedSample.transform();
      return transformedSample;
    } catch (error) {
      container.logger.error(error.message);
      return Promise.reject(error);
    }
  };

  const read = async (id) => {
    try {
      const sample = await Sample.findById(id);
      const transformedSample = sample.transform();
      return transformedSample;
    } catch (error) {
      container.logger.error(error.message);
      return Promise.reject(error);
    }
  };

  const update = async (id, changes) => {
    try {
      const sample = await Sample.findById(id);
      if (sample == null) {
        return Promise.reject(new Error('Sample not found'));
      }

      // Update
      const updatedSample = Object.assign(sample, changes);
      const savedUpdatedSample = await updatedSample.save();

      const transformedSample = savedUpdatedSample.transform();
      return transformedSample;
    } catch (error) {
      container.logger.error(error.message);
      return Promise.reject(error);
    }
  }

  const remove = async (id) => {
    try {
      const sample = await Sample.findById(id);
      if (sample == null) {
        // Assume Deleted since cannot find
        return Promise.resolve();
      }

      // Soft Delete
      sample.deleted = true;
      await sample.save();

      return Promise.resolve();
    } catch (error) {
      container.logger.error(error.message);
      return Promise.reject(error);
    }
  }

  return {
    list,
    create,
    read,
    update,
    remove,
  };
};
