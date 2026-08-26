import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Users,
  SquarePlay,
  BriefcaseBusiness,
  Puzzle,
} from "lucide-react";

const navItems = [
  {
    title: "Top Content",
    href: "/top-content",
    icon: Rocket,
  },
  {
    title: "People",
    href: "/people",
    icon: Users,
  },
  {
    title: "Learning",
    href: "/learning",
    icon: SquarePlay,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Games",
    href: "/games",
    icon: Puzzle,
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E0E0E0] bg-white">
  <div className="mx-auto flex h-[75px] max-w-[1128px] items-center justify-between px-6">
        {/* Logo */}

        <Link href="/">
          <Image
            src="/images/LinkedIn-logo.png"
            alt="LinkedIn"
            width={100}
            height={35}
            priority
          />
        </Link>

        {/* Right */}

        <div className="flex items-center gap-10">
          {/* Navigation */}

          <nav className="items-center gap-8 flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col items-center text-gray-600 transition hover:text-black"
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="transition group-hover:scale-110"
                  />

                  <span className="mt-1 text-sm">{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Divider */}

          <div className="hidden h-10 w-px bg-gray-300 lg:block" />

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/auth/register"
              className="rounded-full px-4 py-3 text-base font-semibold text-[#000000BF] hover:bg-[#0000000F]"
            >
              Join now
            </Link>

            <Link
              href="/auth/login"
              className="flex h-12 items-center justify-center rounded-full border border-[#0A66C2] px-8 text-base font-semibold text-[#0A66C2] hover:bg-[#EAF4FE]"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
