import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  Chip,
  Avatar,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';

interface TeacherData {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  experience: number;
  status: 'Active' | 'On Leave';
}

const teacherData: TeacherData[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    subject: 'Mathematics',
    email: 'rajesh.kumar@school.com',
    phone: '+91-9876543210',
    experience: 12,
    status: 'Active',
  },
  {
    id: '2',
    name: 'Prof. Meera Sharma',
    subject: 'English',
    email: 'meera.sharma@school.com',
    phone: '+91-9876543211',
    experience: 8,
    status: 'Active',
  },
  {
    id: '3',
    name: 'Dr. Amit Patel',
    subject: 'Science',
    email: 'amit.patel@school.com',
    phone: '+91-9876543212',
    experience: 15,
    status: 'Active',
  },
  {
    id: '4',
    name: 'Ms. Priya Singh',
    subject: 'History',
    email: 'priya.singh@school.com',
    phone: '+91-9876543213',
    experience: 6,
    status: 'On Leave',
  },
  {
    id: '5',
    name: 'Mr. Vikram Verma',
    subject: 'Computer Science',
    email: 'vikram.verma@school.com',
    phone: '+91-9876543214',
    experience: 10,
    status: 'Active',
  },
  {
    id: '6',
    name: 'Dr. Anjali Gupta',
    subject: 'Physics',
    email: 'anjali.gupta@school.com',
    phone: '+91-9876543215',
    experience: 14,
    status: 'Active',
  },
];

export const Teachers: React.FC = () => {
  const theme = useTheme();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

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
            Teachers
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            View and manage teacher information
          </Typography>
        </Box>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <TableContainer
            component={Card}
            sx={{
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    background: theme.palette.action.hover,
                    borderBottom: `2px solid ${theme.palette.divider}`,
                  }}
                >
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Teacher
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Subject
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Phone
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Experience
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teacherData.map((teacher) => (
                  <TableRow
                    key={teacher.id}
                    sx={{
                      '&:hover': {
                        background: theme.palette.action.hover,
                      },
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.2s',
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            width: 36,
                            height: 36,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {getInitials(teacher.name)}
                        </Avatar>
                        <Typography sx={{ fontWeight: 500 }}>{teacher.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{teacher.subject}</TableCell>
                    <TableCell>{teacher.email}</TableCell>
                    <TableCell>{teacher.phone}</TableCell>
                    <TableCell>{teacher.experience} years</TableCell>
                    <TableCell>
                      <Chip
                        label={teacher.status}
                        size="small"
                        color={teacher.status === 'Active' ? 'success' : 'warning'}
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        {/* Summary */}
        <Box sx={{ mt: 3, p: 2, background: theme.palette.action.hover, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Total Teachers: <strong>{teacherData.length}</strong> | Active:{' '}
            <strong>{teacherData.filter((t) => t.status === 'Active').length}</strong> | On Leave:{' '}
            <strong>{teacherData.filter((t) => t.status === 'On Leave').length}</strong>
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
