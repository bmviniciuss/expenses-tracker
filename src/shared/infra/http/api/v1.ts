import { FastifyInstance, FastifyPluginAsync } from 'fastify'

export function makeV1Routes (): FastifyPluginAsync {
  return async (fastify: FastifyInstance) => {
    fastify.route({
      method: 'GET',
      url: '/health',
      handler: (_, res) => {
        res.code(200).send({ message: 'Ok!' })
      }
    })
  }
}
