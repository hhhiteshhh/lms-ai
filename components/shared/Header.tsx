"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import {
  BookOpen,
  LayoutDashboard,
  type LucideProps,
  Menu,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Logo } from "../pages/landing_page/Logo";
import { Button } from "../ui/button";

const loggedOutLinks = [
  { href: "/#courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Reviews" },
];

export function Header() {
  const { has } = useAuth();

  const isUltra = has?.({ plan: "ultra" });

  const loggedInLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/courses", label: "My Courses", icon: BookOpen },
    // Show "Account" for Ultra users, "Upgrade" for others
    ...(isUltra
      ? [{ href: "/pricing", label: "Account", icon: Sparkles }]
      : [{ href: "/pricing", label: "Upgrade", icon: Sparkles }]),
  ];
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5 max-w-7xl mx-auto">
      <LogoNavigator />
      <AuthNavigator loggedInLinks={loggedInLinks} />
      <MobileNavigator loggedInLinks={loggedInLinks} />
    </nav>
  );
}

function LogoNavigator() {
  return (
    <div>
      {/* Logo - links to dashboard when logged in, home when logged out */}
      <SignedIn>
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <Logo />
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
        </Link>
      </SignedOut>
    </div>
  );
}
type NavigatorProps = {
  loggedInLinks: {
    href: string;
    label: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
};
function AuthNavigator({ loggedInLinks }: NavigatorProps) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Center Navigation - absolute positioning for perfect center on desktop */}
      <SignedOut>
        <div className="flex items-center gap-8 text-sm text-zinc-400">
          {loggedOutLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center gap-1">
          {loggedInLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/dashboard" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-violet-500/10 text-violet-300"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
                )}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </SignedIn>
    </div>
  );
}

function MobileNavigator({ loggedInLinks }: NavigatorProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      {/* Right section */}
      <SignedOut>
        {/* Mobile: Dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-zinc-900 border-zinc-800"
          >
            {loggedOutLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href} className="text-zinc-300 cursor-pointer">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <SignInButton mode="modal">
          <Button
            variant="ghost"
            className="text-zinc-400 hover:text-white hover:bg-white/5"
          >
            Sign in
          </Button>
        </SignInButton>
        <Link href="/pricing" className="hidden sm:block">
          <Button className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-600/25">
            Start Learning
          </Button>
        </Link>
      </SignedOut>

      <SignedIn>
        {/* Mobile: Dropdown menu next to user profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-zinc-900 border-zinc-800"
          >
            {loggedInLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/dashboard" && pathname.startsWith(link.href));

              return (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 cursor-pointer",
                      isActive ? "text-violet-300" : "text-zinc-300",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-9 h-9 ring-2 ring-violet-500/20",
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
