import checkAppToken from '@/middleware/checkAppToken'
import { Router } from 'express'
import createBoard from './createBoard'
import getBoardById from './getBoardById'
import listBoards from './listBoards'

const BoardsRouter = Router({ mergeParams: true })

// get
BoardsRouter.get('/', checkAppToken, listBoards)
BoardsRouter.get('/:boardId', checkAppToken, getBoardById)

// post
BoardsRouter.post('/', checkAppToken, createBoard)

export default BoardsRouter
