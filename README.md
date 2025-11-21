# Lumina 

![Lumina Banner](public/image_73ff68.jpg)

**Lumina** is a modern, high-definition cloud storage application built with Next.js 15. It provides a secure, lightning-fast, and beautiful home for your images, featuring granular file management, folder organization, and instant image optimization.

## ✨ Features

* **Authentication & Security**: Secure user management powered by **Clerk**.
* **Modern UI/UX**: A stunning, glassmorphic interface built with **HeroUI** (formerly NextUI) and **Tailwind CSS**.
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
git clone [https://github.com/yourusername/lumina.git](https://github.com/yourusername/lumina.git)
cd lumina
