import { Router } from 'express'

import checkAppToken from '@/middleware/checkAppToken'
import checkProjectAccess from '@/middleware/checkProjectAccess'

import BoardsRouter from './boards/routes'
import createProject from './createProject'
import getProjectById from './getProjectById'
import listProjects from './listProjects'

const ProjectRouter: Router = Router()

// get
ProjectRouter.get('/', listProjects)
ProjectRouter.get('/:projectId', checkAppToken, getProjectById)

// post
ProjectRouter.post('/', checkAppToken, createProject)

// delete
ProjectRouter.delete('/:projectId', checkAppToken, getProjectById)

ProjectRouter.use('/:projectId/boards', BoardsRouter, checkProjectAccess)

export default ProjectRouter
