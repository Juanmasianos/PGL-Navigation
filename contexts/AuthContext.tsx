import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { storage } from '../utils/storage';
import { API_CONFIG } from '../config/api';
import { Alert } from 'react-native';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  welcomeMessage: string | null;
  login: (email: string, pswd: string) => Promise<void>;
  register: (fullname: string, email: string, pswd: string) => Promise<void>;
  logout: () => Promise<void>;
  getWelcomeMessage: () => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const storedToken = await storage.getItem('token');
      const storedUser = await storage.getItem('user');

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (mail: string, pswd: string) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email": mail, "pswd": pswd }),
      });

      // Manejo de errores según image_e78b59.png
      if (response.status === 400) {
        throw new Error('Petición no válida o cuerpo ausente.');
      }
      if (response.status === 401) {
        throw new Error('Email o contraseña incorrectos.');
      }
      if (!response.ok) {
        throw new Error('Error inesperado en el inicio de sesión.');
      }

      const data = await response.json();
      const { userId: userId, email: email, token: token } = data.object;

      await storage.setItem('token', token);
      await storage.setItem('user', JSON.stringify({ id: userId, email, name: '' }));
      setToken(token);
      setUser({ id: userId, email, name: '' });
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Re-lanzamos para que la UI lo capture
    }
  };

  const register = async (fullname: string, email: string, pswd: string) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.REGISTER}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname,
            email,
            pswd
          })
        });

      // Manejo de errores según image_e78b59.png
      if (response.status === 400) {
        Alert.alert('Datos de registro incompletos o inválidos.');
      }
      if (response.status === 409) {
        throw new Error('El email ya está registrado.');
      }
      if (!response.ok) {
        throw new Error('Error al intentar registrar el usuario.');
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      const { token: newToken, object: userData } = data;

      await storage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const getWelcomeMessage = async (): Promise<string> => {
    try {
      if (!token) throw new Error('No hay sesión activa.');

      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.WELCOME}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Welcome message:', response);
      // Manejo de errores según image_e78e05.png
      if (response.status === 401) {
        // El token ha expirado o no es válido
        await logout(); // Cerramos sesión automáticamente por seguridad
        Alert.alert('Sesión expirada o token no encontrado.');
      }

      if (!response.ok) {
        Alert.alert('No se pudo obtener el mensaje de bienvenida.');
      }

      const data = await response.json();
      console.log('Welcome message data:', data);
      const message = data.object || data.msg || 'Bienvenido';
      setWelcomeMessage(message);
      return message;
    } catch (error) {
      console.error('Welcome message error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await storage.removeItem('token');
      await storage.removeItem('user');
      setToken(null);
      setUser(null);
      setWelcomeMessage(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    welcomeMessage,
    login,
    register,
    logout,
    getWelcomeMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
