import * as jwt from 'jsonwebtoken'
import { zoomConfig } from './token'

const createToken = () => {
  const keyExp = (new Date()).getTime() + 5000
  const payload = {
    iss: zoomConfig.apiKey,
    exp: keyExp
  }
  const token = jwt.sign(payload, zoomConfig.apiSecretKay)

  return token
}

export default createToken
