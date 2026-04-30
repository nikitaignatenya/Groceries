import { Router, express } from 'express';
export interface iRoutes {
  path?: string;
  router: Router;
}

export interface iAppRoute {
  app: express.Application;
  tokenRoute: iRoutes;
  userRoute: iRoutes;
}
