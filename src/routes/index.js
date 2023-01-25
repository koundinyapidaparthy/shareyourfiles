import { lazy } from "react";
import UserDetails from "../components/UserDetails";
const AddAndEditDetails = lazy(() => import("../components/AddAndEditDetails"));

export const routes = [
  {
    path: "/",
    Component: UserDetails,
  },
  {
    path: "/updateFile/:fileId",
    Component: AddAndEditDetails,
  },
];
