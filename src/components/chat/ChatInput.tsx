import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  useTheme,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';
import { Send as SendIcon, EmojiEmotions as EmojiIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage: _onSendMessage, isLoading = false }) => {
  const onSendMessage = _onSendMessage;
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSendMessage = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ width: '100%' }}
    >
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'flex-end',
          }}
        >
          {/* Input Field */}
          <TextField
            fullWidth
            multiline
            maxRows={4}
            minRows={1}
            placeholder="Ask something..."
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: -1 }}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      size="small"
                      color="primary"
                      sx={{
                        '&:hover': {
                          background: `${theme.palette.primary.main}15`,
                        },
                      }}
                    >
                      <EmojiIcon fontSize="small" />
                    </IconButton>
                  </motion.div>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                fontSize: isMobile ? '0.875rem' : '1rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
                },
                '&.Mui-focused': {
                  boxShadow: `0 4px 16px ${theme.palette.primary.main}30`,
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />

          {/* Send Button */}
          <motion.div
            whileHover={{ scale: isLoading ? 1 : 1.08 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
          >
            <IconButton
              onClick={handleSendMessage}
              disabled={!message.trim() || isLoading}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: '#fff',
                width: isMobile ? 44 : 48,
                height: isMobile ? 44 : 48,
                flexShrink: 0,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                '&:hover:not(:disabled)': {
                  boxShadow: `0 8px 20px ${theme.palette.primary.main}60`,
                  transform: 'translateY(-2px)',
                },
                '&:disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed',
                },
              }}
            >
              <SendIcon sx={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }} />
            </IconButton>
          </motion.div>
        </Box>

        {/* Help Text */}
        <Box
          sx={{
            fontSize: '0.75rem',
            color: theme.palette.text.secondary,
            mt: 1,
            ml: 1,
            opacity: 0.7,
          }}
        >
          Press Enter to send, Shift + Enter for new line
        </Box>
      </Box>
    </motion.div>
  );
};
