import checkAppToken from '@/middleware/checkAppToken'
import { Router } from 'express'
import createProject from './createProject'
import listProjects from './listProjects'

const ProjectRouter = Router()

ProjectRouter.get('/', listProjects)
ProjectRouter.post('/', checkAppToken, createProject)

export default ProjectRouter
