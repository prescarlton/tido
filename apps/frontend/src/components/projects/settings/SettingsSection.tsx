import { Box, Divider, Stack, Typography } from '@mui/material'

interface ISetting {
  title: string
  description: string
  dataType: 'text' | 'toggle' | 'long text'
}
interface ISettingsSection {
  sectionName: string
  settings: ISetting[]
}

const SettingsSection = ({ sectionName, settings }: ISettingsSection) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3">{sectionName}</Typography>

      <Divider flexItem />
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
