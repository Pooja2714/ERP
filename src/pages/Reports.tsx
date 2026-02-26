import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  TrendingUp as UpIcon,
  TrendingDown as DownIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ReportData {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

export const Reports: React.FC = () => {
  const theme = useTheme();

  const reportMetrics: ReportData[] = [
    {
      title: 'Student Performance',
      value: '8.2/10',
      change: '+0.4 from last semester',
      positive: true,
      icon: <UpIcon sx={{ color: '#10b981' }} />,
    },
    {
      title: 'Attendance Rate',
      value: '94.5%',
      change: '+2.3% from last week',
      positive: true,
      icon: <UpIcon sx={{ color: '#10b981' }} />,
    },
    {
      title: 'Teacher Satisfaction',
      value: '4.7/5',
      change: '+0.2 from last year',
      positive: true,
      icon: <UpIcon sx={{ color: '#10b981' }} />,
    },
    {
      title: 'Parent Engagement',
      value: '87%',
      change: '-3% from last month',
      positive: false,
      icon: <DownIcon sx={{ color: '#ef4444' }} />,
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
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 1,
            }}
          >
            Reports
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            School performance reports and analytics
          </Typography>
        </Box>

        {/* Key Metrics */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {reportMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={metric.title}>
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
                          {metric.title}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 1,
                          }}
                        >
                          {metric.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: metric.positive ? '#10b981' : '#ef4444',
                            fontWeight: 600,
                          }}
                        >
                          {metric.change}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          fontSize: '1.75rem',
                        }}
                      >
                        {metric.icon}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Reports */}
        <Grid container spacing={2}>
          {/* Class Performance */}
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
                    Class Performance
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {[
                      { name: 'Class 10-A', score: 88 },
                      { name: 'Class 10-B', score: 85 },
                      { name: 'Class 9-A', score: 82 },
                      { name: 'Class 9-B', score: 79 },
                    ].map((cls) => (
                      <Box key={cls.name}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {cls.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                            {cls.score}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={cls.score}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            background: theme.palette.divider,
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                              borderRadius: 4,
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

          {/* Subject-wise Performance */}
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
                    Subject Performance
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {[
                      { subject: 'Mathematics', score: 89 },
                      { subject: 'English', score: 86 },
                      { subject: 'Science', score: 88 },
                      { subject: 'History', score: 81 },
                    ].map((item) => (
                      <ListItem
                        key={item.subject}
                        sx={{
                          px: 0,
                          py: 1.5,
                          borderBottom: `1px solid ${theme.palette.divider}`,
                          '&:last-child': {
                            borderBottom: 'none',
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.subject}
                          secondary={`${item.score}/100`}
                          primaryTypographyProps={{
                            variant: 'body2',
                            fontWeight: 500,
                          }}
                          secondaryTypographyProps={{
                            sx: { color: theme.palette.primary.main, fontWeight: 600 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
