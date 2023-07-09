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
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        お名前を入力してください
      </Typography>
      <DefaultFormInput
        placeholder="お名前"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="かな"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        住所を入力してください
      </Typography>
      <DefaultFormInput
        placeholder="郵便番号"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="都道府県"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="市区町村"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="住所"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="建物"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        連作先を入力してください
      </Typography>
      <DefaultFormInput
        placeholder="電話番号"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="メールアドレス"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        任意で入力してください
      </Typography>
      <DefaultFormInput
        placeholder="アレルギー"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

      <DefaultFormInput
        placeholder="メッセージ"
        type="email"
        value={getValues('email')}
        startAdornment={<EmailIcon />}
      />

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
