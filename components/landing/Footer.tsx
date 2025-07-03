import { Github, Twitter, Linkedin } from 'lucide-react';

    export default function Footer() {
      return (
        <footer className="bg-green-50 dark:bg-green-900 border-t border-green-300 dark:border-green-700 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-green-900 dark:text-green-300 font-semibold text-lg">
              &copy; {new Date().getFullYear()} Next.js Landing. All rights reserved.
            </div>
            <nav className="flex space-x-6">
              <a
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-200 transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/nextjs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-green-600 hover:text-green-800 transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/vercel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-green-800 hover:text-green-900 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </nav>
          </div>
        </footer>
      );
    }
