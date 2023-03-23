import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import apiRouter from './routes/ApiRouter.js'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static(path.join(__dirname, 'public')))

//form and fetch requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', apiRouter)
app.use((req, res) => res.status(404).send())

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
