import { Router } from 'express';

export interface iRoutes {
  path?: string;
  router: Router;
}
