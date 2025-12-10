# Design System Builder

A visual tool to create and customize design systems with live preview and export capabilities.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: TanStack Router (client-only SPA)
- **State Management**: TanStack Store
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Code Quality**: Biome (linting + formatting)
- **Validation**: Zod
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/
│   └── routes/          # TanStack Router routes
├── components/
│   ├── ui/              # UI component primitives
│   ├── editor/          # Editor interface components
│   ├── preview/         # Preview system components
│   ├── sections/        # Design token sections
│   └── controls/        # Control components
├── lib/
│   ├── design-tokens/   # Design token definitions
│   ├── preview/         # Preview system logic
│   ├── export/          # Export generators (CSS, Tailwind)
│   ├── persistence/     # localStorage & URL state
│   └── utils/           # Utility functions
├── stores/              # TanStack Store state management
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── styles/              # Global styles
```

## 🎯 Features (Planned)

- 🎨 Visual design token customization
- 👀 Live preview with 70+ component examples
- 📤 Export as CSS variables or Tailwind config
- 💾 Save and share designs via URL
- 🌓 Dark mode support
- 📱 Responsive design
- ♿ WCAG 2.1 AA accessible

## 📝 Development Status

Currently in Phase 1: Foundation (Task 1.1 complete)

See [roadmap.md](.github/project/roadmap.md) for detailed development plan.

## 📄 License

MIT
