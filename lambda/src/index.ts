import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import express from "express"
import cors from 'cors'
import createToken from './services/createToken'
import postMeeting from './services/postMeeting'
import { Meetings } from './types/response'

const corsOptions = {
  origin: 'https://zoom-keeper-qg5ku94i5.vercel.app',
}

const app = express();

app.use(cors(corsOptions))
app.get('/', async (req, res) => {
  const token = createToken()
  const result = await postMeeting(token)
  const responseJson: Meetings = await result.json()

  res.send(responseJson)
})

app.use(awsServerlessExpressMiddleware.eventContext())
module.exports = app
