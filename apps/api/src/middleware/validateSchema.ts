import { NextFunction, Request, RequestHandler, Response } from "express"
import { RequestValidation } from "zod-express-middleware"

const validateSchema = <TParams = any, TQuery = any, TBody = any>(
  schemas: RequestValidation<TParams, TQuery, TBody>
): RequestHandler => {
  return (req, res, next) => {
    // TODO: accept array in query params
    if (schemas.query) {
      const parsedQuery = Object.keys(req.query).map((k) =>
        JSON.parse(req.query[k] as string)
      )
      const data = schemas.query.safeParse(parsedQuery)
      console.log("parsed", data)
    }
    return next()
  }
}
export default validateSchema
