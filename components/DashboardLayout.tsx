"use client";

import { useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DashboardContent from "@/components/DashboardContent";
import { UploadCloud } from "lucide-react";

interface DashboardLayoutProps {
  userId: string;
  user: any; // Using any to avoid complex type matching with serialized user
}

export default function DashboardLayout({ userId, user }: DashboardLayoutProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging((prev) => {
      if (!prev) return true;
      return prev;
    });
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    // Only set to false if we're leaving the window
    if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // The actual file handling will be done by the FileUploadForm or a global handler
    // For now, we just close the overlay
  }, []);

  // Handle global drag events
  useEffect(() => {
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, [handleDragOver, handleDragLeave, handleDrop]);

  return (
    <div className="min-h-screen flex bg-background relative overflow-hidden">
      {/* Static Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-indigo-500/05 rounded-full blur-[100px]" />
      </div>

      <Sidebar />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        {/* Mobile Header */}
        <div className="md:hidden p-4 flex items-center justify-between glass border-b border-white/10">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          <DashboardContent
            userId={userId}
            userName={
              user?.firstName ||
              user?.fullName ||
              user?.emailAddresses?.[0]?.emailAddress ||
              ""
            }
          />
        </div>
      </main>

      {/* Global Drop Zone Overlay */}
      {isDragging && (
        <div
          className="fixed inset-0 z-50 bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border-4 border-indigo-500 border-dashed m-4 rounded-3xl"
        >
          <div className="flex flex-col items-center text-white">
            <div className="p-6 bg-indigo-500 rounded-full mb-4 shadow-lg shadow-indigo-500/50">
              <UploadCloud className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-heading font-bold">Drop files to upload</h2>
            <p className="text-indigo-200 mt-2 text-lg">Release anywhere to start uploading</p>
          </div>
        </div>
      )}
    </div>
  );
}
