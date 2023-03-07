import { Box, Divider, Typography } from '@mui/material'

import { ISettingsSection } from '@/types/components/Settings'

const SettingsSection = ({ sectionName, settings }: ISettingsSection) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="h3">{sectionName}</Typography>

      <Divider flexItem />
      {settings.map((setting) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          key={setting.title}
        >
          {setting.title}
        </Box>
      ))}
    </Box>
  )
}

export default SettingsSection
