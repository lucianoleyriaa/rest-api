import swaggerUi from 'swagger-ui-express';
import express from 'express';
import 'dotenv/config'

import { UserRoutes } from './users/routes/user.routes';
import { ErrorHandler } from './common/middlewares';
import swaggerConfig from './docs/swagger';

const PORT = process.env.PORT || 3000;

function boostrap() {
  const app = express();

  app.use(express.json());

  // Routes
  app.use('/api/users', UserRoutes);

  // Global Error handler
  app.use(ErrorHandler.run())

  // Swagger configuration
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`)
  })
}

boostrap();