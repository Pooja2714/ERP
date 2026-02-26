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

interface GradeData {
  id: string;
  studentName: string;
  class: string;
  subject: string;
  score: number;
  grade: string;
  term: string;
}

const gradeData: GradeData[] = [
  { id: '1', studentName: 'Aarav Patel', class: '10-A', subject: 'Mathematics', score: 92, grade: 'A+', term: 'Term 1' },
  { id: '2', studentName: 'Aarav Patel', class: '10-A', subject: 'English', score: 88, grade: 'A', term: 'Term 1' },
  { id: '3', studentName: 'Bhavna Singh', class: '10-A', subject: 'Mathematics', score: 85, grade: 'A', term: 'Term 1' },
  { id: '4', studentName: 'Bhavna Singh', class: '10-A', subject: 'Science', score: 90, grade: 'A+', term: 'Term 1' },
  { id: '5', studentName: 'Chirag Verma', class: '10-B', subject: 'Mathematics', score: 78, grade: 'B+', term: 'Term 1' },
  { id: '6', studentName: 'Chirag Verma', class: '10-B', subject: 'History', score: 88, grade: 'A', term: 'Term 1' },
  { id: '7', studentName: 'Diya Kapoor', class: '10-B', subject: 'English', score: 95, grade: 'A+', term: 'Term 1' },
  { id: '8', studentName: 'Diya Kapoor', class: '10-B', subject: 'Science', score: 92, grade: 'A+', term: 'Term 1' },
];

export const Grades: React.FC = () => {
  const theme = useTheme();

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return '#10b981';
      case 'B+':
      case 'B':
        return '#3b82f6';
      case 'C+':
      case 'C':
        return '#f59e0b';
      default:
        return '#ef4444';
    }
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
            Grades
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            View and manage student grades and scores
          </Typography>
        </Box>

        {/* Grade Distribution */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{ marginBottom: 24 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 2,
            }}
          >
            {[
              { label: 'A+ (90-100)', count: 3, color: '#10b981' },
              { label: 'A (80-89)', count: 2, color: '#3b82f6' },
              { label: 'B+ (70-79)', count: 1, color: '#f59e0b' },
              { label: 'B (60-69)', count: 0, color: '#ef4444' },
            ].map((dist, idx) => (
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
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.75rem', color: dist.color }}>
                  {dist.count}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
                  {dist.label}
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
                    Subject
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Score
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Grade
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Term
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gradeData.map((record) => (
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
                    <TableCell sx={{ fontWeight: 500 }}>{record.studentName}</TableCell>
                    <TableCell>{record.class}</TableCell>
                    <TableCell>{record.subject}</TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: 600 }}>{record.score}/100</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={record.grade}
                        size="small"
                        sx={{
                          background: getGradeColor(record.grade),
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell>{record.term}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        {/* Summary */}
        <Box sx={{ mt: 3, p: 2, background: theme.palette.action.hover, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Total Records: <strong>{gradeData.length}</strong> | Average Score:{' '}
            <strong>
              {(gradeData.reduce((sum, g) => sum + g.score, 0) / gradeData.length).toFixed(1)}
            </strong>
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
