import SectionTitle from '@/SectionTitle'
import CommentWithIcon from '@/CommentWirthIcon'
import { Stack, Button } from '@mui/material'

const PVSP = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[80%] m-auto py-5">
        {/* Title */}
        <SectionTitle icon="faClipboardUser" name="RSVP" />
        {/* Contents1 */}
        <div className="mt-3">
          <CommentWithIcon
            type="groom"
            comment="お手数ではありますが、返信は8/31までにお願いいたします。"
            img="/hiroki-1.png"
          />
          <Button variant="contained">サンプル</Button>
        </div>
      </div>
    </div>
  )
}

export default PVSP
