import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Profile } from "./Pages/Profile/Profile";
import { Files } from "./Components/Profile/Files";
import { Subsription } from "./Components/Profile/Subsription";
import { Statistics } from "./Components/Profile/Statistics";
import { Settings } from "./Components/Profile/Settings";
import { ProfileDetails } from "./Components/Profile/ProfileDetails";

export const AppWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppWrapper />}>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/profile/files" element={<Files />} />
        <Route path="/profile/subscription" element={<Subsription />} />
        <Route path="/profile/statistics" element={<Statistics />} />
        <Route path="/profile/settings" element={<Settings />} />
      </Route>
    </Route>
  )
);
