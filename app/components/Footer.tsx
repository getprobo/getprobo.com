import Link from "next/link";
import {
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
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
                <img
                  src="/hexa.svg"
                  alt="Hexa"
                  className="inline-block w-5 h-5"
                />
              </a>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://x.com/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://discord.gg/8qfdJYfvpY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://linkedin.com/in/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/getprobo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
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
                  className="text-gray-400 hover:text-white text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
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
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/subprocessors"
                  className="text-gray-400 hover:text-white text-sm"
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
