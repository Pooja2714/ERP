export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (content: string, isUser: boolean) => void;
  clearMessages: () => void;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
