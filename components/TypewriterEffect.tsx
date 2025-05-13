"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterEffect({
  words,
  delay = 1500,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseDuration = 2000,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!words.length) return;

    if (isDeleting) {
      // Deleting text
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Typing text
      const currentWord = words[currentWordIndex];
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentWordIndex,
    currentText,
    isDeleting,
    words,
    delay,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {currentText}
      <span
        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
      >
        |
      </span>
    </span>
  );
}
