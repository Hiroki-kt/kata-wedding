import HeroFaceImage from '@/HeroFaceImage'

const Hero = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center">
      <div className="w-full">
        <div className="md:flex md:w-4/5 md:m-auto md:space-x-2">
          <HeroFaceImage heroFace="/hiroki-1.png" name="Hiroki" type="Groom" />
          <h1 className="text-[60px] text-center font-extrabold">&</h1>
          <HeroFaceImage heroFace="/nao-1.png" name="Nao" type="Bride" />
        </div>
        <h1 className="text-[60px] text-black text-center font-extrabold">
          Wedding
          <br className="md:hidden" />
          Invitation
        </h1>
      </div>
    </div>
  )
}

export default Hero
