import express from 'express';
import 'dotenv/config'

import { UserRoutes } from './users/routes/user.routes';
import { ErrorHandler } from './common/middlewares';

const PORT = process.env.PORT || 4000;

function boostrap() {
  const app = express();

  app.use(express.json());

  // Routes
  app.use('/api/users', UserRoutes);
  // TODO: Evaluar si lo podemos cambiar el nombre de run
  app.use(ErrorHandler.run)

  app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`)
  })

}

boostrap();