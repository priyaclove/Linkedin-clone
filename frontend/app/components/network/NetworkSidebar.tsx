"use client";

import {
  Users,
  UserPlus,
  UsersRound,
  CalendarDays,
  FileText,
  Newspaper,
} from "lucide-react";

const menu = [
  {
    icon: Users,
    title: "Connections",
    count: "8,447",
  },
  {
    icon: UserPlus,
    title: "Following & followers",
  },
  {
    icon: UsersRound,
    title: "Groups",
  },
  {
    icon: CalendarDays,
    title: "Events",
    count: "1",
  },
  {
    icon: FileText,
    title: "Pages",
    count: "44",
  },
  {
    icon: Newspaper,
    title: "Newsletters",
    count: "12",
  },
];

export default function NetworkSidebar() {
  return (
    <aside className="space-y-3">
      {/* Manage network */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b px-5 py-4">
          <h2 className="text-[15px] font-semibold">
            Manage your network
          </h2>
        </div>

        <div className="py-2">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} className="text-gray-500" />

                  {item.title}
                </span>

                {item.count && (
                  <span className="text-xs text-gray-500">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Advertisement */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <p className="text-center text-[10px] text-gray-500">
          Promoted
        </p>

        <div className="mt-3 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold">
            P
          </div>
        </div>

        <h3 className="mt-3 text-center text-sm font-semibold">
          Build your professional network
        </h3>

        <p className="mt-1 text-center text-xs text-gray-500">
          Discover people and opportunities.
        </p>

        <button className="mt-3 w-full rounded-full border border-blue-600 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50">
          Learn more
        </button>
      </div>

      {/* Footer */}
      <div className="px-3 py-3 text-center text-[10px] leading-5 text-gray-500">
        About &nbsp; Accessibility &nbsp; Help Center
        <br />
        Privacy & Terms &nbsp; Advertising
        <br />
        Business Services
        <br />
        <span className="font-semibold text-blue-600">
          LinkedIn
        </span>{" "}
        Corporation © 2026
      </div>
    </aside>
  );
}