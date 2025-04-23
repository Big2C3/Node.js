import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user; // assegna user alla richiesta
    next();
  })(req, res, next);
};
