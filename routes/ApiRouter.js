import { Router } from 'express'

const apiRouter = Router()

apiRouter.get('/', (req, res) => res.send('API UP'))

apiRouter.post('/post', (req, res) => {
  res.json({
    body: req.body
  })
})

export default apiRouter
