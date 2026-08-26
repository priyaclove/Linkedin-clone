"use client";

import { Eye, ChevronRight } from "lucide-react";

export default function NotificationSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[90px] space-y-3">

        {/* Profile card */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">

          {/* Cover */}
          <div className="relative h-14 bg-[#075985]">
            <div className="absolute left-1/2 top-7 -translate-x-1/2">
              <img
                src="/images/profile-image.jpeg"
                alt="Profile"
                className="h-20 w-20 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="px-4 pb-4 pt-12">
            <h2 className="text-lg font-bold">Jaya Kumari</h2>

            <p className="mt-1 line-clamp-2 text-[12px] text-gray-600">
              Software Developer | Expert in Full-Stack Development...
            </p>

            <p className="mt-2 text-[11px] font-semibold text-gray-500">
              📍 Mandi, Himachal Pradesh
            </p>

            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-gray-500">
              <span>✦</span>
              Cloveode Technologies
            </div>
          </div>
        </div>

        {/* Manage notifications */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">Manage your notifications</p>

          <button className="mt-2 text-xs font-semibold text-[#0a66c2] hover:underline">
            View settings
          </button>
        </div>
      </div>
    </aside>
  );
}