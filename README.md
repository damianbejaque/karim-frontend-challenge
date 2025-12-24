# Karim Frontend Challenge - Payments Dashboard

A modern, responsive payments management dashboard built with React, TypeScript, and Tailwind CSS. This application provides a clean interface for managing financial transactions, viewing account balances, and creating new payment entries.

## ✨ Features

- **📊 Dashboard Overview** - View account balances and transaction statistics at a glance
- **💳 Transaction Management** - Create, view, and search through payment transactions
- **🔍 Advanced Search** - Filter transactions by status, date, and search terms
- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **🎨 Modern UI** - Clean, accessible interface with Tailwind CSS v4
- **⚡ Fast Performance** - Built with Vite for lightning-fast HMR and optimized builds
- **🔒 Type Safety** - Full TypeScript coverage for reliability

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- **Framework**: React 19.2
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1
- **Code Quality**: ESLint with React Compiler plugin

## 📁 Project Structure

```
src/
├── app/                    # Application-level code
│   ├── layout/            # Layout components (AppShell, Sidebar)
│   └── routes/            # Route definitions
├── features/              # Feature modules
│   └── payments/          # Payments feature
│       ├── components/    # PaymentsTable, StatCard, SearchBar, etc.
│       ├── data/          # Mock data & API utilities
│       └── pages/         # PaymentsPage
├── components/            # Shared components
│   ├── ui/               # Button, Avatar, Modal, Input, etc.
│   └── icons/            # Icon component library
├── config/               # Application configuration
├── types/                # TypeScript type definitions
├── styles/               # Global styles and design tokens
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
```

For detailed architecture information, see [ARCHITECTURE.md](ARCHITECTURE.md)

## 🎯 Key Components

### Payments Dashboard
- **StatCard**: Display account balances and transaction totals
- **PaymentsTable**: Sortable, searchable transaction list with pagination
- **SearchBar**: Real-time filtering and search functionality
- **CreateTransactionModal**: Form for creating new transactions
- **StatusBadge**: Visual indicators for transaction states

### UI Components
Reusable design system components:
- Button, Input, Select, Avatar
- Modal, Toast notifications
- Divider, custom icons

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type checking
- React Compiler for optimized builds
- Tailwind CSS for consistent styling

### Environment

The project uses Vite's built-in environment handling. Configuration is in `vite.config.ts`

## 🎨 Design System

The application uses a centralized design system:

- **Colors**: Defined in `src/styles/colors.ts`
- **Components**: Reusable UI library in `src/components/ui/`
- **Icons**: Custom icon components in `src/components/icons/`
- **Typography**: Tailwind's typography utilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Additional Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - Detailed architecture and design decisions
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Complete project structure guide
- [QUICK_START.md](QUICK_START.md) - Getting started guide
                                  

## 📄 License

This project is private and proprietary.

---

Built using React, TypeScript, and Tailwind CSS
# karim-frontend-challenge
# karim-frontend-challenge
