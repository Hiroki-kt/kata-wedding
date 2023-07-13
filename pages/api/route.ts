// import { NextResponse } from 'next/server'

export default async function POST() {
  const url = `https://api.notion.com/v1/pages/`
  const body = {
    parent: { database_id: 'e26e5645b5a94279b7539f12f6c074a9' },
    properties: {
      Name: {
        type: 'title',
        title: [{ type: 'text', text: { content: '片山 aa' } }],
      },
      Kana: {
        type: 'rich_text',
        rich_text: [{ type: 'text', text: { content: 'カタヤマ ナオ' } }],
      },
      ZipCode: {
        type: 'number',
        number: 8190002,
      },
    },
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  console.log(data)
  return data
  // return NextResponse.json(data)
}
