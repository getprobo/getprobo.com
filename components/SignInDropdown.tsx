"use client";

import { useState, useRef, useEffect } from "react";
import { LogIn } from "lucide-react";

export function SignInDropdown() {
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="dropdown-container relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-2 rounded-full bg-[#212121] px-6 py-2 text-white transition-all hover:bg-[#2a2a2a]">
        <LogIn className="mr-2 h-4 w-4" />
        Sign in
      </button>

      <div
        className={`absolute right-0 z-10 mt-2 w-64 origin-top-right transform rounded-md border-0 bg-[#212121] p-0 shadow-lg backdrop-blur-xs transition-all duration-200 ease-in-out ${
          isHovering
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[-8px] opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-3">
          <h3 className="mb-3 px-2 pt-1 text-sm font-medium text-[#c9ff3c]">
            Select your region
          </h3>
          <div className="grid gap-2">
            <a
              rel="nofollow noopener noreferrer"
              href="https://us.console.getprobo.com"
              className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-[#c9ff3c]/10"
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                <span className="text-xl">🇺🇸</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">United States</span>
                <span className="text-xs text-white/60">US Data Center</span>
              </div>
            </a>
            <a
              rel="nofollow noopener noreferrer"
              href="https://eu.console.getprobo.com"
              className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-[#c9ff3c]/10"
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                <span className="text-xl">🇪🇺</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">European Union</span>
                <span className="text-xs text-white/60">EU Data Center</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
