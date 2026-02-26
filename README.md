# EduERP Assistant

A modern, responsive Enterprise Resource Planning (ERP) web application frontend for educational institutions built with React, TypeScript, Material UI (MUI v5), and Framer Motion.

## Features

✨ **Modern Design**
- Clean, professional, and visually appealing interface
- Soft shadows, rounded corners, smooth transitions, and subtle animations
- Production-ready UI components with Material Design principles

💬 **AI Chat Assistant**
- ChatGPT-style messaging interface with real-time interactions
- Message bubbles with timestamps and smooth animations
- User messages appear right-aligned, assistant messages left-aligned
- Typing indicator animation when generating responses
- Scrollable chat window with auto-scroll to latest message
- Enter key submission (Shift+Enter for new line)

🎨 **Theme Support**
- Light and dark theme toggle
- Persistent theme preference using localStorage
- Smooth theme transitions

🍃 **Responsive Design**
- Mobile-first approach
- Fully responsive across all device sizes
- Collapsible sidebar for mobile devices
- Optimized touch interactions

🧩 **Component Architecture**
- Reusable, well-organized components
- Custom hooks for theme and chat functionality
- Context API for state management
- Type-safe with TypeScript

📱 **Sidebar Navigation**
- Collapsible navigation menu for mobile devices
- Menu items: Dashboard, Students, Teachers, Attendance, Grades, Reports, Chat Assistant
- Active route highlighting with smooth indicator animation
- Logo and branding in sidebar header

⚡ **Animations**
- Framer Motion for smooth page transitions
- Message bubble entrance animations
- Button hover scaling effects
- Sidebar slide-in animations
- Typing indicator pulse effect
- Page entrance effects

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Material UI (MUI) v5
- **Animation Library**: Framer Motion
- **Routing**: React Router v6
- **Styling**: Emotion (built-in with Material UI)
- **Build Tool**: Vite 5
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "ERP APP"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically in your default browser at `http://localhost:5173`.

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── chat/               # Chat-related components
│   │   ├── ChatPage.tsx    # Main chat page
│   │   ├── ChatWindow.tsx  # Message list container
│   │   ├── ChatInput.tsx   # Input field with send button
│   │   ├── MessageBubble.tsx # Individual message component
│   │   └── TypingIndicator.tsx # Typing animation
│   ├── layout/             # Layout components
│   │   ├── MainLayout.tsx  # Main layout wrapper
│   │   ├── Header.tsx      # Top navigation bar
│   │   └── Sidebar.tsx     # Side navigation menu
│   └── PlaceholderPage.tsx # Placeholder for other pages
├── context/                # Context providers
│   ├── ThemeContext.tsx    # Theme management
│   └── ChatContext.tsx     # Chat state management
├── theme/                  # Theme configuration
│   └── theme.ts           # Material UI theme setup
├── types/                  # TypeScript type definitions
│   └── index.ts           # Custom interfaces
├── App.tsx                # Main application component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Key Components

### MainLayout
Wraps all pages with header and sidebar navigation. Handles sidebar toggle for mobile devices.

### Header
Top navigation bar with:
- Application branding
- Theme toggle (light/dark mode)
- User profile menu with settings and logout

### Sidebar
Navigation menu with:
- Logo and branding
- Menu items with icons
- Active route highlighting
- Collapsible on mobile devices
- Footer with copyright

### ChatPage
Full-featured chat interface with:
- Message list with auto-scroll
- Input field with send button
- Typing indicator animation
- Empty state display

### MessageBubble
Individual message component with:
- Different styling for user vs assistant messages
- Timestamps
- Entrance animations
- Hover effects

## Customization

### Theme Colors
Edit `src/theme/theme.ts` to customize colors:
- Primary color (default: #6366f1 - Indigo)
- Secondary color (default: #ec4899 - Pink)
- Dark mode colors

### Chat Responses
Modify `src/components/chat/ChatPage.tsx` to:
- Connect to a real API/AI service
- Implement custom response logic
- Add real-time chat features

### Menu Items
Edit the `menuItems` array in `src/components/layout/Sidebar.tsx` to:
- Add or remove menu items
- Change labels and icons
- Update navigation routes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React Router lazy loading
- Optimized animations with GPU acceleration
- Efficient re-renders with React best practices
- Responsive images and optimized assets
- Smooth scrolling and transitions

## Accessibility

- Semantic HTML structure
- ARIA labels and roles where applicable
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance (WCAG AA standard)

## Future Enhancements

- Integration with real AI Chat API
- Student and teacher management modules
- Attendance tracking system
- Grade management system
- Advanced reporting features
- Real-time notifications
- File upload and sharing
- Multi-language support

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue or reach out to the development team.

---

**Built with ❤️ for educational institutions**
