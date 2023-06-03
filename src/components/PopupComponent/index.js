import {RiCloseLine} from 'react-icons/ri'

import {PopupContainer, CloseButton, PopupImage} from './styledComponents'

const PopupComponent = props => {
  const {status} = props

  return (
    <PopupContainer>
      <CloseButton
        type="button"
        onClick={() => {
          status()
        }}
        className="close-icon"
      >
        <RiCloseLine />
      </CloseButton>

      <PopupImage
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
        alt="rules"
      />
    </PopupContainer>
  )
}

export default PopupComponent
