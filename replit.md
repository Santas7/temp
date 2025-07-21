# LLM-tech Company Website

## Overview

This is a corporate website for LLM-tech, a Russian IT company specializing in AI and backend development. The website is built using React with TypeScript, featuring a home page with preview sections and separate dedicated pages for Jobs and Portfolio. The site showcases the company's services, job openings, and completed projects. Recent updates include restructured navigation with separate pages for Jobs and Portfolio, individual project detail pages, and improved visual design with smooth section transitions and distinctive backgrounds.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Framework**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API with `/api` prefix

### Development Setup
- **Monorepo Structure**: Client, server, and shared code in separate directories
- **Hot Reload**: Vite dev server with HMR
- **Type Safety**: Shared TypeScript interfaces between client and server
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`, `@assets/`)

## Key Components

### Frontend Components
- **Navigation**: Fixed header with responsive mobile menu (phone number removed)
- **Hero Section**: Landing page with call-to-action (logo removed from hero)
- **Footer**: Company information and contact details (phone number removed)
- **Home Page**: Landing page with company info, founder section, services, and portfolio preview
- **Jobs Page**: Dedicated page for job listings with back navigation
- **Portfolio Page**: Full portfolio listing with back navigation
- **Project Detail Pages**: Individual project pages with detailed information
- **Visual Design**: Gradient backgrounds, patterns, and smooth transitions between sections
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.)

### Backend Components
- **Storage Interface**: Abstracted data layer with in-memory implementation
- **Route Registration**: Modular route handling system
- **Middleware**: Request logging and error handling
- **Static Serving**: Integration with Vite for development and static files in production

### Shared Components
- **Schema**: Database schema definitions using Drizzle ORM
- **Type Definitions**: Shared TypeScript interfaces
- **Validation**: Zod schemas for data validation

## Data Flow

### Development Flow
1. Vite dev server serves client application
2. Express server handles API requests on `/api` routes
3. Static assets served through Vite middleware
4. Hot module replacement for instant updates

### Production Flow
1. Client build output served as static files
2. Express server handles both static files and API routes
3. Database connections through Neon PostgreSQL
4. Session management via PostgreSQL store

### Data Storage
- **User Management**: Basic user schema with username/password
- **Sessions**: Stored in PostgreSQL using connect-pg-simple
- **Database Migrations**: Managed through Drizzle Kit

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit
- **Connection Pooling**: Built-in with Neon serverless driver

### UI Libraries
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Hook Form**: Form handling with validation

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Tailwind
- **Replit Integration**: Development environment support

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express API
- **Production**: Single Node.js process serving static files and API
- **Database**: Configured via `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Static file serving capability
- Environment variable support for database connection

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for client and server
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Database migration deployment