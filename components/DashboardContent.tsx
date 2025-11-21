"use client";

import { useState, useCallback, useEffect } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { FileUp, FileText, User, Layers } from "lucide-react";
import FileUploadForm from "@/components/FileUploadForm";
import FileList from "@/components/FileList";
import UserProfile from "@/components/UserProfile";
import { useSearchParams } from "next/navigation";

interface DashboardContentProps {
  userId: string;
  userName: string;
}

export default function DashboardContent({
  userId,
  userName,
}: DashboardContentProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<string>("files");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  // Set the active tab based on URL parameter
  useEffect(() => {
    if (tabParam === "profile") {
      setActiveTab("profile");
    } else if (tabParam === "settings") {
      setActiveTab("settings");
    } else if (tabParam === "trash") {
      setActiveTab("trash");
    } else if (tabParam === "photos") {
      setActiveTab("photos");
    } else {
      setActiveTab("files");
    }
  }, [tabParam]);

  const handleFileUploadSuccess = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  const handleFolderChange = useCallback((folderId: string | null) => {
    setCurrentFolder(folderId);
  }, []);

  return (
    <div className="space-y-8 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-heading font-bold text-slate-900">
            Welcome back,{" "}
            <span className="text-gradient">
              {userName?.length > 10
                ? `${userName?.substring(0, 10)}...`
                : userName?.split(" ")[0] || "there"}
            </span>
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Here&apos;s what&apos;s happening with your cloud today.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass px-6 py-3 rounded-2xl flex flex-col items-center min-w-[120px]">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Files</span>
            <span className="text-xl font-bold text-slate-900 mt-1">1,248</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {/* Main Content Area */}
      {activeTab === "files" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Upload & Quick Access */}
          <div className="lg:col-span-4 space-y-8">
            <div 
              className="glass-card p-6 rounded-3xl border border-slate-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileUp className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-indigo-500/10 rounded-xl">
                  <FileUp className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-slate-900">Quick Upload</h2>
              </div>
              <FileUploadForm
                userId={userId}
                onUploadSuccess={handleFileUploadSuccess}
                currentFolder={currentFolder}
              />
            </div>


          </div>

          {/* Right Column: File Browser */}
          <div className="lg:col-span-8">
            <div 
              className="glass-card p-8 rounded-3xl min-h-[600px] border border-slate-200"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-xl">
                    <Layers className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-slate-900">Your Files</h2>
                </div>
                {/* View Toggle could go here */}
              </div>
              
              <FileList
                userId={userId}
                refreshTrigger={refreshTrigger}
                onFolderChange={handleFolderChange}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="max-w-4xl mx-auto">
          <UserProfile />
        </div>
      )}
      
      {/* Placeholder for other tabs */}
      {(activeTab === "photos" || activeTab === "trash" || activeTab === "settings") && (
        <div className="flex flex-col items-center justify-center h-[400px] glass-card rounded-3xl">
          <div className="p-6 bg-white/5 rounded-full mb-4">
            <Sparkles className="w-12 h-12 text-slate-500" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">Coming Soon</h3>
          <p className="text-slate-400">This section is under construction.</p>
        </div>
      )}
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M9 5H5" />
      <path d="M19 21v-4" />
      <path d="M15 19h4" />
    </svg>
  );
}
