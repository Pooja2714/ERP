import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme as useAppTheme } from '../../context/ThemeContext';
import { useAuth, UserRole } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 280;

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen?: boolean;
  userRole: UserRole;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen: _isSidebarOpen = false, userRole }) => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useAppTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    logout();
    navigate('/');
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          ml: isMobile ? 0 : `${DRAWER_WIDTH}px`,
          width: isMobile ? '100%' : `calc(100% - ${DRAWER_WIDTH}px)`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onMenuClick}
                sx={{
                  '&:hover': {
                    background: theme.palette.action.hover,
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                EduERP
              </Box>
            </motion.div>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    background: theme.palette.action.hover,
                  },
                  transition: 'all 0.3s',
                }}
              >
                {isDarkMode ? <LightIcon /> : <DarkIcon />}
              </IconButton>
            </motion.div>

            {/* User Info and Profile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {!isMobile && (
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    {user?.name || 'User'}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      textTransform: 'capitalize',
                      color: userRole === 'teacher' ? theme.palette.secondary.main : theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  >
                    {userRole}
                  </Typography>
                </Box>
              )}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconButton
                  onClick={handleProfileMenuOpen}
                  sx={{
                    p: 0,
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: userRole === 'teacher'
                        ? `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`
                        : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: userRole === 'teacher'
                          ? `0 4px 12px ${theme.palette.secondary.main}40`
                          : `0 4px 12px ${theme.palette.primary.main}40`,
                      },
                    }}
                  >
                    {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                  </Avatar>
                </IconButton>
              </motion.div>
            </Box>

            {/* Profile Menu Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 200,
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  },
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleProfileMenuClose();
                  // Handle settings
                }}
                sx={{
                  gap: 1.5,
                  '&:hover': {
                    background: theme.palette.action.hover,
                  },
                }}
              >
                <SettingsIcon sx={{ fontSize: '1.25rem' }} />
                Settings
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  gap: 1.5,
                  color: theme.palette.error.main,
                  '&:hover': {
                    background: `${theme.palette.error.main}15`,
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: '1.25rem' }} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};
