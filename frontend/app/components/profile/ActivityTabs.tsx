"use client";

import { useState } from "react";

export default function ActivityTabs() {
  const [activeTab, setActiveTab] = useState<"Posts" | "Reactions">("Posts");

  return (
    <div className="border-b px-6 pt-5">
      <h1 className="text-2xl font-semibold text-gray-900">
        All activity
      </h1>

      <div className="mt-5 flex gap-2">
        {(["Posts", "Reactions"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              activeTab === tab
                ? "border-[#057642] bg-[#057642] text-white"
                : "border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}