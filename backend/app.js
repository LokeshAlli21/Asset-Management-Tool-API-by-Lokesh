import express from 'express'
import { logger } from './middleware/logger.js'
import assetsRoute from './routes/assets.routes.js'
import {
    databaseUrl
} from './env/env.js'
import {neon} from '@neondatabase/serverless'

const app = express()

const sql = neon(databaseUrl);

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

app.use(requestHandler)

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
