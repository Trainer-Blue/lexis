'use client';

import { useEffect, useState } from "react";

interface ProgressBarProps {
  sections: any[];
  currentSection: number;
}

export default function ProgressBar({ sections, currentSection }: ProgressBarProps) {
  const [mounted, setMounted] = useState(false);

  // Handle hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-4 sm:pt-6">
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span>Progress</span>
          <span>{Math.round(((currentSection + 1) / sections.length) * 100)}%</span>
        </div>
        
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-out" 
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            aria-label={`${Math.round(((currentSection + 1) / sections.length) * 100)}% progress through summary`}
            role="progressbar"
            aria-valuenow={Math.round(((currentSection + 1) / sections.length) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        
        {/* <div className="flex justify-between px-0.5 mt-1">
          {sections.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index <= currentSection 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                  : 'bg-secondary'
              }`}
              aria-hidden="true"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}