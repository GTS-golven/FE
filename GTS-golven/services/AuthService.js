import FetchService from "./FetchService";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const AuthService = {
  Login: async function (email, password) {
    const data = `{"username": "${email}", "password": "${password}"}`;
    const response = await FetchService.Post("auth/token/", data);

    const status = response.status;
    const json = response.json();
    const accessToken = json.access;
    const refreshToken = json.refresh;

    const cookies = new Cookies();

    cookies.remove("access_token");
    cookies.remove("refresh_token");

    cookies.set("access_token", accessToken, "/");
    cookies.set("refresh_token", refreshToken, "/");

    return status;
  },

  RefreshAuthToken: async function () {
    const cookies = new Cookies();

    const refreshToken = cookies.get("refresh_token");

    const response = await FetchService.Post(
      "auth/token/refresh/",
      `{"refresh": "${refreshToken}"}`
    );
    cookies.set("access_token", response.access, "/");
  },

  GetToken: function () {
    const cookies = new Cookies();

    return cookies.get("access_token");
  },
};

export default AuthService;
