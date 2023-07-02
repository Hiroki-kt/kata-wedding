class CommentWithIconProps {
  type?: string
  comment?: string
  img?: string
}

const CommentWithIcon = (props: CommentWithIconProps) => {
  const bgColor = props.type === 'groom' ? 'bg-blue-500' : 'bg-pink-500'
  return (
    <div className="w-full flex my-8">
      <div className={`w-2/3 ${bgColor}`}>
        <p className="text-[18px] text-black">{props.comment}</p>
      </div>
      <div className="w-1/3">
        <img src={props.img} className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default CommentWithIcon
