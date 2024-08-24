import { useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (phone: string, password: string) => {
    // 로그인 API 요청 로직
    setIsLoggedIn(true);
  };

  const logout = () => {
    // 로그아웃 로직
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
