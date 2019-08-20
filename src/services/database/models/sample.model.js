export default (mongoose) => {
  const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  }, {
    timestamps: true,
  });


  schema.method({
    transform() {
      const transformed = {};
      const fields = ['id', 'name', 'description', 'createdAt', 'modifiedAt'];

      fields.forEach((field) => {
        transformed[field] = this[field];
      });

      return transformed;
    },
  });

  schema.statics = {
    async setEnabled(id, enabled) {
      const instance = await this.findById(id);
      instance.deleted = !enabled;
      return instance.save();
    },
  };

  return mongoose.model('Sample', schema);
};
