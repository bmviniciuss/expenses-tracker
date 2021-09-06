import fastify from 'fastify'

import env from '../../config/env'
import { makeV1Routes } from './api/v1'

const server = fastify()

server.register(makeV1Routes(), { prefix: '/api/v1' })

server.listen(env.PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
