import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const isLogin = () => {
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      isLogin()
    }
    else {
      setLoading(false);
    }
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
