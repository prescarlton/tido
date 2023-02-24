import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AuthRequestBody, AuthRequestSchema } from 'shared/types/auth'

const SignupForm = ({ switchForm }: { switchForm: () => void }) => {
  const defaultValues: AuthRequestBody = {
    username: '',
    password: '',
  }
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const onSubmit = (data: AuthRequestBody) => {
    console.info(data)
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

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
      <Typography variant="h1">Sign up</Typography>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <TextField label="Username" {...register('username')} fullWidth />
        <TextField label="Password" {...register('password')} fullWidth />
        <Button type="submit" variant="contained" sx={{ width: '40%' }}>
          Sign up
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Typography variant="caption">Already have an account?</Typography>
        <Button
          onClick={handleSwitchForm}
          variant="text"
          sx={{ textTransform: 'none' }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  )
}
export default SignupForm
