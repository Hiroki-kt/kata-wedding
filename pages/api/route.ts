import { format } from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
class FormProps {
  name?: string
  kana?: string
  zip_code?: number
  state?: string
  city?: string
  address?: string
  building?: string
  phone?: string
  email?: string
  allergies?: string
  message?: string
}

export default async function POST(props: FormProps, res: NextApiResponse) {
  console.log('api/route.ts')
  const url = `https://api.notion.com/v1/pages/`
  const body = {
    parent: { database_id: 'e26e5645b5a94279b7539f12f6c074a9' },
    properties: format_properties(props),
  }

  // const res = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
  //     'Notion-Version': '2022-06-28',
  //   },
  //   body: JSON.stringify(body),
  // })

  // const data = await res.json()
  // console.log(data)
  // return data
  try {
    console.log('ok')
    return res.status(200).json({ message: '成功' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: '失敗' })
  }
}

const format_text = (text: string | undefined) => {
  text = text || ''
  return [{ type: 'text', text: { content: text } }]
}

const format_properties = (props: FormProps) => {
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
      number: props.zip_code,
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
      phone_number: props.phone,
    },
    Mail: {
      type: 'email',
      email: props.email,
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
