import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface PageProps {
  title: string;
  icon: string;
}

export const PlaceholderPage: React.FC<PageProps> = ({ title, icon }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 2,
          p: 3,
        }}
      >
        <Box
          sx={{
            fontSize: '4rem',
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            maxWidth: 400,
          }}
        >
          This page is coming soon. More features will be added as part of the complete ERP system.
        </Typography>
      </Box>
    </motion.div>
  );
};
