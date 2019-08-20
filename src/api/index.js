import SampleRouter from './routes/sample.route';

export default (container) => {
  const router = container.express.Router();

  router.get('/', (_, res) => res.send('Hello, your Boilerplate build is a success!\n'));

  router.use('/sample', SampleRouter(container));

  return router;
};
