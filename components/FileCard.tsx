"use client";

import { File as FileType } from "@/lib/db/schema";
import { FileText, Folder, MoreVertical, Star, Download, Trash2, ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

interface FileCardProps {
  file: FileType;
  onStar: (fileId: string) => void;
  onTrash: (fileId: string) => void;
  onDelete: (file: FileType) => void;
  onDownload: (file: FileType) => void;
  onClick: (file: FileType) => void;
}

export default function FileCard({
  file,
  onStar,
  onTrash,
  onDelete,
  onDownload,
  onClick,
}: FileCardProps) {
  const isImage = file.type.startsWith("image/");

  return (
    <div
      role="button"
      tabIndex={0}
      className="group relative glass p-4 rounded-2xl border border-slate-200 hover:border-indigo-500/30 transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-md"
      onClick={() => onClick(file)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(file); } }}
    >
      {/* Selection/Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-colors duration-200" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header (Icon + Menu) */}
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl ${
            file.isFolder 
              ? "bg-indigo-500/10 text-indigo-600" 
              : isImage 
                ? "bg-purple-500/10 text-purple-600" 
                : "bg-slate-100 text-slate-500"
          }`}>
            {file.isFolder ? (
              <Folder className="w-6 h-6" />
            ) : isImage ? (
              <ExternalLink className="w-6 h-6" />
            ) : (
              <FileText className="w-6 h-6" />
            )}
          </div>

          <div role="button" tabIndex={-1} onClick={(e) => e.stopPropagation()} onKeyDown={() => {}}>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-slate-400 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="File actions">
                <DropdownItem
                  key="download"
                  startContent={<Download className="w-4 h-4" />}
                  onClick={() => onDownload(file)}
                >
                  Download
                </DropdownItem>
                <DropdownItem
                  key="star"
                  startContent={<Star className={`w-4 h-4 ${file.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`} />}
                  onClick={() => onStar(file.id)}
                >
                  {file.isStarred ? "Unstar" : "Star"}
                </DropdownItem>
                <DropdownItem
                  key="trash"
                  className="text-danger"
                  color="danger"
                  startContent={<Trash2 className="w-4 h-4" />}
                  onClick={() => file.isTrash ? onDelete(file) : onTrash(file.id)}
                >
                  {file.isTrash ? "Delete Permanently" : "Move to Trash"}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Preview (for images) */}
        {isImage && (
          <div className="flex-1 mb-4 rounded-lg overflow-hidden bg-slate-100 relative aspect-video group-hover:shadow-lg transition-shadow">
            {/* Use fileUrl for preview */}
            <img 
              src={file.thumbnailUrl || file.fileUrl} 
              alt={file.name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Footer (Name + Info) */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-slate-700 truncate pr-2" title={file.name}>
              {file.name}
            </h3>
            {file.isStarred && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />}
          </div>
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>
              {file.isFolder 
                ? "Folder" 
                : file.size < 1024 * 1024 
                  ? `${(file.size / 1024).toFixed(1)} KB` 
                  : `${(file.size / (1024 * 1024)).toFixed(1)} MB`}
            </span>
            <span>{formatDistanceToNow(new Date(file.createdAt), { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
