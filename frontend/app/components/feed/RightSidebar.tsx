"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BadgeInfo ,
  ChevronRight,
  Dot,
} from "lucide-react";

const news = [
  {
    title: "The sports conversations to join..... ",
    time: "2h ago",
    readers: "12,451 readers",
  },
  {
    title: "Fastest-growing cities for jobs......",
    time: "4h ago",
    readers: "8,902 readers",
  },
  {
    title: "Wangchuk ends fast, CJP protest...",
    time: "6h ago",
    readers: "5,831 readers",
  },
  {
    title: "US to impose tariffs up to 12.5%....",
    time: "8h ago",
    readers: "4,293 readers",
  },
  {
    title: "Consumer firms to hike prices.......",
    time: "10h ago",
    readers: "7,120 readers",
  },
];

const puzzles = [
  "Tango",
  "Queens",
  "Pinpoint",
  "Crossclimb",
];

export default function RightSidebar() {
  return (
    <aside className="w-[300px] space-y-3">
      {/* LinkedIn News */}
      <div className="rounded-lg border border-gray-300 bg-white p-4">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-semibold text-lg">LinkedIn News</h2>

          <BadgeInfo size={18} className="text-gray-500" />
        </div>
<h3 className="text-gray-500 font-semibold">Top stories</h3>
        <div className="space-y-2">
          {news.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer hover:bg-gray-50 rounded p-1"
            >
              <div className="flex gap-2">
                {/* <Dot className="mt-1 shrink-0" /> */}

                <div>
                  <p className="text-[-18px] font-semibold">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.time} • {item.readers}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded px-2 py-1">
          Show more
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Today's Puzzles */}
      <div className="rounded-lg border border-gray-300 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">
          Today's puzzles
        </h2>

        <div className="space-y-3">
          {puzzles.map((game) => (
            <div
              key={game}
              className="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-100"
            >
              <div>
                <p className="font-medium">{game}</p>
                <p className="text-xs text-gray-500">
                  Solve today's puzzle
                </p>
              </div>

              <ChevronRight size={18} />
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="rounded-lg border border-gray-300 bg-white p-4 text-center">
        <p className="text-xs text-gray-500">Ad</p>

        <div className="mt-3 flex justify-center gap-3">
          <Image
            src="/images/profile-image.jpeg"
            alt="Profile"
            width={56}
            height={56}
            className="rounded-full"
          />

          <Image
            src="/images/profile-image.jpeg"
            alt="Company"
            width={56}
            height={56}
            className="rounded-lg"
          />
        </div>

        <p className="mt-4 text-sm">
          Priya, grow your career with premium insights.
        </p>

        <button className="mt-4 rounded-full border border-blue-600 px-5 py-1 text-sm font-semibold text-blue-600 hover:bg-blue-50">
          Try Premium
        </button>
      </div>

      {/* Footer */}
      <div className="px-3 text-center text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="#">About</Link>
          <Link href="#">Accessibility</Link>
          <Link href="#">Help Center</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Advertising</Link>
          <Link href="#">Business Services</Link>
          <Link href="#">Get the App</Link>
        </div>

        <p className="mt-4 font-medium">
          LinkedIn Clone © 2026
        </p>
      </div>
    </aside>
  );
}