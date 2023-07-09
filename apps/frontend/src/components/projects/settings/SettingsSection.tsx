import { FormProvider, useForm } from "react-hook-form"

import SettingValue from "@/components/projects/settings/SettingValue"
import { ISettingsSection } from "@/types/components/Settings"
import { Box, Button, Stack, Text, Title } from "@mantine/core"

const SettingsSection = ({
  sectionName,
  settings,
  color = "default",
  onSubmit,
}: ISettingsSection) => {
  const borderColor = color === "default" ? "divider" : `${color}.main`

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flex: 0.75,
      }}
      component="form"
      onSubmit={onSubmit}
    >
      <Title size="h3">{sectionName}</Title>
      <Box
        sx={{
          border: 1,
          borderColor,
          borderRadius: 4,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack spacing={2}>
          {settings.map((setting) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={setting.name}
            >
              <Box>
                <Text sx={{ fontWeight: 700 }}>{setting.label}</Text>
                <Text variant="caption">{setting.description}</Text>
              </Box>
              <Box>
                <SettingValue {...setting} />
              </Box>
            </Box>
          ))}
        </Stack>
        <Button variant="filled" type="submit" sx={{ alignSelf: "flex-end" }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  )
}

export default SettingsSection
