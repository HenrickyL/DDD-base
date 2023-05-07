import { adaptRoute } from "@core/infra/adapters/ExpressRouteAdapter";
import express from "express";
import { makeRegisterUserController } from "../factories/controllers/makeRegisterUserController";
import { adaptMiddleware } from "@core/infra/adapters/ExpressMiddlewareAdapter";
import { makeEnsureAuthenticatedMiddleware } from "../factories/middlewares/EnsureAuthenticatedMiddlewareFactory";


const usersRouter = express.Router()

usersRouter.use(adaptMiddleware(makeEnsureAuthenticatedMiddleware()))
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         name:
 *           type: string
 *       required:
 *         - username
 *         - email
 *         - password
 *         - name
 *
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         username:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * /users:
 *   post:
 *     summary: RegisterUser
 *     description: Cria um usuário 
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/RegisterUserRequest'
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: InvalidPasswordError -> The password must have at least 8 characters, one number, and at least one uppercase letter
 *              
 */
usersRouter.post('/', adaptRoute(makeRegisterUserController()))

export { usersRouter }
