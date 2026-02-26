import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { UserRole } from '../../context/AuthContext';

const DRAWER_WIDTH = 280;

interface MainLayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, userRole }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        background: theme.palette.background.default,
      }}
    >
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} userRole={userRole} />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          ml: isMobile ? 0 : `${DRAWER_WIDTH}px`,
          width: isMobile ? '100%' : `calc(100% - ${DRAWER_WIDTH}px)`,
        }}
      >
        {/* Header */}
        <Header onMenuClick={handleMenuClick} isSidebarOpen={sidebarOpen} userRole={userRole} />

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            mt: '64px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
