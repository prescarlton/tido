import { Box, Divider, Stack, Typography } from '@mui/material'

const SettingsSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Divider flexItem />
      <Typography variant="h4">{sectionName}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      ></Box>
    </Box>
  )
}

export default SettingsSection
