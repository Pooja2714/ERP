import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp as TrendingIcon,
  School as StudentsIcon,
  Person as TeachersIcon,
  CheckCircle as AttendanceIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color, index }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 1,
                }}
              >
                {value}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: color,
                  fontWeight: 600,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 1.5,
                background: `${color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                fontSize: '1.75rem',
              }}
            >
              {icon}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Dashboard: React.FC = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <StudentsIcon />,
      title: 'Total Students',
      value: '2,543',
      subtitle: '+145 this month',
      color: theme.palette.primary.main,
    },
    {
      icon: <TeachersIcon />,
      title: 'Total Teachers',
      value: '287',
      subtitle: '+12 this month',
      color: theme.palette.secondary.main,
    },
    {
      icon: <AttendanceIcon />,
      title: 'Attendance Rate',
      value: '94.5%',
      subtitle: '+2.3% from last week',
      color: '#10b981',
    },
    {
      icon: <TrendingIcon />,
      title: 'Average Grade',
      value: '8.2/10',
      subtitle: '+0.4 from last semester',
      color: '#f59e0b',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          overflow: 'auto',
          height: '100%',
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 1,
            }}
          >
            Dashboard
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Welcome back! Here's your school's performance overview.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={stat.title}>
              <StatCard {...stat} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={2}>
          {/* Attendance by Class */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Attendance by Class
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Class 10-A', 'Class 10-B', 'Class 9-A', 'Class 9-B'].map((cls, idx) => (
                      <Box key={cls}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {cls}
                          </Typography>
                          <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                            {95 - idx * 2}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={95 - idx * 2}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            background: theme.palette.divider,
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                              borderRadius: 3,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Recent Activities
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      { title: 'New Student Enrollment', time: '2 hours ago' },
                      { title: 'Teacher Leave Request', time: '5 hours ago' },
                      { title: 'Grade Report Submitted', time: '1 day ago' },
                      { title: 'Attendance Updated', time: '2 days ago' },
                    ].map((activity, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 1.5,
                          borderRadius: 1.5,
                          background: theme.palette.action.hover,
                          borderLeft: `3px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {activity.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: theme.palette.text.secondary, display: 'block', mt: 0.5 }}
                        >
                          {activity.time}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
