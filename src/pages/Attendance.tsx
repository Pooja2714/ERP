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
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';

interface AttendanceData {
  id: string;
  name: string;
  class: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

const attendanceData: AttendanceData[] = [
  { id: '1', name: 'Aarav Patel', class: '10-A', date: '2025-02-26', status: 'Present' },
  { id: '2', name: 'Bhavna Singh', class: '10-A', date: '2025-02-26', status: 'Present' },
  { id: '3', name: 'Chirag Verma', class: '10-B', date: '2025-02-26', status: 'Late' },
  { id: '4', name: 'Diya Kapoor', class: '10-B', date: '2025-02-26', status: 'Present' },
  { id: '5', name: 'Eshan Reddy', class: '9-A', date: '2025-02-26', status: 'Absent' },
  { id: '6', name: 'Fiona Sharma', class: '9-A', date: '2025-02-26', status: 'Present' },
  { id: '7', name: 'Gaurav Kumar', class: '9-B', date: '2025-02-26', status: 'Present' },
  { id: '8', name: 'Harsh Patel', class: '9-B', date: '2025-02-26', status: 'Present' },
];

export const Attendance: React.FC = () => {
  const theme = useTheme();

  const presentCount = attendanceData.filter((a) => a.status === 'Present').length;
  const absentCount = attendanceData.filter((a) => a.status === 'Absent').length;
  const lateCount = attendanceData.filter((a) => a.status === 'Late').length;

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
            Attendance
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Track student attendance records
          </Typography>
        </Box>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{ marginBottom: 24 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {[
              { label: 'Present', count: presentCount, color: '#10b981' },
              { label: 'Late', count: lateCount, color: '#f59e0b' },
              { label: 'Absent', count: absentCount, color: '#ef4444' },
            ].map((stat, idx) => (
              <Card
                key={idx}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: stat.color }}>
                  {stat.count}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
                  {stat.label}
                </Typography>
              </Card>
            ))}
          </Box>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
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
                    Student Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Class
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow
                    key={record.id}
                    sx={{
                      '&:hover': {
                        background: theme.palette.action.hover,
                      },
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.2s',
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{record.name}</TableCell>
                    <TableCell>{record.class}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={record.status}
                        size="small"
                        color={
                          record.status === 'Present'
                            ? 'success'
                            : record.status === 'Late'
                            ? 'warning'
                            : 'error'
                        }
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      </Box>
    </motion.div>
  );
};
