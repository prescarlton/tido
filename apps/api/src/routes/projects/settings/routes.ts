import { Router } from 'express'

import getGeneralSettings from '@/routes/projects/settings/getGeneralSettings'

const projectSettingsRouter: Router = Router({ mergeParams: true })

projectSettingsRouter.get('/general', getGeneralSettings)

export default projectSettingsRouter
