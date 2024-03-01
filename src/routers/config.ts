import { ComponentType } from "react";
import Main from "../pages/main/main";
import Process from "../pages/process/process";
import NotFound from "../pages/not-found/notFound";
import Blog from "../pages/blog/blog";

interface IRoute {
  path: string;
  Component: ComponentType;
}

export const routes: IRoute[] = [
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/process",
    Component: Process,
  },
  {
    path: "/blog/:blogName",
    Component: Blog,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
