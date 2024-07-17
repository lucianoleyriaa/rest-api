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

  // Swagger configuration
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  app.use('/*', (req, res, next) => {
    res.status(404).json({ 
      status: 'error',
      message: 'Endpoint not found' 
    });
  });

  // Global Error handler
  app.use(ErrorHandler.run())

  app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`)
  })
}

boostrap();