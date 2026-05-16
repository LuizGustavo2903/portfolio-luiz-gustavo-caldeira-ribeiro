import React from "react";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

export function MainLayout({ children, preview }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Navbar />
      
      <main className="flex flex-1 pt-[44px] w-full overflow-hidden">
        {/* Editor Side */}
        <div className="flex-1 bg-white overflow-y-auto h-full relative">
          {children}
        </div>

        {/* Resizer/Divider */}
        <div className="w-[26px] bg-[#f3f3f3] border-x border-gray-200 flex flex-col items-center py-4 gap-4 z-10">
          <div className="w-1 h-8 bg-gray-300 rounded-full cursor-col-resize" title="Resize" />
          {/* Add more functionalities here later */}
        </div>

        {/* Preview Side */}
        <div className="flex-1 bg-[#f3f3f3] overflow-y-auto h-full">
          {preview}
        </div>
      </main>
    </div>
  );
}
