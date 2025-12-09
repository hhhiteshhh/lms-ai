import { Code2 } from "lucide-react";
import Link from "next/link";

export function SectionSix() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-zinc-800/50 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold">LMS AI</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <p className="text-sm text-zinc-600">
          © {year} LMS AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
