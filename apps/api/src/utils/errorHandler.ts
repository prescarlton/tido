import { Response } from 'express'

const errorHandler = (
  res: Response,
  err: unknown,
  defaultMessage = 'Internal Server Error',
  status = 500
) => {
  // eslint-disable-next-line no-console
  console.log(err)
  // const message = err instanceof Error ? err.message : err
  // console.error(chalk.red(message))
  if (!res.headersSent) {
    return res.status(status).json({ message: defaultMessage })
  }
}

export default errorHandler
