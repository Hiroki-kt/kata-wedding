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

interface FormValues {
  name: string
  kana: string
  zip_code: number | undefined
  state: string
  city: string
  address: string
  building: string
  phone: string
  email: string
  allergies: string
  message: string
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
    // setValue,
    getValues,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      kana: '',
      zip_code: undefined,
      state: '',
      city: '',
      address: '',
      building: '',
      phone: '',
      email: '',
      allergies: '',
      message: '',
    },
  })

  const sendForm = async (data: FormValues) => {
    // const check = await auth.signUp(data.email, data.password)
    console.log(data)

    const url = `https://api.notion.com/v1/pages/`
    try {
      const body = {
        parent: { database_id: 'e26e5645b5a94279b7539f12f6c074a9' },
        properties: format_properties(data),
      }
      console.log(body)
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify(body),
      })

      const res = await result.json()
      console.log(res)
      if (res.status === 200) {
        setStep(1)
      } else {
        alert(res.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const format_text = (text: string | undefined) => {
    text = text || ''
    return [{ type: 'text', text: { content: text } }]
  }

  const format_properties = (props: FormValues) => {
    console.log(props.zip_code)
    return {
      Name: {
        type: 'title',
        title: format_text(props.name),
      },
      Kana: {
        type: 'rich_text',
        rich_text: format_text(props.kana),
      },
      ZipCode: {
        type: 'number',
        number: Number(props.zip_code) || 1234567,
      },
      State: {
        type: 'rich_text',
        rich_text: format_text(props.state),
      },
      City: {
        type: 'rich_text',
        rich_text: format_text(props.city),
      },
      Address: {
        type: 'rich_text',
        rich_text: format_text(props.address),
      },
      Building: {
        type: 'rich_text',
        rich_text: format_text(props.building),
      },
      Phone: {
        type: 'phone_number',
        phone_number: props.phone || '09012345678',
      },
      Mail: {
        type: 'email',
        email: props.email || 'test@test.com',
      },
      Allergies: {
        type: 'rich_text',
        rich_text: format_text(props.allergies),
      },
      Message: {
        type: 'rich_text',
        rich_text: format_text(props.message),
      },
    }
  }

  return (
    <Stack
      component="form"
      // onSubmit={handleSubmit(sendForm)}
      alignItems="center"
      // sx={{ background: '#FFF' }}
      // width={{ xs: 'calc(100% - 32px)', sm: '450px' }}
      p={{ xs: 2, sm: 5 }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        お名前を入力してください
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: '名前(漢字)を記述してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="お名前"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />
        )}
      />

      <Controller
        name="kana"
        control={control}
        rules={{ required: '名前(かな)を記述してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="かな"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.kana}
            helperText={errors.kana && errors.kana.message}
          />
        )}
      />

      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        住所を入力してください
      </Typography>

      <Controller
        name="zip_code"
        control={control}
        rules={{ required: '郵便番号を入力してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="郵便番号"
            type="number"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.zip_code}
            helperText={errors.zip_code && errors.zip_code.message}
          />
        )}
      />

      <Controller
        name="state"
        control={control}
        rules={{ required: '都道府県を記入してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="都道府県"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.state}
            helperText={errors.state && errors.state.message}
          />
        )}
      />

      <Controller
        name="city"
        control={control}
        rules={{ required: '市区町村を記入してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="市区町村"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.city}
            helperText={errors.city && errors.city.message}
          />
        )}
      />

      <Controller
        name="address"
        control={control}
        rules={{ required: '住所の続きを記入してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="住所"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.address}
            helperText={errors.address && errors.address.message}
          />
        )}
      />

      <Controller
        name="building"
        control={control}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="建物"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
          />
        )}
      />

      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        連作先を入力してください
      </Typography>

      <Controller
        name="phone"
        control={control}
        rules={{ required: '電話番号を記入してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="電話番号"
            type="phone"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.phone}
            helperText={errors.phone && errors.phone.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: 'メールアドレスを記入してください。' }}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="メールアドレス"
            type="email"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
        )}
      />

      <Typography variant="h6" sx={{ fontWeight: 700, color: '#504C74' }}>
        任意で入力してください
      </Typography>
      <Controller
        name="allergies"
        control={control}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="アレルギー"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="メッセージ"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<EmailIcon />}
          />
        )}
      />

      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit(sendForm)}
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
