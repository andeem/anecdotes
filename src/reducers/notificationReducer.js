const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.content
  case 'DELETE':
    return ''
  default:
    return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    content
  }
}

export const deleteNotification = (content) => {
  return {
    type: 'DELETE',
    content
  }
}

export default notificationReducer