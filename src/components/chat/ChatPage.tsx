import React, { useState, useCallback } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useChat } from '../../context/ChatContext';
import { MessageList } from './ChatWindow';
import { ChatInput } from './ChatInput';

export const ChatPage: React.FC = () => {
  const theme = useTheme();
  const { messages, addMessage } = useChat();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(
    async (userMessage: string) => {
      // Add user message
      addMessage(userMessage, true);
      setIsLoading(true);

      // Simulate API call with a delay
      setTimeout(() => {
        const responses = [
          'That\'s a great question! Let me help you with that.',
          'I understand what you\'re asking. Here\'s what I can tell you...',
          'Excellent! This is something I can definitely assist with.',
          'Thank you for asking. Let me provide you with some insights.',
          'I\'ll be happy to help you with this. Here are some key points...',
          'Great observation! This is an important topic in educational management.',
          'I\'m here to help! This is a common question among educators.',
          'Absolutely, I can provide guidance on this matter.',
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, false);
        setIsLoading(false);
      }, 1500);
    },
    [addMessage]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: theme.palette.background.default,
        }}
      >
        {/* Message List */}
        <MessageList messages={messages} isTyping={isLoading} />

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </Box>
    </motion.div>
  );
};
