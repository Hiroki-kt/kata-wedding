import React from 'react'
import { useState } from 'react'
import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  console.log('MyTimer')
  console.log(expiryTimestamp)
  // var timer = useTimer({ expiryTimestamp })
  // console.log(timer)
  // const {
  //   seconds,
  //   minutes,
  //   hours,
  //   days,
  //   isRunning,
  //   start,
  //   pause,
  //   resume,
  //   restart,
  // } = useTimer({
  //   expiryTimestamp,
  //   onExpire: () => console.warn('onExpire called'),
  // })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      {/* <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date()
          time.setSeconds(time.getSeconds() + 300)
          restart(time)
        }}
      >
        Restart
      </button> */}
    </div>
  )
}

const CountDown = () => {
  const time = new Date(2023, 10 - 1, 7, 16, 30, 0, 0)
  console.log(time)
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="w-[80%] m-auto pt-[100px] pb-[100px]">
        {/* Title */}
        <div className="pt-[100px]">
          <h1 className="text-center text-4xl text-black">CountDown</h1>
        </div>
        {/* Cpmtemts */}
        <div className="mt-[80px]">
          <p className="text-center text-2xl text-black">To 2023/01/01</p>
          <MyTimer expiryTimestamp={time} />
        </div>
      </div>
    </div>
  )
}

export default CountDown
