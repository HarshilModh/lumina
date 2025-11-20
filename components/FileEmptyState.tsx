"use client";

import { File } from "lucide-react";
import { Card, CardBody } from "@heroui/card";

interface FileEmptyStateProps {
  activeTab: string;
}

export default function FileEmptyState({ activeTab }: FileEmptyStateProps) {
  return (
    <div className="glass-card py-16 text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="bg-indigo-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
        <File className="h-10 w-10 text-indigo-400" />
      </div>
      <h3 className="text-xl font-heading font-medium mb-2 text-white">
        {activeTab === "all" && "No files available"}
        {activeTab === "starred" && "No starred files"}
        {activeTab === "trash" && "Trash is empty"}
      </h3>
      <p className="text-slate-400 mt-2 max-w-md mx-auto px-4">
        {activeTab === "all" &&
          "Upload your first file to get started with your personal cloud storage"}
        {activeTab === "starred" &&
          "Mark important files with a star to find them quickly when you need them"}
        {activeTab === "trash" &&
          "Files you delete will appear here for 30 days before being permanently removed"}
      </p>
    </div>
  );
}
