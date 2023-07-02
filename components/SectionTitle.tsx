import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faMessage } from '@fortawesome/free-solid-svg-icons'

class SectionTitleProps {
  icon?: string
  color?: string
  name?: string
}

const SectionTitle = (props: SectionTitleProps) => {
  let titleIcon

  switch (props.icon) {
    case 'faGamepad':
      titleIcon = faGamepad
    case 'faMessage':
      titleIcon = faMessage
    default:
      titleIcon = faMessage

      return (
        <div className="pt-[100px] flex flex-col justify-center">
          <FontAwesomeIcon
            icon={titleIcon}
            className="h-[60px] text-yellow-500"
          />
          <h1 className="text-center text-[48px] text-black font-extrabold">
            {props.name}
          </h1>
        </div>
      )
  }
}
export default SectionTitle
