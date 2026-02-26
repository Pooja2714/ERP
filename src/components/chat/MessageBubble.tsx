import React from 'react';
import { Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
  index: number;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message: msg, index: idx }) => {
  const message = msg;
  const index = idx;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formattedTime = message.timestamp.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      }}
      style={{
        display: 'flex',
        justifyContent: message.isUser ? 'flex-end' : 'flex-start',
        marginBottom: 16,
        paddingLeft: isMobile ? 12 : 0,
        paddingRight: isMobile ? 12 : 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: message.isUser ? 'flex-end' : 'flex-start',
          maxWidth: isMobile ? '85%' : '60%',
          gap: 0.5,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            px: 2,
            py: 1.5,
            borderRadius: 3,
            background: message.isUser
              ? theme.palette.primary.main
              : theme.palette.mode === 'dark'
              ? '#2d3748'
              : '#f0f4f8',
            color: message.isUser
              ? '#ffffff'
              : theme.palette.text.primary,
            wordWrap: 'break-word',
            boxShadow: message.isUser
              ? `0 4px 12px ${theme.palette.primary.main}40`
              : '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: message.isUser ? 'none' : `1px solid ${theme.palette.divider}`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: message.isUser
                ? `0 6px 16px ${theme.palette.primary.main}50`
                : '0 4px 12px rgba(0, 0, 0, 0.12)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Box
            sx={{
              fontSize: '1rem',
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            {message.content}
          </Box>
        </Paper>

        {/* Timestamp */}
        <Box
          sx={{
            fontSize: '0.75rem',
            color: theme.palette.text.secondary,
            mt: 0.5,
            px: 1,
            opacity: 0.7,
          }}
        >
          {formattedTime}
        </Box>
      </Box>
    </motion.div>
  );
};
