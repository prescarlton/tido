import { Router } from 'express'

import createBoard from './createBoard'
import getBoardById from './getBoardById'
import listBoards from './listBoards'

const BoardsRouter: Router = Router({ mergeParams: true })

// get
BoardsRouter.get('/', listBoards)
BoardsRouter.get('/:boardId', getBoardById)

// post
BoardsRouter.post('/', createBoard)

export default BoardsRouter
