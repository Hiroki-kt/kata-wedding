import Hero from '@/Hero'
import Message from '@/Message'
import CountDown from '@/CountDown'
import EventsInfo from '@/EventsInfo'
import RVSP from '@/RSVP'

const Top = () => {
  return (
    <div className="w-screen h-screen">
      <Hero></Hero>
      <Message></Message>
      <CountDown></CountDown>
      <EventsInfo></EventsInfo>
      <RVSP></RVSP>
    </div>
  )
}

export default Top
