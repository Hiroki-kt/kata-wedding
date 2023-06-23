const Message = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="w-[80%] m-auto pt-[100px] pb-[100px]">
        {/* Title */}
        <div className="pt-[100px]">
          <h1 className="text-center text-4xl text-black">Message</h1>
        </div>
        {/* Contents1 */}
        <div className="mt-[80px]">
          <p className="text-center text-2xl text-black">
            皆様いかがお過ごしでしょうか <br />
            このたび　結婚式を執り行うこととなりました <br />
            日頃お世話になっておりますみなさまに <br />
            私どもの門出をお見守りいただきたく　ささやかながら小宴を催したく存じます{' '}
            <br />
            ご多用中　誠に恐縮ではございますが <br />
            ぜひご出席いただきたくご案内申し上げます <br />
          </p>
        </div>
        {/* Contents2 */}
        <div className="mt-[80px] flex">
          {/*  */}
          <div className="w-1/2">
            <div>
              <img src="" alt="" />
            </div>
            <h2 className="text-center text-2xl text-black">Hiroki</h2>
            <ul className="w-[70%] m-auto">
              <li>1994年1月1日生まれ</li>
              <li>東京都出身</li>
              <li>趣味：ゲーム</li>
              <li>結婚式で皆さんにお会いできるのを楽しみにまっています。</li>
            </ul>
          </div>
          {/*  */}
          <div className="w-1/2">
            <div>
              <img src="" alt="" />
            </div>
            <h2 className="text-center text-2xl text-black">Nao</h2>
            <ul className="w-[70%] m-auto">
              <li>1994年1月1日生まれ</li>
              <li>東京都出身</li>
              <li>趣味：ゲーム</li>
              <li>結婚式で皆さんにお会いできるのを楽しみにまっています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
