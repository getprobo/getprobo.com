import Link from "next/link";
import { Twitter, Linkedin, MessageSquare, Github } from "lucide-react";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm">12 Rue Martel, Paris</p>
              <p className="text-sm">France</p>
            </div>
            <div className="text-sm">
              Backed by {"  "}
              <a
                href="https://www.hexa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/hexa.svg"
                  alt="Hexa"
                  width={20}
                  height={20}
                  className="inline-block"
                />
              </a>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://x.com/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1DA1F2]"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://discord.gg/8qfdJYfvpY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7289DA]"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://linkedin.com/in/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077B5]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#333]"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/subprocessors"
                  className="text-gray-400 hover:text-[#D1FF4C] text-sm"
                >
                  Subprocessors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
