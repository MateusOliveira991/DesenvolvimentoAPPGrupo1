
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (email) => {
    try {

      const response = await axios.get(`https://6513726b8e505cebc2e9db94.mockapi.io/clientes?email=${email}`);

      setUser({user: {email}, role: "admin"});
      setIsAuthenticated(true);
    } catch (error) {

      console.error('Erro ao autenticar:', error);
    }
  };

  const logout = () => {

    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider
