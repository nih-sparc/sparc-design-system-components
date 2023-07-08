/**
 * Success notification message object
 * @param {String} message
 * @return {Object}
 */
 export const successMessage = message => {
  return {
    message: message,
    showClose: true,
    iconClass: 'el-icon-circle-check',
    customClass: 'el-message--success',
    duration: 5000
  }
}
/**
 * Failure notification message object
 * @param {String} message
 * @return {Object}
 */
export const failMessage = message => {
  return {
    message: message,
    showClose: true,
    iconClass: 'el-icon-circle-close',
    customClass: 'el-message--error',
    duration: 5000
  }
}

/**
 * Information notification message object
 * @param {String} message
 * @return {Object}
 */
export const infoMessage = message => {
  return {
    message: message,
    showClose: true,
    iconClass: 'about-icon',
    customClass: 'el-message--info',
    duration: 5000
  }
}

/**
* Notification message object
* @param {String} message
* @return {Object}
*/
export const informationNotification = (title, message) => {
 return {
   title: title,
   message: message,
   showClose: true,
   iconClass: 'hide-icon',
   duration: 5000
 }
}

/**
* Notification message object with icon
* @param {String} message
* @return {Object}
*/
export const iconInformationNotification = (title, message) => {
 return {
   title: title,
   message: message,
   showClose: true,
   iconClass: 'about-icon',
   customClass: '',
   duration: 5000
 }
}
