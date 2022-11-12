import checkAppToken from '@/middleware/checkAppToken'
import { Router } from 'express'
import listProjects from './listProjects'

const ProjectRouter = Router()

ProjectRouter.get('/', listProjects)

export default ProjectRouter
