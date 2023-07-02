import SectionTitle from '@/SectionTitle'
import IntroPerson from '@/IntroPerson'

const Message = () => {
  return (
    <div className="w-full bg-gray-100 border-b-4">
      <div className="w-[80%] m-auto pt-[50px] pb-[50px]">
        {/* Title */}
        <SectionTitle icon="Mail" color="yellow" name="Message" />
        {/* Contents1 */}
        <div className="mt-[30px]">
          <p className="text-[18px] text-black">
            皆様いかがお過ごしでしょうか?
            <br />
            <br />
            このたび結婚式を執り行うこととなりました <br />
            日頃お世話になっておりますみなさまに
            私どもの門出をお見守りいただきたくささやかながら小宴を催したく存じます
            <br />
            <br />
            ご多用中誠に恐縮ではございますが
            ぜひご出席いただきたくご案内申し上げます
          </p>
        </div>
        {/* Contents2 */}
        <div className="mt-[40px] flex flex-col">
          {/*  */}
          <IntroPerson type="groom" name="Hiroki" />
          {/*  */}
          <IntroPerson type="bride" name="Nao" />
        </div>
      </div>
    </div>
  )
}

export default Message
