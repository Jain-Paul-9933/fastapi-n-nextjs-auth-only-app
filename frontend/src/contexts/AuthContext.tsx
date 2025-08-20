'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { api, User, LoginData, RegisterData, TokenResponse } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get<User>('/auth/me');
      setUser(response.data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      localStorage.removeItem('access_token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    const response = await api.post<TokenResponse>('/auth/login', formData);
    localStorage.setItem('access_token', response.data.access_token);
    await fetchUser();
  };

  const register = async (data: RegisterData) => {
    await api.post('/auth/register', data);
    await login({ username: data.username, password: data.password });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};