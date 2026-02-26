import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { createAppTheme } from './theme/theme';
import { MainLayout } from './components/layout/MainLayout';
import { ChatPage } from './components/chat/ChatPage';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { Teachers } from './pages/Teachers';
import { Attendance } from './pages/Attendance';
import { Grades } from './pages/Grades';
import { Reports } from './pages/Reports';
import { LoginPage } from './pages/LoginPage';

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();

  const handleLoginSuccess = () => {
    // Navigation will be handled by React Router
  };

  if (!user) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <MuiThemeProvider theme={createAppTheme(isDarkMode)}>
      <CssBaseline />
      <MainLayout userRole={user.role}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {user.role === 'teacher' && (
            <>
              <Route path="/students" element={<Students />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/grades" element={<Grades />} />
            </>
          )}
          {user.role === 'student' && (
            <>
              <Route path="/my-courses" element={<Dashboard />} />
              <Route path="/grades" element={<Grades />} />
            </>
          )}
          <Route path="/reports" element={<Reports />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </MainLayout>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <ChatProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </ChatProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
