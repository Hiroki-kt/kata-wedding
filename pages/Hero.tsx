import HeroFaceImage from '@/HeroFaceImage'

const Hero = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center border-b-4">
      <div className="w-full">
        <HeroFaceImage
          heroFace="/sample-audrey3.png"
          name="Hiroki"
          type="Groom"
        />
        <HeroFaceImage heroFace="/sample-audrey3.png" name="Nao" type="Bride" />
        <h1 className="text-[60px] text-black text-center">
          Wedding
          <br />
          Invitation
        </h1>
      </div>
    </div>
  )
}

export default Hero
