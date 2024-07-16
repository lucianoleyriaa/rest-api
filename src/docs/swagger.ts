import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rest Api Global',
      version: '1.0.0',
    }
  },
  apis: [`${ path.join(__dirname, './endpoints/*') }`, `${ path.join(__dirname, './schemas.*') }`],
}

const swaggerSpecification = swaggerJSDoc(options);

export default swaggerSpecification;