class HeroFaceImageProps {
  heroFace?: string
  type?: string
  name?: string
}

const HeroFaceImage = (props: HeroFaceImageProps) => {
  const color = props.type === 'groom' ? 'blue' : 'pink'
  return (
    <div className="w-[80%] flex m-auto">
      <div className="w-1/2">
        <img src={props.heroFace} className="w-full h-full object-contain" />
      </div>
      <div className="">
        <h1 className={`text-[60px] text-${color}-500 text-center`}>
          {props.type}
        </h1>
        <h2 className="text-[32px]">{props.name}</h2>
      </div>
    </div>
  )
}

export default HeroFaceImage
