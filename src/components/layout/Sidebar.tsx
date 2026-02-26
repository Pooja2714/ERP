import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  CheckCircle as AttendanceIcon,
  Grade as GradeIcon,
  Assessment as ReportIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserRole } from '../../context/AuthContext';

const DRAWER_WIDTH = 280;

const getMenuItems = (role: UserRole) => {
  if (role === 'student') {
    return [
      { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
      { label: 'My Courses', icon: <SchoolIcon />, path: '/my-courses' },
      { label: 'My Grades', icon: <GradeIcon />, path: '/grades' },
      { label: 'Teachers', icon: <PersonIcon />, path: '/teachers' },
      { label: 'Chat Assistant', icon: <ChatIcon />, path: '/chat', highlighted: true },
    ];
  } else if (role === 'teacher') {
    return [
      { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
      { label: 'Students', icon: <SchoolIcon />, path: '/students' },
      { label: 'Attendance', icon: <AttendanceIcon />, path: '/attendance' },
      { label: 'Grades', icon: <GradeIcon />, path: '/grades' },
      { label: 'Reports', icon: <ReportIcon />, path: '/reports' },
      { label: 'Chat Assistant', icon: <ChatIcon />, path: '/chat', highlighted: true },
    ];
  }

  return [];
};

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  userRole: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({ open: _open, onClose, userRole }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.background.paper,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.25rem',
            }}
          >
            E
          </Box>
          <Box
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            EduERP
          </Box>
        </Box>
        {isMobile && (
          <IconButton
            size="small"
            onClick={onClose}
            sx={{
              color: theme.palette.text.primary,
              '&:hover': { background: theme.palette.action.hover },
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Menu Items */}
      <List sx={{ flex: 1, py: 2, px: 1, overflow: 'auto' }}>
        <AnimatePresence>
          {getMenuItems(userRole).map((item, index) => {
            const isActive = location.pathname === item.path;
            const isHighlighted = item.highlighted;

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <ListItem
                  button
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mb: 0.5,
                    borderRadius: 1.5,
                    mx: 0,
                    px: 1.5,
                    py: 1.2,
                    color: isActive ? (isHighlighted ? theme.palette.secondary.main : theme.palette.primary.main) : theme.palette.text.secondary,
                    background: isActive
                      ? isHighlighted
                        ? `${theme.palette.secondary.main}15`
                        : `${theme.palette.primary.main}10`
                      : 'transparent',
                    '&:hover': {
                      background: isHighlighted
                        ? `${theme.palette.secondary.main}10`
                        : `${theme.palette.primary.main}08`,
                      color: isHighlighted ? theme.palette.secondary.main : theme.palette.primary.main,
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                  {isActive && isHighlighted && (
                    <motion.div
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        background: theme.palette.secondary.main,
                        borderRadius: '0 8px 8px 0',
                      }}
                    />
                  )}
                </ListItem>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </List>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          fontSize: '0.75rem',
          color: theme.palette.text.secondary,
          textAlign: 'center',
        }}
      >
        © 2025 EduERP Assistant
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={_open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};
