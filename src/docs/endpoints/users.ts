// GET => /api/users
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Get all users
 *    tags:
 *      - Users
 *    responses:
 *      200:
 *        description: Return and array with all users
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetUsers'
 *      500: 
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InternalServerError'
 * 
 */

// GET => /api/users/:id
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get an specific user by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: User id you want to get
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Return an specific user with id, name, email and age
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetUser'
 *      404:
 *        description: User not found with entered id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFoundError'
 *      500: 
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InternalServerError'
 * 
 */

// POST /api/users/create
/**
 * @swagger
 * /api/users/create:
 *  post:
 *    summary: Create a new user
 *    tags:
 *      - Users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUser'
 *    responses:
 *      200:
 *        description: Return an specific user with id, name, email and age
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserCreatedResponse'
 *      400:
 *        description: User with an specific email already exist
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DuplicatedEmailError'
 *      500: 
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InternalServerError'
 * 
 */

// POST /api/users/update/:id
/**
 * @swagger
 * /api/users/update/{id}:
 *  patch:
 *    summary: Update an user by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The user ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateUser'
 *    responses:
 *      200:
 *        description: Return the updated user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserCreatedResponse'
 *      400:
 *        description: Return an error when trying to update invalid inputs
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateInvalidInputError'
 *      404:
 *        description: User not found with entered id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFoundError'
 *      500: 
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InternalServerError'
 * 
 */

// DELETE /api/users/delete/:id
/**
 * @swagger
 * /api/users/delete/{id}:
 *  delete:
 *    summary: Delete an user by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The user ID
 *    responses:
 *      204:
 *        description: Only return 204 no content
 *      404:
 *        description: User not found with entered id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFoundError'
 *      500: 
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InternalServerError'
 * 
 */