import express from 'express'
import { logger } from './middleware/logger.js'
import assetsRoute from './routes/assets.routes.js'

const app = express()

app.use(express.json())
app.use(logger)

app.use('/api/assets',assetsRoute )

// globle error handler
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message})
})

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})
