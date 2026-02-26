import React from 'react';
import { Box, Paper, useTheme } from '@mui/material';
import { motion, Variants } from 'framer-motion';

export const TypingIndicator: React.FC = () => {
  const theme = useTheme();

  const dotVariants: Variants = {
    initial: { y: 0, opacity: 0.6 },
    animate: { y: -10, opacity: 1 },
  };

  const containerVariants: Variants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          px: 2,
          py: 1.5,
          borderRadius: 3,
          background: theme.palette.mode === 'dark' ? '#2d3748' : '#f0f4f8',
          border: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          gap: 0.5,
          alignItems: 'center',
          minWidth: 'auto',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                variants={dotVariants}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: 'easeInOut',
                }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};
