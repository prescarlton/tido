import { FormProvider, useForm } from "react-hook-form"

import FeaturesSettingList from "@/components/projects/settings/FeatureToggles/SettingList"
import SettingsSection from "@/components/projects/settings/SettingsSection"

const FeatureToggles = () => {
  const formMethods = useForm({})
  const { handleSubmit } = formMethods

  const onSubmit = () => {}

  return (
    <FormProvider {...formMethods}>
      <SettingsSection
        sectionName="Features"
        settings={FeaturesSettingList}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}

export default FeatureToggles
