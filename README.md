
# WisePrep: AI Mock Interview Platform

> **Progress Update: July 2025**

## Overview
WisePrep is an AI-powered platform to help users practice for job interviews. It generates tailored interview questions, simulates an interviewer, and provides a modern, interactive experience.

## Current Progress
- ✅ **Next.js app structure** with app directory routing
- ✅ **User authentication** (sign up/sign in) using Firebase
- ✅ **Reusable UI components** (forms, buttons, cards, etc.)
- ✅ **Environment variables** for API keys and Firebase config
- ✅ **Interview question generation** using Google Gemini AI (via Vapi SDK)
- ✅ **Interview data storage** in Firestore
- ✅ **API route** for generating and saving interviews (`/api/vapi/generate`)
- ✅ **Random interview cover images**
- ✅ **Modern UI with Tailwind CSS and Radix UI**
- ✅ **TypeScript types and structure**
- ✅ **Project is ready for local development**

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ParasSharma101/ai-mock-interview.git
   cd mock_interview_platform
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn/pnpm/bun
   ```
3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local` (or use the provided `.env.local`).
   - Fill in your Firebase and API credentials.
4. **Start the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Key Technologies
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Vapi AI](https://vapi.ai/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Notable Files & Structure
- `app/` - Next.js app directory (routes, layouts, API)
- `components/` - UI and form components
- `firebase/` - Firebase admin and client setup
- `lib/` - Utility functions and Vapi SDK integration
- `types/` - TypeScript type definitions
- `.env.local` - Environment variables (not committed)

## Next Steps
- [ ] Add voice-based interview simulation
- [ ] Add instant feedback and scoring
- [ ] Improve dashboard and user experience
- [ ] Add more question types and customization
