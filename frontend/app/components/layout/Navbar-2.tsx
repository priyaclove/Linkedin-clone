"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getUser, logout } from "@/lib/auth";
import {
  Home,
  Users,
  BriefcaseBusiness,
  MessageCircleMore,
  Bell,
  Search,
  ChevronDown,
  Compass,
  UsersRound,
  Wrench,
  Briefcase,
  BarChart3,
  Handshake,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    icon: Home,
    active: false,
    href: "/feed",
  },
  {
    title: "My Network",
    icon: Users,
    badge: 10,
    href: "/network",
  },
  {
    title: "Jobs",
    icon: BriefcaseBusiness,
    href: "/jobs",
  },
  {
    title: "Messaging",
    icon: MessageCircleMore,
    badge: 1,
    href: "/messaging",
  },
  {
    title: "Notifications",
    icon: Bell,
    badge: 2,
    href: "/notifications",
  },
];

export default function Navbar() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [meOpen, setMeOpen] = useState(false);
  const [username, setUsername] = useState("");

  const businessRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setUsername(getUser()?.username ?? "");
  }, []);

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        businessRef.current &&
        !businessRef.current.contains(event.target as Node)
      ) {
        setBusinessOpen(false);
      }
      if (meRef.current && !meRef.current.contains(event.target as Node)) {
        setMeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1128px] items-center justify-between px-4">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/Linkdin.png"
              alt="LinkedIn"
              width={34}
              height={34}
              priority
            />
          </Link>

          {/* Search */}
          <div className="hidden h-9 w-[280px] items-center rounded-3xl border border-gray-400 px-3 md:flex">
            <Search
              size={18}
              strokeWidth={3}
              className="text-black"
            />

            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* RIGHT NAV */}
        <nav className="flex h-full items-center">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={item.title}
                className={`relative flex h-[64px] w-[80px] flex-col items-center justify-center text-xs transition
                ${
                  item.active
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <div className="relative">
                  <Icon size={22} />

                  {item.badge && (
                    <span className="absolute -right-2 -top-2 flex h-5 min-w-[18px] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="mt-1 whitespace-nowrap">
                  {item.title}
                </span>
              </Link>
            );
          })}

          {/* ME */}
          <div ref={meRef} className="relative">
            <button
              onClick={() => setMeOpen((prev) => !prev)}
              className="flex h-[64px] w-[70px] flex-col items-center justify-center text-xs text-gray-600 hover:text-black"
            >
              <Image
                src="/images/profile-image.jpeg"
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full"
              />

              <span className="mt-1 flex items-center gap-1">
                Me
                <ChevronDown
                  size={12}
                  className={`transition-transform ${
                    meOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {meOpen && (
              <div className="absolute right-0 top-[68px] w-[260px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
                <div className="flex items-center gap-3 px-4 py-4">
                  <Image
                    src="/images/profile-image.jpeg"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {username || "LinkedIn Member"}
                    </p>
                    <Link
                      href={username ? `/in/${username}` : "/profile"}
                      className="text-xs text-[#0a66c2] hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* DIVIDER */}
          <div className="mx-2 h-8 w-px bg-gray-300" />

          {/* ================= FOR BUSINESS ================= */}
          <div ref={businessRef} className="relative">
            <button
              onClick={() => setBusinessOpen((prev) => !prev)}
              className={`flex h-[64px] w-[100px] flex-col items-center justify-center text-xs transition ${
                businessOpen
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {/* 3 x 3 GRID ICON */}
              <div className="grid grid-cols-3 gap-[3px]">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[4px] w-[4px] rounded-[1px] bg-black"
                  />
                ))}
              </div>

              <span className="mt-1 flex items-center gap-1 whitespace-nowrap">
                For Business
                <ChevronDown
                  size={12}
                  className={`transition-transform ${
                    businessOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {/* ================= BUSINESS DROPDOWN ================= */}
            {businessOpen && (
              <div className="absolute right-[-80px] top-[68px] w-[660px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
                <div className="grid grid-cols-2">
                  {/* LEFT COLUMN */}
                  <div className="border-r border-gray-200 px-8 py-7">
                    <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
                      My Apps
                    </h2>

                    <BusinessItem
                      icon={<Compass size={25} />}
                      title="Sell"
                    />

                    <BusinessItem
                      icon={<UsersRound size={25} />}
                      title="Groups"
                    />

                    <BusinessItem
                      icon={<Wrench size={25} />}
                      title="Crosscheck"
                    />

                    <p className="mb-4 mt-8 text-sm font-semibold text-gray-500">
                      Talent
                    </p>

                    <BusinessItem
                      icon={<Briefcase size={25} />}
                      title="Hire with AI"
                    />

                    <BusinessItem
                      icon={<BarChart3 size={25} />}
                      title="Talent Insights"
                    />

                    <p className="mb-4 mt-8 text-sm font-semibold text-gray-500">
                      Sales
                    </p>

                    <BusinessItem
                      icon={<Handshake size={25} />}
                      title="Services Marketplace"
                    />
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="px-8 py-7">
                    <h2 className="mb-6 text-[20px] font-semibold text-gray-900">
                      Explore more for business
                    </h2>

                    <BusinessLink
                      title="Hire on LinkedIn"
                      description="Find, attract and recruit talent"
                    />

                    <BusinessLink
                      title="Sell with LinkedIn"
                      description="Unlock sales opportunities"
                    />

                    <BusinessLink
                      title="Post a job for free"
                      description="Find quality candidates"
                    />

                    <BusinessLink
                      title="Advertise on LinkedIn"
                      description="Acquire customers and grow your business"
                    />

                    <BusinessLink
                      title="Get started with Premium"
                      description="Expand and leverage your network"
                    />

                    <BusinessLink
                      title="Learn with LinkedIn"
                      description="Courses to develop your employees"
                    />

                    <BusinessLink
                      title="Admin Center"
                      description="Manage Billing and Account Details"
                    />

                    <button className="mt-7 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-blue-600">
                      Create a Company Page
                      <span className="text-lg">+</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PREMIUM */}
          <Link
            href="#"
            className="ml-4 w-[110px] text-center text-xs text-[#915907] hover:underline"
          >
            Try Premium for ₹0
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ================= BUSINESS ITEM ================= */

function BusinessItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="mb-6 flex w-full items-center gap-5 text-left transition hover:text-blue-600">
      <div className="text-blue-600">{icon}</div>

      <span className="text-[16px] font-semibold text-gray-800">
        {title}
      </span>
    </button>
  );
}

/* ================= BUSINESS LINK ================= */

function BusinessLink({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="mb-5 block w-full text-left">
      <p className="text-sm font-semibold text-gray-900 hover:text-blue-600">
        {title}
      </p>

      <p className="mt-1 text-xs leading-4 text-gray-600">
        {description}
      </p>
    </button>
  );
}