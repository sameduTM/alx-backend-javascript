import express from 'express';
import allRoutes from './routes/index';

const app = express();
const port = 1245;

app.use(allRoutes);

app.listen(port, () => {
  console.log('...');
});

export default app;
