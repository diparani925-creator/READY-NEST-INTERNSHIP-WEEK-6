import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('[Unhandled Error]:', err.stack || err.message);

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: err.message,
  });
};
