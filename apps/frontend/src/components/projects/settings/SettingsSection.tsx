import { Box, Button, Grow, Stack, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

import SettingValue from '@/components/projects/settings/SettingValue'
import { ISettingsSection } from '@/types/components/Settings'

const SettingsSection = ({
  sectionName,
  settings,
  color = 'default',
}: ISettingsSection) => {
  const borderColor = color === 'default' ? 'divider' : `${color}.main`

  const formMethods = useForm()
  return (
    <Grow in>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flex: 0.75,
        }}
      >
        <FormProvider {...formMethods}>
          <Typography variant="h3">{sectionName}</Typography>
          <Box
            sx={{
              border: 1,
              borderColor,
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Stack spacing={2}>
              {settings.map((setting) => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                  key={setting.name}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>
                      {setting.label}
                    </Typography>
                    <Typography variant="caption">
                      {setting.description}
                    </Typography>
                  </Box>
                  <Box>
                    <SettingValue {...setting} />
                  </Box>
                </Box>
              ))}
            </Stack>
            <Button
              variant="contained"
              type="submit"
              sx={{ alignSelf: 'flex-end' }}
            >
              Save Changes
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Grow>
  )
}

export default SettingsSection
