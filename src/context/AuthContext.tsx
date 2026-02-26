import React, { createContext, useState, useCallback } from 'react';

export type UserRole = 'student' | 'teacher' | null;

export interface User {
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = useCallback(async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password || !role) {
          reject(new Error('All fields are required'));
          return;
        }

        if (!email.includes('@')) {
          reject(new Error('Invalid email address'));
          return;
        }

        // Demo credentials for students
        const studentCredentials: Record<string, string> = {
          'john.student@school.com': 'password123',
          'emma.student@school.com': 'password123',
          'michael.student@school.com': 'password123',
        };

        // Demo credentials for teachers
        const teacherCredentials: Record<string, string> = {
          'teacher@school.com': 'password123',
          'mr.smith@school.com': 'password123',
          'mrs.johnson@school.com': 'password123',
        };

        const credentials = role === 'student' ? studentCredentials : teacherCredentials;

        if (credentials[email] === password) {
          const newUser: User = {
            email,
            role,
            name: email.split('@')[0].replace('.', ' ').toUpperCase(),
          };
          localStorage.setItem('user', JSON.stringify(newUser));
          setUser(newUser);
          resolve();
        } else {
          reject(new Error('Invalid email or password for this role'));
        }
      }, 1500);
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
