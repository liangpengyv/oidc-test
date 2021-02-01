const TOKEN_KEY = 'token'

const utility = {
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token)
  },
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY)
      ? localStorage.getItem(TOKEN_KEY)
      : ''
  },
}

export default utility
