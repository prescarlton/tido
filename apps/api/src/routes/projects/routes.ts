import checkAppToken from '@/middleware/checkAppToken'
import checkProjectAccess from '@/middleware/checkProjectAccess'
import { Router } from 'express'
import BoardsRouter from './boards/routes'
import createProject from './createProject'
import getProjectById from './getProjectById'
import listProjects from './listProjects'

const ProjectRouter = Router()

// get
ProjectRouter.get('/', listProjects)
ProjectRouter.get('/:projectId', checkAppToken, getProjectById)

// post
ProjectRouter.post('/', checkAppToken, createProject)

ProjectRouter.use('/:projectId/boards', BoardsRouter, checkProjectAccess)

export default ProjectRouter
