# 📚 Lexis - AI-Powered PDF Summarization Platform

## 🎯 Overview
A modern web application that transforms PDF documents into concise, AI-generated summaries. Built with Next.js 15 and powered by cutting-edge AI technology, Lexis offers a seamless document summarization experience with a beautiful, animated interface.

## ✨ Features
1. 📄 Document Processing
   - PDF upload and processing (supports files up to 20MB)
   - AI-powered summarization using Google's Genai and LangChain
   - Beautiful summary presentation with navigation controls
   - Download capabilities for generated summaries

2. 🎨 User Experience
   - Responsive, animated interface using Framer Motion
   - Real-time processing status updates
   - Interactive document viewer
   - Progress tracking and status indicators
   - Empty states and loading skeletons for smooth UX

3. 👤 User Management
   - Secure authentication via Clerk
   - User dashboard for managing summaries
   - Summary history and tracking
   - Document limit monitoring
<!-- 
(-Feature not yet implemented-)
   4. 💳 Payment Integration
      - Subscription management
      - Usage tracking and limits -->

## 🛠️ Tech Stack
### 🎨 Frontend
- Next.js 15 with React 19
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Radix UI components
- Lucide React for icons
- Sonner for toast notifications

### ⚙️ Backend
- Next.js API routes
- NeonDB (PostgreSQL) for data storage
- Uploadthing for file handling
- Google Genai & LangChain for AI processing
- Clerk for authentication
<!-- - Stripe for payments -->

### 🔧 Development Tools
- TurboRepo for development
- ESLint for code quality
- TypeScript for type checking

## 📁 Project Structure
```
lexis/
├── app/                    # Next.js app directory
│   ├── (logged-in)/       # Protected routes
│   ├── api/               # API endpoints
│   ├── sign-in/          # Authentication pages
│   └── sign-up/          
├── components/            # React components
│   ├── common/           # Shared components
│   ├── home/             # Landing page components
│   ├── summaries/        # Summary-related components
│   ├── ui/               # UI components
│   └── upload/           # Upload-related components
├── lib/                  # Utility libraries
└── utils/                # Helper functions
```

## 💾 Database Schema
<!-- Three main tables:
1. 👥 users - User management and subscription status
   - Stores user profiles, subscription details, and authentication info
   - Tracks customer IDs and subscription status -->

1. 📑 pdf_summaries - Document processing and results
   - Manages uploaded PDFs and their generated summaries
   - Tracks processing status and metadata
   - Links summaries to user accounts

<!-- 3. 💰 payments - Payment tracking and history
   - Records payment transactions and subscription details
   - Links payments to user accounts and subscription plans -->

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js 18+
- npm/yarn
- PostgreSQL database

### 🔐 Environment Variables
Create a `.env.local` file in the root directory with the following variables:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPLOADTHING_TOKEN=your_uploadthing_token
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
DATABASE_URL=your_neondb_url
```

### 💻 Installation
1. Clone the repository
```bash
git clone [repository-url]
cd lexis
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### 🛠️ Development Commands
```bash
npm run dev        # Start development server with Turbopack
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 🤝 Contributing
We welcome contributions to Lexis! Please read our contribution guidelines before submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact
For questions or support, please reach out to the project maintainers or open an issue on GitHub.
