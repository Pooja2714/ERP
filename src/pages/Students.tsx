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
  Input,
  InputAdornment,
  Card,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface StudentData {
  id: string;
  name: string;
  class: string;
  rollNo: number;
  email: string;
  status: 'Active' | 'Inactive';
  enrollment: string;
}

const studentData: StudentData[] = [
  { id: '1', name: 'Aarav Patel', class: '10-A', rollNo: 1, email: 'aarav.patel@school.com', status: 'Active', enrollment: '2022-06-15' },
  { id: '2', name: 'Bhavna Singh', class: '10-A', rollNo: 2, email: 'bhavna.singh@school.com', status: 'Active', enrollment: '2022-06-15' },
  { id: '3', name: 'Chirag Verma', class: '10-B', rollNo: 1, email: 'chirag.verma@school.com', status: 'Active', enrollment: '2022-06-15' },
  { id: '4', name: 'Diya Kapoor', class: '10-B', rollNo: 2, email: 'diya.kapoor@school.com', status: 'Active', enrollment: '2022-06-15' },
  { id: '5', name: 'Eshan Reddy', class: '9-A', rollNo: 1, email: 'eshan.reddy@school.com', status: 'Active', enrollment: '2023-06-15' },
  { id: '6', name: 'Fiona Sharma', class: '9-A', rollNo: 2, email: 'fiona.sharma@school.com', status: 'Active', enrollment: '2023-06-15' },
  { id: '7', name: 'Gaurav Kumar', class: '9-B', rollNo: 1, email: 'gaurav.kumar@school.com', status: 'Inactive', enrollment: '2023-06-15' },
  { id: '8', name: 'Harsh Patel', class: '9-B', rollNo: 2, email: 'harsh.patel@school.com', status: 'Active', enrollment: '2023-06-15' },
];

export const Students: React.FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredData = studentData.filter(
    student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Students
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Manage and view all student information
          </Typography>
        </Box>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{ marginBottom: 24 }}
        >
          <Input
            fullWidth
            placeholder="Search student by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
              </InputAdornment>
            }
            sx={{
              fontSize: '1rem',
              p: 1.5,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              '&:focus': {
                border: `1px solid ${theme.palette.primary.main}`,
              },
            }}
          />
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
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Class
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Roll No
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Enrollment
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{
                      '&:hover': {
                        background: theme.palette.action.hover,
                      },
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.2s',
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.rollNo}</TableCell>
                    <TableCell>{student.enrollment}</TableCell>
                    <TableCell>
                      <Chip
                        label={student.status}
                        size="small"
                        color={student.status === 'Active' ? 'success' : 'default'}
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
            Total Students: <strong>{studentData.length}</strong> | Active:{' '}
            <strong>{studentData.filter((s) => s.status === 'Active').length}</strong> | Inactive:{' '}
            <strong>{studentData.filter((s) => s.status === 'Inactive').length}</strong>
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
