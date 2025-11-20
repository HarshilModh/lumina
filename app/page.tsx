"use client";

import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Lock,
  Layers,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Static Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-indigo-500/05 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-sm text-indigo-600 dark:text-indigo-200 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium">Next Generation Cloud Storage</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
              Store your memories in <br />
              <span className="text-gradient">High Definition</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Lumina provides a secure, lightning-fast, and beautiful home for your images. 
              Experience the future of cloud storage today.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-10">
              <SignedOut>
                <Link href="/sign-up">
                  <Button size="lg" className="bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all px-8 py-6 text-lg">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button size="lg" variant="bordered" className="border-slate-200 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 px-8 py-6 text-lg">
                    Sign In
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all px-8 py-6 text-lg"
                    endContent={<ArrowRight className="h-5 w-5" />}
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-4 md:px-6 relative z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
                title="Lightning Fast"
                description="Upload and retrieve your images instantly with our edge-cached global network."
              />
              <FeatureCard 
                icon={<Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
                title="Secure by Design"
                description="Enterprise-grade encryption keeps your private photos truly private."
              />
              <FeatureCard 
                icon={<Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
                title="Smart Organization"
                description="AI-powered tagging and intuitive folders make finding photos a breeze."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-white/80 dark:bg-black/40 backdrop-blur-xl relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
            <Sparkles className="h-5 w-5 text-slate-900 dark:text-white" />
            <span className="font-heading font-bold text-xl text-slate-900 dark:text-white">Lumina</span>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Lumina. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div 
      className="glass-card p-10 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors duration-300 group border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md"
    >
      <div className="mb-6 p-4 bg-slate-100 dark:bg-white/5 rounded-2xl w-fit group-hover:bg-white dark:group-hover:bg-white/10 transition-colors ring-1 ring-slate-200 dark:ring-white/10">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-semibold mb-4 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{description}</p>
    </div>
  );
}
