import validate from 'express-validation';
import Controller from '../controllers/sample.controller';
import validator from '../validations/sample.validation';

export default (container) => {
  const router = container.express.Router();
  const controller = Controller(container);

  router.route('/')
    .get(validate(validator.listSample), controller.list)
    .post(validate(validator.createSample), controller.create);

  router.route('/:sampleId')
    .get(validate(validator.readSample), controller.read)
    .put(validate(validator.updateSample), controller.write)
    .delete(validate(validator.removeSample), controller.remove);

  return router;
};
