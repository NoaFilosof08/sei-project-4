import { notify } from 'react-notify-toast'

const popupStyles = { background: '#ffa200', text: '#35a2f0' }

export const popupNotification = message => {
  notify.show(message, 'custom', 3000, popupStyles)
}
