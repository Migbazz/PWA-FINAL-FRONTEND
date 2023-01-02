import axios from 'axios'

export const getUserRequest = async () => await axios.get("pwa-final-backend-production.up.railway.app/users")
