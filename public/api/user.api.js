import axios from 'axios'

export const getUserRequest = async () => await axios.get("https://pwa-final-backend-production.up.railway.app/users")
