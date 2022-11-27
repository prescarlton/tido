import useAuthContext from '@/contexts/AuthContext'
import useSnackbarContext from '@/contexts/SnackbarContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import { MouseEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import ControlledTextField from '../fields/ControlledTextField'

const LoginForm = ({ switchForm }: { switchForm: () => void }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { loginMutation } = useAuthContext()

  const toggleShowPassword = (e: MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }

  const defaultValues = {
    username: '',
    password: '',
  }
  const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    await loginMutation
      .mutateAsync(data)
      .catch((err: AxiosError<{ message: string }>) => {
        setErrorMessage(err.response?.data.message ?? 'Login failed')
      })
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

  useEffect(() => {
    if (loginMutation.error)
      setErrorMessage(
        loginMutation.error.response?.data.message ?? 'Login failed'
      )
  }, [loginMutation.error])

  useEffect(() => {
    if (formState.errors && formState.isSubmitted)
      setErrorMessage('Username and password are required')
  }, [formState.errors, formState.isSubmitted])

  return (
    <Box
      sx={{
        width: '50%',
        p: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{}}>
        <Typography variant="h1">Log In</Typography>
        {errorMessage && (
          <Typography variant="body1" color="error.main">
            {errorMessage}
          </Typography>
        )}
      </Box>
      <Stack spacing={2} sx={{}}>
        <ControlledTextField
          control={control}
          name="username"
          label="Username"
          TextFieldProps={{
            fullWidth: true,
          }}
          disableError
        />
        <ControlledTextField
          control={control}
          name="password"
          label="Password"
          TextFieldProps={{
            fullWidth: true,
            type: showPassword ? 'text' : 'password',
            InputProps: {
              endAdornment: (
                <IconButton onClick={toggleShowPassword}>
                  <Visibility />
                </IconButton>
              ),
            },
          }}
          disableError
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
        <Typography variant="caption">New around here?</Typography>
        <Button
          onClick={handleSwitchForm}
          variant="text"
          sx={{ textTransform: 'none' }}
        >
          Create an account
        </Button>
      </Stack>
    </Box>
  )
}
export default LoginForm
