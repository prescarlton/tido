import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import SettingList from '@/components/projects/settings/GeneralSettings/SettingList'
import SettingsSection from '@/components/projects/settings/SettingsSection'
import useGetGenProjSettings from '@/hooks/api/projects/settings/useGetGeneralSettings'

const GeneralProjectSettings = () => {
  const formMethods = useForm()

  const { data: settings } = useGetGenProjSettings()

  useEffect(() => {
    if (settings) formMethods.reset(settings)
  }, [settings])

  return (
    <FormProvider {...formMethods}>
      <SettingsSection sectionName="General" settings={SettingList} />
    </FormProvider>
  )
}

export default GeneralProjectSettings
