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

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import EmailIcon from '@mui/icons-material/Email'
import PublicIcon from '@mui/icons-material/Public'
import PlaceIcon from '@mui/icons-material/Place'
import PinDropIcon from '@mui/icons-material/PinDrop'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import NoMealsIcon from '@mui/icons-material/NoMeals'
import ChatIcon from '@mui/icons-material/Chat'

import { useForm, Controller } from 'react-hook-form'
import { FC, useEffect, useState } from 'react'
import DefaultFormInput from './DefaultFormInput'
import FormToggleButton from '@/FormToggleButton'
import FullScreenDialog from '@/FormCompleteDialog'

type Props = {
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
}

interface FormValues {
  attend: boolean
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
  dislike: string
  message: string
}

const InvitationForm: FC<Props> = ({ setStep }) => {
  // const router = useRouter()
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const { tk } = router.query
  // }, [router.isReady])
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      attend: undefined,
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
      dislike: '',
      message: '',
    },
  })

  const sendForm = async (data: FormValues) => {
    // const check = await auth.signUp(data.email, data.password)
    console.log(data)

    const res = await fetch('/api/route/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    console.log(res)

    const check = { success: true, message: 'success' }
    if (check?.success) {
      setOpen(true)
    } else {
      alert(check?.message)
    }
  }

  const handleDialogClose = () => {
    setOpen(false)
  }

  const updateZipcodeSub = () => {
    const zip_code = getValues('zip_code')
    console.log(zip_code)
    const zipCodeString = zip_code?.toString()
    if (zipCodeString?.length === 7) {
      try {
        const url =
          'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zip_code
        console.log(url)
        fetch(url, { method: 'GET' })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setValue('state', data.results[0].address1)
            setValue('city', data.results[0].address2)
            setValue('address', data.results[0].address3)
          })
          .catch((err) => console.log(err))
      } catch {
        alert('住所の取得に失敗しました。')
      }
    } else {
      console.log('no zip code')
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
      <FullScreenDialog
        open={open}
        setOpen={setOpen}
        attend={getValues('attend')}
      />
      <Controller
        name="attend"
        control={control}
        // rules={{ required: '出欠を選択してください。' }}
        render={({ field }) => (
          <FormToggleButton
            state={field.value}
            onChange={field.onChange}
            // error={!!errors.attend}
            // helperText={errors.attend && errors.attend.message}
          />
        )}
      />

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
            startAdornment={<EmojiEmotionsIcon />}
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
            startAdornment={<EmojiEmotionsIcon />}
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
            onChange={(e) => {
              field.onChange(e)
              updateZipcodeSub()
            }}
            startAdornment={<PlaceIcon />}
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
            startAdornment={<PublicIcon />}
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
            startAdornment={<PublicIcon />}
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
            startAdornment={<PinDropIcon />}
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
            startAdornment={<HomeIcon />}
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
            startAdornment={<PhoneIcon />}
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
            startAdornment={<NoMealsIcon />}
          />
        )}
      />

      <Controller
        name="dislike"
        control={control}
        render={({ field }) => (
          <DefaultFormInput
            placeholder="苦手な食材"
            type="text"
            value={field.value}
            onChange={field.onChange}
            startAdornment={<NoMealsIcon />}
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
            startAdornment={<ChatIcon />}
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
