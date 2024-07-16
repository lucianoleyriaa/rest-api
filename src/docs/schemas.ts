/**
 * @swagger
 * components:
 *  schemas:
 *    GetUsers:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Ok
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id: 
 *                type: string
 *              name: 
 *                type: string
 *              email:
 *                type: string
 *              age:
 *                type: number
 *            example:
 *              id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
 *              name: luciano
 *              email: lucholeyria@gmail.com
 *              age: 28
 *    GetUser:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Ok
 *        data:
 *          type: object
 *          properties:
 *            id: 
 *              type: string
 *            name: 
 *              type: string
 *            email:
 *              type: string
 *            age:
 *              type: number
 *          example:
 *            id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
 *            name: luciano
 *            email: lucholeyria@gmail.com
 *            age: 28
 *    CreateUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *        age:
 *          type: number
 *      example:
 *        id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
 *        name: luciano
 *        email: lucholeyria@gmail.com
 *        age: 28
 *      required:
 *        - name
 *        - email
 *        - age 
 *    UpdateUser:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *          format: email
 *        age:
 *          type: number
 *      example:
 *        email: lucholeyria@gmail.com
 *    UserCreatedResponse:
 *      type: object
 *      properties:
 *        status: 
 *          type: string
 *          example: Ok
 *        data: 
 *          type: object
 *          properties:
 *            id: 
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            age:
 *              type: number
 *          example:
 *            id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
 *            name: luciano
 *            email: lucholeyria@gmail.com
 *            age: 28
 *    DuplicatedEmailError:
 *      type: object
 *      properties:
 *        status: 
 *          type: string
 *          example: error
 *        message:
 *          type: string
 *          example: User with email lucholeyria@gmail.com already exists
 *    UserNotFoundError:
 *      type: object
 *      properties:
 *        status: 
 *          type: string
 *          example: error
 *        message:
 *          type: string
 *          example: User with id 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d not found
 *    UpdateInvalidInputError:
 *      type: object
 *      properties:
 *        status: 
 *          type: string
 *          example: error
 *        message:
 *          type: string
 *          example: "[fieldName] is not allowed" 
 *    InternalServerError:
 *      type: object
 *      properties:
 *        status: 
 *          type: string
 *          example: error
 *        message:
 *          type: string
 *          example: Internal server error
 * 
  */