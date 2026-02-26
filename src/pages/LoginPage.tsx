import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  useTheme,
  CircularProgress,
  Alert,
  InputAdornment,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Visibility, VisibilityOff, School, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAuth, UserRole } from '../context/AuthContext';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const theme = useTheme();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !password || !userRole) {
      setError('Please fill in all fields and select user type');
      return;
    }

    setLoading(true);

    try {
      await login(email, password, userRole);
      setLoading(false);
      onLoginSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        isolation: 'isolate',
        p: 2,
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `${theme.palette.primary.main}15`,
          top: '-100px',
          right: '-100px',
          zIndex: 0,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `${theme.palette.secondary.main}10`,
          bottom: '-100px',
          left: '-100px',
          zIndex: 0,
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: '420px',
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            background: theme.palette.background.paper,
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                E
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 0.5,
                }}
              >
                EduERP
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Secure Login
              </Typography>
            </Box>
          </motion.div>

          {/* Error Alert */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
                {error}
              </Alert>
            </motion.div>
          )}

          {/* User Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 1.5,
                color: theme.palette.text.primary,
              }}
            >
              Login As
            </Typography>
            <ToggleButtonGroup
              value={userRole}
              exclusive
              onChange={(_, newRole: UserRole) => {
                if (newRole) setUserRole(newRole);
              }}
              fullWidth
              sx={{ mb: 3 }}
            >
              <ToggleButton
                value="student"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '8px 0 0 8px',
                  border: `2px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s',
                  '&.Mui-selected': {
                    background: `${theme.palette.primary.main}15`,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <School sx={{ mr: 1 }} />
                Student
              </ToggleButton>
              <ToggleButton
                value="teacher"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '0 8px 8px 0',
                  border: `2px solid ${theme.palette.divider}`,
                  borderLeft: 'none',
                  transition: 'all 0.3s',
                  '&.Mui-selected': {
                    background: `${theme.palette.secondary.main}15`,
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <Person sx={{ mr: 1 }} />
                Teacher
              </ToggleButton>
            </ToggleButtonGroup>
          </motion.div>

          {/* Demo Credentials Info */}
          {userRole && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert severity="info" sx={{ mb: 3, borderRadius: 2, fontSize: '0.875rem' }}>
                <Typography variant="caption" display="block" sx={{ mb: 0.5, fontWeight: 600 }}>
                  Demo {userRole === 'student' ? 'Student' : 'Teacher'} Credentials:
                </Typography>
                {userRole === 'student' ? (
                  <>
                    <Typography variant="caption" display="block">
                      Email: john.student@school.com
                    </Typography>
                    <Typography variant="caption" display="block">
                      Email: emma.student@school.com
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="caption" display="block">
                      Email: teacher@school.com
                    </Typography>
                    <Typography variant="caption" display="block">
                      Email: mr.smith@school.com
                    </Typography>
                  </>
                )}
                <Typography variant="caption" display="block">
                  Password: password123
                </Typography>
              </Alert>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <TextField
                fullWidth
                type="email"
                label="Email Address"
                placeholder="admin@school.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                variant="outlined"
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    transition: 'all 0.3s',
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="password123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                variant="outlined"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        disabled={loading}
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    transition: 'all 0.3s',
                  },
                }}
              />
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              style={{ marginTop: 24 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover:not(:disabled)': {
                    boxShadow: `0 8px 20px ${theme.palette.primary.main}60`,
                    transform: 'translateY(-2px)',
                  },
                  '&:disabled': {
                    opacity: 0.7,
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} color="inherit" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              sx={{
                color: theme.palette.text.secondary,
                mt: 2,
              }}
            >
              © 2025 EduERP. All rights reserved.
            </Typography>
          </motion.div>
        </Card>
      </motion.div>
    </Box>
  );
};
