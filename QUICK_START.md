# Quick Start Guide

## Overview
This project implements a payments dashboard with a modern, scalable architecture built with React, TypeScript, and Tailwind CSS.

## Architecture Highlights

✅ **Feature-based structure** - Organized by features, not file types
✅ **Centralized design system** - All colors, icons, and UI components are reusable
✅ **Type-safe** - TypeScript interfaces for all data structures
✅ **Path aliases** - Clean imports using `@/` prefix
✅ **Barrel exports** - Simplified imports from each module
✅ **Utility functions** - Common helpers for formatting, validation, etc.
✅ **Custom hooks** - Reusable React logic

## Quick Reference

### Common Imports

```typescript
// UI Components
import { Button, Avatar, Divider } from '@/components/ui';

// Icons
import { SearchIcon, CalendarIcon, DownloadIcon } from '@/components/icons';

// Types
import type { Payment, NavItem, User } from '@/types';

// Config
import { NAV_ITEMS, CURRENT_USER, APP_NAME } from '@/config/constants';

// Utils
import { formatCurrency, formatDate, getInitials } from '@/utils';

// Styles
import { colors } from '@/styles/colors';

// Hooks
import { useActiveRoute, useIsRouteActive } from '@/hooks';
```

### Adding a New Feature

1. Create feature directory:
```bash
mkdir -p src/features/my-feature/{components,pages,data}
```

2. Create components:
```bash
touch src/features/my-feature/components/MyComponent.tsx
touch src/features/my-feature/components/index.ts
touch src/features/my-feature/pages/MyPage.tsx
```

3. Add barrel export in `components/index.ts`:
```typescript
export { default as MyComponent } from './MyComponent';
```

4. Import in your page:
```typescript
import { MyComponent } from '../components';
```

### Using Shared Components

#### Button
```tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost" size="lg">Ghost</Button>
```

#### Avatar
```tsx
<Avatar src={user.avatar} alt={user.name} />
<Avatar name="John Doe" size="lg" /> {/* Shows initials */}
```

#### Icons
```tsx
<SearchIcon className="text-gray-500" />
<CalendarIcon className="text-brand-900" />
```

### Using Utilities

```typescript
// Format currency
formatCurrency(5000); // "$5,000.00 COP"

// Format date
formatDate(new Date(), 'short'); // "Jan 13, 2025"
formatDate(new Date(), 'medium'); // "Enero 13, 2025"

// Get initials
getInitials("Fernanda García"); // "FG"

// Truncate text
truncateText("SOsFOz5...OYPEopC", 10); // "SOsFOz5..."
```

### Color System

All colors are defined in `src/styles/colors.ts` and available in Tailwind:

```tsx
// Using Tailwind classes
<div className="bg-brand-900 text-white">...</div>
<div className="text-gray-700 border-gray-200">...</div>

// Using colors object directly
import { colors } from '@/styles/colors';
<svg stroke={colors.brand[900]} />
```

## File Structure Quick View

```
src/
├── app/                    # App-level (layout, routes)
├── components/             # Shared components (ui/, icons/)
├── config/                 # App constants
├── features/               # Feature modules
│   └── payments/
│       ├── components/     # Feature components
│       ├── data/           # Mock data
│       └── pages/          # Feature pages
├── hooks/                  # Custom React hooks
├── styles/                 # Design tokens (colors, etc.)
├── types/                  # TypeScript interfaces
└── utils/                  # Helper functions
```

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit
```

## Component Checklist

When creating a new component:

- [ ] Create component file in appropriate directory
- [ ] Add TypeScript types/interfaces
- [ ] Use design system colors (no hardcoded hex)
- [ ] Use shared UI components when possible
- [ ] Use icon components instead of inline SVG
- [ ] Add to barrel export (index.ts)
- [ ] Use path aliases for imports (@/...)
- [ ] Add JSDoc comments for complex logic

## Best Practices

1. **Always use path aliases**: `@/components/ui` instead of `../../../components/ui`
2. **Import from barrel exports**: `import { Button } from '@/components/ui'`
3. **Use design tokens**: Reference `colors.ts` instead of hardcoded values
4. **Type everything**: No `any` types in production code
5. **Extract constants**: Don't hardcode values in components
6. **Reuse components**: Check `components/ui` before creating new ones
7. **Keep components small**: Single responsibility principle

## Troubleshooting

### Build fails with module not found
- Check path aliases are correct (`@/` points to `src/`)
- Verify barrel exports exist (`index.ts` files)
- Check TypeScript config (`tsconfig.app.json`)

### Styles not applying
- Verify Tailwind classes are correct
- Check `tailwind.config.ts` includes the file
- Ensure design tokens are imported from `colors.ts`

### Type errors
- Check `src/types/index.ts` for type definitions
- Verify imports are from the correct location
- Run `npx tsc --noEmit` to see all type errors

## Resources

- **Architecture Docs**: See [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Figma Design**: Node 4617:40452
- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev

## Next Steps

1. **Run the dev server**: `npm run dev`
2. **Explore the code**: Start with `src/features/payments/pages/PaymentsPage.tsx`
3. **Read architecture docs**: Check `ARCHITECTURE.md` for detailed information
4. **Add new features**: Follow the structure in `src/features/payments/`

Happy coding! 🚀
