# Lumina

![Lumina Banner](public/image_73ff68.jpg)

**Lumina** is a modern, high-definition cloud storage application built with Next.js 15. It provides a secure, lightning-fast, and beautiful home for your images, featuring granular file management, folder organization, and instant image optimization.

## ✨ Features

* **Authentication & Security**: Secure user management powered by **Clerk**.
* **Modern UI/UX**: A stunning, glassmorphic interface built with **HeroUI** and **Tailwind CSS**.
* **File Management**:
    * Drag & drop file uploads.
    * Create nested folders for organization.
    * Star/Favorite important files.
    * Trash bin with restore functionality.
* **Image Optimization**: Automatic image processing and optimization using **ImageKit**.
* **Database**: Robust data management using **PostgreSQL** (Neon) and **Drizzle ORM**.
* **Responsive**: Fully responsive design for desktop and mobile devices.

## 🛠️ Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
* **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
* **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
* **Auth**: [Clerk](https://clerk.com/)
* **Storage**: [ImageKit](https://imagekit.io/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* A Neon Database account (PostgreSQL)
* A Clerk account
* An ImageKit account

### 1. Clone the repository

```bash
git clone [https://github.com/harshilmodh/lumina.git](https://github.com/harshilmodh/lumina.git)
cd lumina
2. Install dependencies
Bash
npm install
# or
yarn install
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_...
IMAGEKIT_PRIVATE_KEY=private_...
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=[https://ik.imagekit.io/your_id](https://ik.imagekit.io/your_id)

# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://user:password@endpoint.neon.tech/neondb?sslmode=require
# Generate SQL migrations based on the schema
npm run db:generate

# Push changes directly to the database
npm run db:push

# (Optional) Run migration script
npm run db:migrate
npm run dev
lumina/
├── app/                # Next.js App Router pages and API routes
│   ├── api/            # Backend API endpoints (files, folders, auth)
│   ├── dashboard/      # Protected dashboard pages
│   └── (auth)/         # Sign-in and Sign-up pages
├── components/         # Reusable React components
│   ├── ui/             # Generic UI components (Badge, Modal, etc.)
│   └── ...             # Feature-specific components (FileList, Sidebar)
├── lib/                # Utilities
│   └── db/             # Drizzle schema and database connection
├── drizzle/            # SQL migration files
├── public/             # Static assets
└── types/              # TypeScript type definitions
