"use client";

import { RepositoryButton } from "./RepositoryButton";
import { JoinOurPrivateBetaButton } from "./JoinOurPrivateBetaButton";

export function BlogCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-black p-8 md:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1FF4C10_1px,transparent_1px),linear-gradient(to_bottom,#D1FF4C10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-geist-alt font-light text-center mb-4">
          Ready to streamline your compliance?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
          Join our open-source community and start managing your compliance with
          confidence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <RepositoryButton org="getprobo" repo="probo" defaultStars={292} />
          <JoinOurPrivateBetaButton />
        </div>
      </div>
    </div>
  );
}
