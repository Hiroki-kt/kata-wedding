const EventsInfo = () => {
  return (
    <div className="w-full bg-gray-100 border-b-4">
      <div className="w-[80%] m-auto pt-[100px] pb-[100px]">
        {/* Title */}
        <div className="pt-[100px]">
          <h1 className="text-center text-4xl text-black">Events</h1>
        </div>
        {/* Contents1 */}
        <div className="mt-[80px] flex">
          {/*  */}
          <div className="w-1/2 text-center">
            <h3 className="text-2xl">挙式</h3>
            <p>2022年1月1日</p>
            <p>集合時間 16:00</p>
            <p>開始時間 16:30</p>
          </div>
          {/*  */}
          <div className="w-1/2 text-center">
            <h3 className="text-2xl">披露宴</h3>
            <p>2022年1月1日</p>
            <p>開始時間 18:00</p>
            <p>終了時間 20:00</p>
          </div>
        </div>
        {/* Contents2 */}
        <div className="mt-[80px] text-center">
          <p className="text-2xl text-black">アンジュールハウス</p>
          <p>
            〒000-0000
            <br />
            東京都〇
          </p>
          <div className="w-[80%] h-[500px] m-auto mt-[50px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.6985306899055!2d130.77509461172983!3d32.853232879976275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f0135eb22fd5%3A0x5d8064501baa7a39!2z44Ki44Oz44K444Ol44O844Or44OP44Km44K5!5e0!3m2!1sja!2sjp!4v1687540993790!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsInfo
