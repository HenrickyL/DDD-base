import express from 'express';
import { sessionsRouter } from './sessions.routes';
import { usersRouter } from './users.routes'

const router = express.Router();

router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)

export { router };