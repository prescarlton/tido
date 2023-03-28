import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { UpdateGenProjSettingsBody } from 'shared/types/projects'

import SettingList from '@/components/projects/settings/GeneralSettings/SettingList'
import SettingsSection from '@/components/projects/settings/SettingsSection'
import useGetGenProjSettings from '@/hooks/api/projects/settings/useGetGeneralSettings'
import useUpdateGenProjSettings from '@/hooks/api/projects/settings/useUpdateGeneralSettings'

const GeneralProjectSettings = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      description: '',
    },
  })
  const { control, reset, handleSubmit } = formMethods

  const { data: settings } = useGetGenProjSettings()
  const updateMutation = useUpdateGenProjSettings()

  useEffect(() => {
    if (settings) formMethods.reset(settings)
  }, [settings])

  const onSubmit = async (data: UpdateGenProjSettingsBody) => {
    await updateMutation.mutateAsync(data)
  }

  return (
    <FormProvider {...formMethods}>
      <SettingsSection
        sectionName="General"
        settings={SettingList}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}

export default GeneralProjectSettings
