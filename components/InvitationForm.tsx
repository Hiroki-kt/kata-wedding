import {
  Stack,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
  Link,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useForm, Controller } from 'react-hook-form'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import DefaultFormInput from './DefaultFormInput'

type Props = {
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
}

type FormValues = {
  email: string
  password: string
  password2: string
  agree: boolean
}
const InvitationForm: FC<Props> = ({ setStep }) => {
  // const router = useRouter()
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const { tk } = router.query
  // }, [router.isReady])

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    control,
  } = useForm<FormValues>()

  const signup = async (data: FormValues) => {
    // const check = await auth.signUp(data.email, data.password)
    const check = { success: true, message: 'success' }
    if (check?.success) {
      setStep(1)
    } else {
      alert(check?.message)
    }
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(signup)}
      alignItems="center"
      // sx={{ background: '#FFF' }}
      // width={{ xs: 'calc(100% - 32px)', sm: '450px' }}
      p={{ xs: 2, sm: 5 }}
    >
      <DefaultFormInput
        placeholder="メールアドレス"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
        formInputStyle={{ margin: '28px 0' }}
        formInputProps={{ readOnly: true }}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: 'パスワードを入力してください' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="パスワード"
            type="password"
            value={field.value}
            onChange={field.onChange}
            error={!!errors.password}
            helperText={errors.password?.message}
            startAdornment={<LockIcon />}
          />
        )}
      />

      <Controller
        name="password2"
        control={control}
        rules={{
          validate: (value) =>
            value === getValues('password') || 'パスワードが一致しません',
        }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="パスワード (確認)"
            type="password"
            value={field.value}
            onChange={field.onChange}
            error={!!errors.password2}
            helperText={errors.password2?.message}
            startAdornment={<LockIcon />}
            formInputStyle={{ marginBottom: '10px' }}
          />
        )}
      />

      {/* <FormControl error={true} sx={{ height: '80px' }}>
        <FormControlLabel
          control={
            <Checkbox
              {...register('agree', {
                required: '利用規約とプライバシーポリシーへの同意は必須です',
              })}
              color="primary"
              icon={
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#D9D9D9',
                    borderRadius: '10px',
                    marginRight: '14px',
                  }}
                />
              }
              checkedIcon={
                <CheckBoxIcon
                  width="30px"
                  height="30px"
                  sx={{
                    width: '30px',
                    height: '30px',
                    marginRight: '14px',
                  }}
                />
              }
            />
          }
          label={
            <Typography sx={{ color: '#6C698A' }}>
              <Link
                color="inherit"
                href={process.env.NEXT_PUBLIC_ADMIN_POLICY}
                target="_blank"
                rel="noopener noreferrer"
              >
                利用規約とプライバシーポリシー
              </Link>
              に同意する
            </Typography>
          }
        />
        <FormHelperText>{errors.agree?.message}</FormHelperText>
      </FormControl> */}

      <Button
        variant="contained"
        type="submit"
        sx={{
          width: '100%',
          height: '65px',
          fontSize: '20px',
          borderRadius: '10px',
          fontWeight: 'bold',
        }}
      >
        送信
      </Button>
    </Stack>
  )
}

export default InvitationForm
