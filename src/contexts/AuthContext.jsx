import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken) {
      fetchAuthUser();
    }
  }, []);

  // if login successful >> เก็บ token, authen เป็น true
  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
    // send login ไปหลังบ้าน >> set token ที่ Browser >> เอา token มา decode แล้ว update state
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const updateProfile = (data) => {
    setAuthenticatedUser({ ...authenticatedUser, ...data });
  };

  return (
    <AuthContext.Provider
      value={{ login, authenticatedUser, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
