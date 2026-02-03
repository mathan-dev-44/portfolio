import {
  createBrowserHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const browserHistory = createBrowserHistory();

const router = createRouter({
  routeTree,
  history: browserHistory,
  context: { auth: undefined },
  scrollRestoration: true,
   Wrap: ({ children }) => <>{children}</>,
  basepath: "/",
});

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
