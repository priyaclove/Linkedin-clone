"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Bookmark, Users, Newspaper, CalendarDays } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="w-[220px] space-y-2">
      {/* Profile Card */}
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white text-xs">
        {/* Cover */}
        <div className="relative h-14">
          <Image
            src="/images/background-image.jpeg"
            alt="Cover"
            fill
            className="object-[initial]"
          />
        </div>

        {/* Avatar */}
        <div className="relative flex left-5">
          <Image
            src="/images/profile-image.jpeg"
            alt="Profile"
            width={72}
            height={72}
            className="-mt-9 rounded-full border-2 border-white"
          />
        </div>

        {/* Info */}
        <div className="px-4 pb-4 ">
          <h2 className="mt-2 flex items-center gap-1 text-xl font-semibold hover:underline cursor-pointer">
            Jaya Kumari
            <ShieldCheck className="h-4 w-4" />
          </h2>

          <p className="mt-1 text-xs text-black">
            Software Developer | Expert in Full-Stack Development | ...
          </p>

          <p className="text-xs text-gray-500">Mandi, Himachal Pradesh</p>

          <div className="text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/images/company-image.jpeg"
                alt="Company"
                width={25}
                height={25}
              />

              <span className="text-xs font-medium">Cloveode Technologies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Card */}
      <div className="rounded-lg border border-gray-300 bg-white p-4">
        <p className="text-xs text-gray-600">
          Learn from industry leaders, only with Premium
        </p>

        <button className="mt-2 flex items-center gap-2 text-xs font-semibold hover:underline">
          <span className="h-3 w-3 rounded-sm bg-yellow-700"></span>
          Start 1 month free trial
        </button>
      </div>

      {/* Analytics */}
      <div className="rounded-lg border border-gray-300 bg-white">
        <Link
          href="/analytics/profile-views"
          className="flex items-center justify-between px-4 py-3 hover:bg-gray-100"
        >
          <div>
            <p className="text-xs font-semibold">Profile viewers</p>
          </div>

          <span className="text-xs font-semibold text-blue-600">73</span>
        </Link>
        <Link
          href="/analytics/profile-views"
          className="block px-4 py-3 text-xs font-semibold hover:bg-gray-100"
        >
          View all analytics
        </Link>
      </div>

      {/* Quick Links */}
      <div className="rounded-lg border border-gray-300 bg-white text-black font-bold py-2">
        <Link
          href="/my-items/saved-posts"
          className="flex items-center gap-3 px-4 hover:bg-gray-100"
        >
          <Bookmark size={18} />
          <span className="text-xs font-medium">Saved items</span>
        </Link>

        <Link
          href="/groups"
          className="flex items-center gap-3 px-4 py-2  hover:bg-gray-100"
        >
          <Users size={18} />
          <span className="text-xs font-medium">Groups</span>
        </Link>

        <Link
          href="/network/network-manager/newsletters"
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
        >
          <Newspaper size={18} />
          <span className="text-xs font-medium">Newsletters</span>
        </Link>

        <Link
          href="/events"
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
        >
          <CalendarDays size={18} />
          <span className="text-xs font-medium">Events</span>
        </Link>
      </div>
    </aside>
  );
}
