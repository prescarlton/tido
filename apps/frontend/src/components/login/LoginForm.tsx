import useAuthContext from '@/contexts/AuthContext'
import useSnackbarContext from '@/contexts/SnackbarContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import ControlledTextField from '../fields/ControlledTextField'

const LoginForm = ({ switchForm }: { switchForm: () => void }) => {
  const [showPassword, setShowPassword] = useState(false)

  const { loginMutation } = useAuthContext()
  const { openSnackbar } = useSnackbarContext()

  const toggleShowPassword = (e: MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }

  const defaultValues = {
    email: '',
    password: '',
  }
  const schema = yup.object({
    email: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    await loginMutation.mutateAsync(data).catch((err: AxiosError) => {
      openSnackbar({
        message: err.response?.data.message || 'Something went wrong',
        type: 'error',
      })
    })
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

  return (
    <Box
      sx={{
        width: '50%',
        p: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h1">Log In</Typography>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <ControlledTextField
          control={control}
          name="email"
          label="Email"
          TextFieldProps={{
            fullWidth: true,
          }}
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
        />
        <Button type="submit" variant="contained" sx={{ width: '40%' }}>
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
