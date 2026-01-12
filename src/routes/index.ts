import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { GenreRouter } from "../modules/genre/genre.route";

interface IRoute {
  path: string;
  router: Router;
}

const router = Router();

const routers: IRoute[] = [
  {
    path: "/user",
    router: UserRouter,
  },
  {
    path: "/auth",
    router: AuthRouter,
  },
  {
    path: "/genre",
    router: GenreRouter,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
