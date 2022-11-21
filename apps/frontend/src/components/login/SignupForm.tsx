import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const SignupForm = ({ switchForm }: { switchForm: () => void }) => {
  const defaultValues = {
    username: '',
    password: '',
  }
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  const { handleSubmit, register, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: 16,
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
