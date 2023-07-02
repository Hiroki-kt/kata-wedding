class HeroFaceImageProps {
  heroFace?: string
  type?: string
  name?: string
}

const HeroFaceImage = (props: HeroFaceImageProps) => {
  const color = props.type === 'Groom' ? 'text-blue-500' : 'text-pink-500'
  return (
    <div className="w-[80%] flex m-auto">
      <div className="w-1/2">
        <img src={props.heroFace} className="w-full h-full object-contain" />
      </div>
      <div className="w-1/2 relative flex justify-center items-center">
        <h1
          className={`absolute text-[60px] ${color} text-right right-0 top-0 font-extrabold`}
        >
          {props.type}
        </h1>
        <h2 className="text-[32px] leading-loose pt-[30px] font-extrabold">
          {props.name}
        </h2>
      </div>
    </div>
  )
}

export default HeroFaceImage
