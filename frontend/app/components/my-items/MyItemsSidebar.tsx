"use client";

import { Bookmark } from "lucide-react";

export default function MyItemsSidebar() {
  return (
    <aside className="w-full md:w-[270px]">
      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-3">
          <Bookmark
            size={16}
            className="fill-gray-500 text-gray-500"
          />

          <h2 className="text-sm font-semibold text-gray-600">
            My items
          </h2>
        </div>
      </div>
    </aside>
  );
}