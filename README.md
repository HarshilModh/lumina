# Lumina ✨

> **Store your memories in High Definition.**

Lumina is a next-generation cloud storage platform designed specifically for visual assets. It combines beautiful design with powerful functionality to provide a secure, lightning-fast home for your images.

<img width="1512" height="907" alt="Screenshot 2025-11-20 at 8 02 19 PM" src="https://github.com/user-attachments/assets/2fc117c1-1219-4b17-b4cd-6a57caba3a65" />


## 🌟 Features

* **High-Definition Storage**: Optimized for storing and retrieving high-quality images.
* **Lightning Fast**: Powered by **ImageKit**'s edge-cached global network for instant uploads and retrieval.
* **Smart Organization**:
    * 📂 **Hierarchical Folders**: Organize content with a nested folder structure.
    * 🏷️ **Smart Tagging**: AI-powered tagging makes finding photos effortless.
    * ⭐ **Favorites**: Quickly access your most cherished memories.
* **Secure by Design**: Enterprise-grade encryption and secure authentication via **Clerk**.
* **Modern Dashboard**:
    * **Overview**: At-a-glance view of your storage.
    * **Photos View**: Dedicated gallery view for your images.
    * **Trash**: Safety net for deleted items with restore functionality.
* **Beautiful UI**: A glassmorphic, responsive interface built with **HeroUI** and **Tailwind CSS**.

## 🏗️ Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
* **Auth**: [Clerk](https://clerk.com/)
* **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
* **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
* **Storage**: [ImageKit](https://imagekit.io/)
* **Fonts**: Outfit & Plus Jakarta Sans

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

* Node.js (v18+)
* npm or yarn
* PostgreSQL Database (Neon recommended)
* Clerk Account
* ImageKit Account

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/lumina.git](https://github.com/yourusername/lumina.git)
    cd lumina
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory:

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...

    # ImageKit
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_...
    IMAGEKIT_PRIVATE_KEY=private_...
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=[https://ik.imagekit.io/your_id](https://ik.imagekit.io/your_id)

    # Database
    DATABASE_URL=postgres://user:pass@endpoint.neon.tech/neondb?sslmode=require

    # App
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4.  **Database Setup**
    Push the schema to your database:
    ```bash
    npm run db:push
    ```

5.  **Start the server**
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Schema

Lumina uses a unified `files` table to manage the file system hierarchy.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Unique identifier |
| `name` | Text | Display name |
| `type` | Text | MIME type or "folder" |
| `url` | Text | Storage URL |
| `is_folder` | Boolean | Folder flag |
| `is_starred`| Boolean | Favorite flag |
| `parent_id` | UUID | Reference to parent folder |

You can explore your data visually with Drizzle Studio:
```bash
npm run db:studio
