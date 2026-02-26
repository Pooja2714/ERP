import React, { useEffect, useRef } from 'react';
import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { Message } from '../../types';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

interface MessageListProps {
  messages: Message[];
  isTyping?: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({ messages: msgs, isTyping = false }) => {
  const messages = msgs;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        p: isMobile ? 1.5 : 2,
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.background.default,
        backgroundImage:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(236,72,153,0.05) 100%)'
            : 'linear-gradient(135deg, rgba(99,102,241,0.02) 0%, rgba(236,72,153,0.02) 100%)',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: theme.palette.background.default,
        },
        '&::-webkit-scrollbar-thumb': {
          background: theme.palette.divider,
          borderRadius: '3px',
          '&:hover': {
            background: theme.palette.text.secondary,
          },
        },
      }}
    >
      {messages.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
            }}
          >
            💬
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Start a Conversation
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            Ask me anything about your educational or administrative needs
          </Typography>
        </Box>
      ) : (
        <>
          <AnimatePresence mode="popLayout">
            {messages.map((message: Message, index: number) => (
              <MessageBubble
                key={message.id}
                message={message}
                index={index}
              />
            ))}
          </AnimatePresence>
          {isTyping && <TypingIndicator />}
          <div ref={endOfMessagesRef} />
        </>
      )}
    </Box>
  );
};
