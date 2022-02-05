import { NextFunction, Request, Response } from "express"
import { ErrorResponse } from "@utils/errorRespnse";
import { Error as MongooseError, } from "mongoose";
import { MongoError } from 'mongodb';

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  let error = { ...err };

  error.message = err.message;

  console.log("error ", err);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  if ((err as MongoError).code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  if (err instanceof MongooseError.ValidationError) {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new ErrorResponse(message, 400);
  }

  res.status(statusCode)
    .json({
      message: err.message,
      statusCode,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export { notFound, errorHandler }