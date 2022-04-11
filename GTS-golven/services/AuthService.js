import FetchService from "./FetchService";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const AuthService = {
  Login: async function (email, password) {
    const response = await fetch(
      "http://morenoblyat.sjekmaster.nl:6737/api/auth/token/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: `{"username": "${email}", "password": "${password}"}`,
      }
    );

    const status = response.status;
    const json = await response.json();
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

    const response = await fetch(
      "http://morenoblyat.sjekmaster.nl:6737/api/auth/token/refresh/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: `{"refresh": "${refreshToken}"}`,
      }
    );
    cookies.set("access_token", response.access, "/");
  },

  GetToken: function () {
    const cookies = new Cookies();

    return cookies.get("access_token");
  },

  Logout: function () {
    const cookies = new Cookies();

    cookies.remove("access_token");
    cookies.remove("refresh_token");
  },
};

export default AuthService;
