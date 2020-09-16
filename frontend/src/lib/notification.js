import { notify } from 'react-notify-toast'

const popupStyles = { background: '#e33434', text: '#fab1be' }

export const popupNotification = message => {
  notify.show(message, 'custom', 3000, popupStyles)
}
