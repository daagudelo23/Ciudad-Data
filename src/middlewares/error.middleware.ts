import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const status = 500;
  const message = err instanceof Error ? err.message : 'Error interno del servidor';
  res.status(status).json({ error: message });
}
