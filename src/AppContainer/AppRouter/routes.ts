import { FC } from "react";
import Main from "pages/Main";
import Login from "pages/Login";
import Registration from "pages/Registration";
import Error from "pages/Error";
import Messages from "pages/Messages";
import Profile from "pages/Profile";

export enum RoutesEnum {
  MAIN = "/",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  ERROR = "error_page",
  PROFILE = "/profile",
  MESSAGES = "/messages",
}

export type RouteType = {
  path: RoutesEnum;
  Component: FC;
  type: "public" | "private" | "restricted";
};

export const routes: RouteType[] = [
  {
    path: RoutesEnum.MAIN,
    type: "private",
    Component: Main,
  },
  {
    path: RoutesEnum.LOGIN,
    type: "restricted",
    Component: Login,
  },
  {
    path: RoutesEnum.REGISTRATION,
    type: "restricted",
    Component: Registration,
  },
  {
    path: RoutesEnum.ERROR,
    type: "private",
    Component: Error,
  },
  {
    path: RoutesEnum.PROFILE,
    type: "private",
    Component: Profile,
  },
  {
    path: RoutesEnum.MESSAGES,
    type: "private",
    Component: Messages,
  },
];
