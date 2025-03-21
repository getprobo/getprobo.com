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
      className="relative dropdown-container"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="gap-2 bg-[#212121] text-white hover:bg-[#2a2a2a] transition-all rounded-full px-6 py-2 flex items-center">
        <LogIn className="h-4 w-4 mr-2" />
        Sign in
      </button>

      <div
        className={`absolute right-0 mt-2 w-64 p-0 border-0 bg-[#212121] backdrop-blur-sm shadow-lg rounded-md z-10 
                    transition-all duration-200 ease-in-out transform origin-top-right
                    ${
                      isHovering
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[-8px] pointer-events-none"
                    }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-3">
          <h3 className="text-sm font-medium mb-3 px-2 pt-1 text-[#c9ff3c]">
            Select your region
          </h3>
          <div className="grid gap-2">
            <a
              rel="nofollow noopener noreferrer"
              href="https://us.console.getprobo.com"
              className="w-full justify-start gap-3 px-3 py-3 text-sm hover:bg-[#c9ff3c]/10 text-white flex items-center rounded-md transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
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
              className="w-full justify-start gap-3 px-3 py-3 text-sm hover:bg-[#c9ff3c]/10 text-white flex items-center rounded-md transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
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
