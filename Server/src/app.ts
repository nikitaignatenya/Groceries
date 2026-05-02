import express from 'express';
import { PORT } from '@config/dotenv.config';
import { iRoutes, iAppRoute } from '@interfaces/router.interface';
import cors from 'cors';
import { errorMiddleware } from '@middlewares/error.middleware';
import cookieParser from 'cookie-parser';
import { sequelize } from '@config/database.config';
import User from '@models/user.model';
import Token from '@models/token.model';

class App {
  public port: number | string;
  public app: express.Application;

  constructor(routes: Array<iAppRoute>) {
    this.port = PORT || 3000;
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.listen();
    this.initializeErrorHandling();
    this.connectToDatabase();
  }

  private async connectToDatabase(): Promise<void> {
    try {
      await sequelize.authenticate();
      await User.sync({ alter: true });
      await Token.sync({ alter: true });
      
      console.log('PostgreSQL connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error);
      process.exit(1);
    }
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Array<iAppRoute>) {
    routes.forEach(route => {
      this.app.use('/api', route.app);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.info(`Success PORT=${this.port}`);
    });
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }
}

export default App;
