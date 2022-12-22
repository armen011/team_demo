import { FC } from "react";
import Main from "pages/Main";
import Login from "pages/Login";
import Registration from "pages/Registration";
import Error from "pages/Error";
import Messages from "pages/Messages";
import Profile from "pages/Profile";
import EachUserProfile from "pages/EachUserProfile";
import Story from "pages/Story";
import Loading from "components/Loading";
import ProfileSaved from "pages/Profile/ProfileSaved";
import Settings from "pages/Settings";

export enum RoutesEnum {
  MAIN = "/",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  ERROR = "error_page",
  PROFILE = "/profile",
  MESSAGES = "/messages",
  EACH_USER_PROFILE = "/users/:userId",
  MESSAGES_WITH_CHAT_ID = "/messages/:chatId",
  STORIES = "/stories/:storyId",
  LOADING = "/loading",
  SAVED = "/profile/saved",
  SETTINGS = "/settings"
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
  {
    path: RoutesEnum.MESSAGES_WITH_CHAT_ID,
    type: "private",
    Component: Messages,
  },
  {
    path: RoutesEnum.EACH_USER_PROFILE,
    type: "private",
    Component: EachUserProfile
  },
  {
    path: RoutesEnum.STORIES,
    type: "private",
    Component: Story
  },
  {
    path: RoutesEnum.LOADING,
    type: "private",
    Component: Loading
  },
  {
    path: RoutesEnum.SAVED,
    type: "private",
    Component: ProfileSaved,
  },
  {
    path: RoutesEnum.SETTINGS,
    type: "private",
    Component: Settings,
  }
];
