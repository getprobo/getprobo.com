"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RepositoryButtonProps {
  org: string;
  repo: string;
  defaultStars: number;
}

export function RepositoryButton({
  org,
  repo,
  defaultStars,
}: RepositoryButtonProps) {
  const [stars, setStars] = useState(defaultStars);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${org}/${repo}`
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    }

    fetchStars();
  }, [org, repo]);

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={`https://github.com/${org}/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#4A5334] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5a6340] transition-colors flex items-center gap-2 w-full md:w-auto justify-center"
    >
      <Github className="w-5 h-5" />
      Repository
      <span className="bg-[#3A4324] px-2 py-1 rounded-full text-sm">
        ★ {stars}
      </span>
    </motion.a>
  );
}
