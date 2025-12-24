# Project Architecture

This project follows a feature-based architecture with centralized shared resources for better code organization, maintainability, and scalability.

## Directory Structure

```
src/
├── app/                    # Application-level code
│   ├── layout/            # Layout components (AppShell, Sidebar)
│   └── routes/            # Route definitions
│
├── features/              # Feature modules
│   └── payments/          # Payments feature
│       ├── components/    # Feature-specific components
│       ├── data/          # Mock data & API utilities
│       └── pages/         # Feature pages
│
├── components/            # Shared components
│   ├── ui/               # Reusable UI components (Button, Avatar, etc.)
│   └── icons/            # Icon component library
│
├── config/               # Application configuration
│   └── constants.ts      # App-wide constants
│
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared interfaces and types
│
├── styles/               # Global styles and design tokens
│   └── colors.ts         # Color system and design tokens
│
└── assets/               # Static assets (images, fonts, etc.)
```

## Architecture Principles

### 1. Feature-Based Organization
- Each feature is self-contained in its own directory
- Features contain their own components, pages, and data
- Shared code is extracted to top-level directories

### 2. Centralized Design System
- **Colors**: All color tokens defined in `src/styles/colors.ts`
- **Icons**: Reusable icon components in `src/components/icons/`
- **UI Components**: Shared components in `src/components/ui/`

### 3. Type Safety
- Shared TypeScript interfaces in `src/types/`
- Strict type checking enabled
- No `any` types in production code

### 4. Import Aliases
The project uses path aliases for cleaner imports:
```typescript
// Instead of: import { colors } from '../../../styles/colors';
import { colors } from '@/styles/colors';

// Instead of: import Button from '../../components/ui/Button';
import { Button } from '@/components/ui';
```

### 5. Barrel Exports
Each module exports its public API through index files:
```typescript
// src/components/ui/index.ts
export { Button } from './Button';
export { Avatar } from './Avatar';
export { Divider } from './Divider';

// Usage:
import { Button, Avatar } from '@/components/ui';
```

## Design System

### Color Palette
Defined in `src/styles/colors.ts`:
- **Brand**: Primary brand colors
- **Gray**: Neutral colors for text and backgrounds
- **Kalto**: Custom palette for specific use cases
- **Semantic**: Success, warning, error colors

### Icon System
All icons are React components in `src/components/icons/`:
```typescript
import { SearchIcon, CalendarIcon } from '@/components/icons';

<SearchIcon className="text-gray-500" />
```

### UI Components
Reusable components with variants:
```typescript
<Button variant="primary">Click me</Button>
<Button variant="secondary">Cancel</Button>
<Avatar size="md" src={user.avatar} alt={user.name} />
```

## Code Organization Best Practices

### Component Structure
```typescript
// 1. Imports (external first, then internal)
import { useState } from 'react';
import { Button } from '@/components/ui';
import { colors } from '@/styles/colors';

// 2. Type definitions
interface Props {
  title: string;
  onSave: () => void;
}

// 3. Component
export default function MyComponent({ title, onSave }: Props) {
  // Component logic
}
```

### Constants
Extract constants to `src/config/constants.ts`:
```typescript
export const NAV_ITEMS = [/* ... */];
export const CURRENT_USER = {/* ... */};
export const APP_NAME = 'Tu Empresa';
```

### Mock Data
Feature-specific mock data in `features/{feature}/data/`:
```typescript
// src/features/payments/data/mockData.ts
export const MOCK_PAYMENTS: Payment[] = [/* ... */];
export const STATUS_LABELS = {/* ... */};
```

## Adding New Features

1. Create feature directory: `src/features/{feature-name}/`
2. Add structure:
   - `components/` - Feature components
   - `pages/` - Feature pages
   - `data/` - Mock data and API utilities
   - `hooks/` (if needed) - Custom React hooks
3. Create barrel export: `components/index.ts`
4. Add route to `src/app/routes/AppRoutes.tsx`

## Adding New Shared Components

1. Create component in `src/components/ui/{ComponentName}.tsx`
2. Export from `src/components/ui/index.ts`
3. Add TypeScript interfaces to `src/types/index.ts` if needed

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.18
- **Design Source**: Figma

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

## Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Code linting configured
- **Path Aliases**: `@/*` for clean imports
- **Component Organization**: Consistent file structure
- **Type Safety**: No `any` types in production code
