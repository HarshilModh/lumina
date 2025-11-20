"use client";

import { ArrowUpFromLine } from "lucide-react";
import { Button } from "@heroui/button";

interface FolderNavigationProps {
  folderPath: Array<{ id: string; name: string }>;
  navigateUp: () => void;
  navigateToPathFolder: (index: number) => void;
}

export default function FolderNavigation({
  folderPath,
  navigateUp,
  navigateToPathFolder,
}: FolderNavigationProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm overflow-x-auto pb-2">
      <Button
        variant="bordered"
        size="sm"
        isIconOnly
        onClick={navigateUp}
        isDisabled={folderPath.length === 0}
        className="border-white/10 text-slate-300 hover:bg-white/5"
      >
        <ArrowUpFromLine className="h-4 w-4" />
      </Button>
      <Button
        variant="light"
        size="sm"
        onClick={() => navigateToPathFolder(-1)}
        className={`${folderPath.length === 0 ? "font-bold text-white" : "text-slate-400"} hover:bg-white/5`}
      >
        Home
      </Button>
      {folderPath.map((folder, index) => (
        <div key={folder.id} className="flex items-center">
          <span className="mx-1 text-slate-600">/</span>
          <Button
            variant="light"
            size="sm"
            onClick={() => navigateToPathFolder(index)}
            className={`${index === folderPath.length - 1 ? "font-bold text-white" : "text-slate-400"} text-ellipsis overflow-hidden max-w-[150px] hover:bg-white/5`}
            title={folder.name}
          >
            {folder.name}
          </Button>
        </div>
      ))}
    </div>
  );
}
