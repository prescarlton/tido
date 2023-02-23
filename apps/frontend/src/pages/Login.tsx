import { Box, Button, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

import Page from '@/components/common/Page'
import LoginForm from '@/components/login/LoginForm'
import SignupForm from '@/components/login/SignupForm'

const LoginPage = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const theme = useTheme()
  return (
    <Page>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          height: '100%',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2,
            width: '50%',
            p: 2,
            position: 'absolute',
            top: theme.spacing(2),
            bottom: theme.spacing(2),
            left: mode === 'login' ? '1rem' : `calc(50% - ${theme.spacing(2)})`,
            zIndex: 2,
            transition: '.3s ease-in-out all',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              m: 2,
            }}
          >
            tido
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h1">Get $#*! done.</Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.7, width: '90%' }}>
              tido is an all-in-one project management tool that helps you and
              your team get things done.
            </Typography>
          </Box>
        </Box>
        <SignupForm switchForm={() => setMode('login')} />
        <LoginForm switchForm={() => setMode('signup')} />
      </Box>
    </Page>
  )
}

export default LoginPage
